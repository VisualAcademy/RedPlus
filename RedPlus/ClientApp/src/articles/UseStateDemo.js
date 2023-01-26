import { useState } from 'react';

function UseStateDemo() {

    //[1] 빈 값
    const empty = useState();
    console.log(empty); 

    //[2] 문자열
    const message = useState("안녕하세요.");
    console.log(message); 

    //[3] 속성(필드)와 메서드
    const [field, setMethod] = useState("기본 문자열");
    console.log(field);

    return (
        <>
            <h1>useState를 사용한 React.js 상태 데이터 관리</h1>

            <button onClick={ () => setMethod("새로운 문자열") }>새로운 문자열로 설정</button>
            <button onClick={() => setMethod("또 다른 문자열")}>또 다른 문자열로 설정</button>
        </>
    );
}

export default UseStateDemo;
