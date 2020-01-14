# Logstash

### Outline

- [Uploading csv file](#Uploading-csv-file)

### Uploading csv file

`data`폴더를 생성합니다.

```sh
mkdir data
```

`csv.conf`파일을 열어 ElasticSearch 호스트명과 인덱스를 수정합니다.

```conf
output {
	elasticsearch {
		action       => "index"
		hosts => ["http://<HOSTNAME>:9200"]
		index => "<INDEX_NAME>"
		document_type => "<INDEX_NAME>"
	}
   stdout {
    codec => rubydebug
  }}
```

`logstash.yml`파일을 열어 호스트명을 수정합니다.

```yml
xpack.monitoring.elasticsearch.url: http://<HOSTNAME>:9200
```

`data`폴더에 업로드하고자 하는 csv파일들을 복사합니다.

docker가 꼭 설치된 상태여야 합니다. docker가 실행되고 있는 상태라고 가정하고 `start.sh`파일을 실행합니다.

```sh
sh start.sh
```

아래와 같이 bash 쉘 창이 열립니다.

```sh
bash-4.2$
```

`csv.conf`파일을 읽어 ElasticSearch에 업로드합니다.

```sh
bin/logstash -f csv.conf
```
