// 작업을 할때
// 하나의 파일에 기능의 내용을 모두 작성하면
// 유지보수가 힘들다.
// 모듈화. 하나의 큰 프로그램의 가장 작은 단위
// 모듈은 각각의 파일 단위로 구분되고
// 파일의 내용은 필요한 기능의 함수나 변수들의 포함되어 있는 것.

const devClass = [
    {
        name : "진우",
        age : 29,
        comment () {
            console.log("안녕");
        }
    }
]

console.log(devClass);
// nodejs 런타임 환경에서 실행
// node "파일의 경로"

module.exports = devClass;
// index2.js 파일에서 내보낼 데이터

