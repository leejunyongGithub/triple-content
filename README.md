# triple-content
triple-homework

1. [프로젝트 구조]
    src - assets - img(이미지)
        - componets(공통컴포넌트)
        - pages(공통 컴포넌트를 이용해서 만든 페이지)
        App.js
        index.js
        index.css
2. 사용한 라이브러리
    styled-components - css를 함수로 사용가능하게 하는 라이브러리

3. 숫자가 증가하는 기능은 어떻게 보면 공통적인 부분이기 때문에 CountUp이라는 공통 컴포넌트를 만들어서 재사용 하였습니다.

4. 숫자 증가 속도가 느려지는 효과를 구현하기 위해서 Easing Function을 사용하였고
  그 중에서도 easeOutCubic을 사용하여 구현하였습니다.
  https://gist.github.com/gre/1650294

5. 상태관리를 사용하지 않아도 직접적으로 dom에 접근해서 숫자를 변경하는걸로 기능 구현이 
   가능했지만 dom을 수정하는 방법과 state를 사용해서 구현하는 방법 두가지를 구현해 보았습니다.
