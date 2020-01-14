const fs = require("fs");
const moment = require("moment");
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://elastic.work543.com:9200" });

const { INDEX_NAME, START_DATE, END_DATE } = process.env;
const indexName = INDEX_NAME;
const startDate = START_DATE;
const endDate = END_DATE;

const join = (dir, output, filename) =>
  require("path").join(dir, output, filename);

const name = async index =>
  await `${index}_${moment().format("YYYY-MM-DD-HHMMSS")}.csv`;

const setWriteStream = async filename => {
  const fields = [
    "keyword",
    "category",
    "date",
    "title",
    "username",
    "content",
    "click",
    "link",
    "channel",
    "site"
  ];
  const logs = fs.createWriteStream(join(__dirname, "./outputs", filename));
  await logs.write(`${fields.join(",")}\n`);
};

const addRow = async (item, filename) => {
  await fs.appendFile(
    join(__dirname, "./outputs", filename),
    `${item.keyword},${item.category},${item.date},${item.title},${item.username},${item.content},${item.click},${item.link},${item.channel},${item.site}\n`,
    err => err
  );
};

const model = async () => {
  const filename = await name(indexName);
  await setWriteStream(filename);

  const validator = [];
  const responseQueue = [];

  const result = await client.search({
    index: indexName,
    scroll: "30s",
    size: 100,
    body: {
      query: {
        range: {
          date: {
            gte: startDate,
            lte: endDate
          }
        }
      }
    }
  });
  responseQueue.push(result);

  while (responseQueue.length) {
    const { body } = responseQueue.shift();

    body.hits.hits.forEach(hit => {
      addRow(hit._source, filename);
      validator.push(hit._source.date);
    });

    if (body.hits.total.value === validator.length) {
      console.log(`\n> ${validator.length} files extracted...`);
      break;
    }

    responseQueue.push(
      await client.scroll({
        scrollId: body._scroll_id,
        scroll: "30s"
      })
    );
  }
};

model();
