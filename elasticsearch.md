# ElasticSearch

### Outline

- [Downloading csv file](#Downloading-csv-file)

### Downloading csv file

먼저 `elastic-search`디렉토리에 들어가 아래와 같은 명령어로 패키지를 설치합니다.

```sh
# using npm
npm install

# using yarn
yarn
```

`update.sh`파일에 새로 만들거나 포크한 저장소명을 입력합니다.

```sh
git remote set-url origin <GIT_REPO_URL>
```

`outputs`폴더를 생성합니다.

```sh
mkdir outputs
```

`start.sh`파일을 실행하면 대화형으로 인덱스명, 시작날짜, 종료날짜를 입력할 수 있습니다. 아래와 같이 추출이 되어 `outputs`폴더 안에 `<INDEX_NAME>_<DATETIME>.csv`으로 파일이 저장된 것을 확인할 수 있습니다.

```sh
sh start.sh

> index name: <INDEX_NAME>

> start date: <START_DATE>

> end date: <END_DATE>

> <N> rows extracted...
```
