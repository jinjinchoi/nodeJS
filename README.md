# NodeJS

> 자바스크립트 런타임 환경(자바스크립트를 실행할 수 있다.)
> 여러 OS에서 실행이 가능하다. 윈도우/맥/리눅스

## NodeJS의 역사

> 2009년도에 NodeJS가 출시 이때 npm도 같이 생성.
> 지속적으로 업데이트를 하고 있고 출시하고 2년 뒤에 바로 대형 웹 플랫폼에서 사용되었다. (LinkedIn)
> 2020년에 github npm을 인수 등
> nodejs를 사용하는 기업 즉, 시장도 많이 증가하고 있다.
> 서버 구축에 정말 많이 사용되고 있고 마이크로 서비스 아키텍쳐를 설계하는데 중요한 역할을 하는 엔진

## Nodejs 등장
> 자바스크립트로 서버측 활용이 가능한 본격적 시작은 nodeJs(javascript V8 엔진)

## NodJS의 인기
> nodeJS는 싱글 스레드인 자바스크립트를 활용한 서버측 로직을 작성하기 위해 비동기 이벤트 기반 아키텍처를 사용. 성능이 좋고 확장성을 제공한다.

## NodeJs가 서버?
> nodeJs 자체가 웹서버가 아니고
> nodeJs는 js를 사용해서 서버측 로직을 코드로 작성하고 서버를 구축할 수 있게 제공한다.
> 개발의 생산성을 위해 npm을 통해 모듈을 설치받거나 제공할 수 있다.

## npm(node package manager)
> 개발자들이 작성한 자신의 소스코드를 공유할 수 있는 패키지 저장소
> npm을 사용하면 모듈을 쉽게 설치받아서 사용할 수 있다.
> nodeJS가 개발된 이유는 웹서버 개발을 하기위해서도 있지만 방대한 오픈소스 생태계를 구축하기 위해서 개발자들이 편하게 개발을 할 수 있도록 개발 생산성을 향상하기 위해서


## V8 javascript 엔진
> 크롬 v8 자바스크립트 엔진으로 빌드된 서버측 자바스크립트 런타임 환경
> 브라우저와 런타임 환경이 다르다.

> 빌드가 되었다는 건 구글에서 개발한 V8엔진을 사용해서 코드를 컴파일러를 통해 실행파일로 변환한는 작업이라고 보면됨

## nodeJS의 블로킹과 논블로킹
> nodeJS에서 `비동기 I/O` 작업을 진행하는 동안 또 다른 작업을 실행할 수 있다. (nodejs의 장점)
> I/O 작업이 완료될 떄까지 기다리면서 다른 코드도 실행시켜줄 수 있다.
> Input/Output : 파일 시스템 (브라우저에서 파일을 조작할 수는 없고) 네트워크 디스크 등 데이터를 읽거나 쓰거나 하는 작업 (nodejs는 이런 무거운 작업의 속도가 빠르다)

> 블로킹이란 한 작업이 끝날때까지 다른 작업을 수행하지 않는 것.
> 블록킹 I/O 작업은 수행하는 동안 다른 코드의 작동을 중단시킬 수 있다.

> 논블로킹이란 I/O 작업을 수행하는 동안 다른 코드들을 실행할 수 있게 하는 것
> nodeJs는 모든 I/O 작업을 비동기적으로 실행하고 블로킹을 하지 않는다.

## nodejs의 이벤트 기반의 아키텍처
> nodeJs의 가장 큰 특징으로 이벤트 기반의 아키텍처가 있고
> 이벤트 기반의 프로그래밍은 이벤트가 발생하면 콜백 함수를 실행시키는 방식
> 이벤트 기반의 프로그래밍을 작성하면 비동기 처리가 가능하고 좋은 성능과 확장성을 가질 수 있다.

### 이벤트 기반
> 이벤트를 실행하면 이벤트로 등록한 작업을 수행
> 우리가 자바스크립트로 클릭과 같은 이벤트에 콜백함수를 작성하고 
> 이벤트 기반의 특정 이벤트가 발생하면 전달한 콜백함수를 호출해서 실행시킨다.
> 이런 내용을 `이벤트 리스너에 콜백함를 등록한다.`라고 한다.
