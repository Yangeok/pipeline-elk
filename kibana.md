# Kibana

### Outline

- [Downloading csv file](#Downloading-csv-file)

### Downloading csv file

본 방법은 hacky한 방법이므로, 새로운 방법을 찾는대로 업데이트하도록 하겠습니다.

- kibana에 아래와 같은 주소로 접속합니다.
  `http://<HOSTNAME>:5601`

- 사용이 처음이라면 로그인이 필요합니다. 계정과 비밀번호는 다음과 같습니다. (수정 예정)

- 메인페이지로 들어갑니다.

  ![](../assets/images/kibana/01.jpg)

- 왼쪽 메뉴에서 `Discover`로 들어갑니다.

  <img src="../assets/images/kibana/02.jpg" width="250">

- 여기서부터 5단계의 과정을 거칩니다.

  - `index` 필터링
  - 날짜 필터링
  - export할 필드 설정
  - 컬럼별 필터링
  - 저장 및 csv 생성

- `index` 필터링을 합니다. `(change)`를 누르면 미리 설정해뒀던 index pattern을 고를 수 있습니다. 패턴 외의 임의의 문자열은 무시됩니다.

  <img src="../assets/images/kibana/03.jpg" width="250">

- 시작날짜와 종료날짜를 설정합니다.

  ![](../assets/images/kibana/04.jpg)

- `Available fields`에서 `date`를 제외한 가공에 필요한 필드명을 전부 선택합니다. (수정 예정)

  - `channel`, `click`, `content`, `link`, `site`, `title`, `username`, `category`

    <img src="../assets/images/kibana/15.jpg" width="250">

- `Search`에서 필터링할 쿼리문을 입력합니다. 자동완성이 들어가있고, sql보다 자연어에 가까운 쿼리문으로 docs없이도 바로 사용가능하다고 생각합니다.

  ![](../assets/images/kibana/05.jpg)

- 모든 설정을 했으면 `Refresh`를 눌러 새로고침 합니다.

- `Save`를 클릭해 파일명이 될 검색결과를 저장합니다.

  - 예: `인덱스명-YYYY-MM-DD-비고`

    <img src="../assets/images/kibana/07.jpg" width="250">

- `Share - CSV Reports`를 클릭해 csv를 생성합니다.

  <img src="../assets/images/kibana/09.jpg" width="250">

- 생성한 csv파일을 다운받는 방법은 다음과 같습니다.

  - `Generate CSV`를 통해 생긴 우측 하단 팝업을 통해 다운받는 방법

    - 우측 하단에 큐에 전달됐다는 메시지가 발생합니다.

      <img src="../assets/images/kibana/10.jpg" width="250">

    - 조금 기다리면 다운로드 버튼이 생성됩니다.

      <img src="../assets/images/kibana/11.jpg" width="250">

  - `Management - Reporting`에서 리포트 리스트에서 다운받는 방법

    - `Reporting`으로 들어갑니다.

      <img src="../assets/images/kibana/12.jpg" width="250">

    - 다음과 같은 리스트에서 원하는 데이터셋을 찾아 다운받습니다.

      ![](../assets/images/kibana/13.jpg)
