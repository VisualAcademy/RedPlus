import React from 'react';

function PropsFunctionSub(props) {
    console.log(props); // JSON 형태로 넘어온 값들 확인 가능 
    return <h2>[2] 자식: 매개 변수로 받은 값: {props.message}</h2>
}

PropsFunctionSub.defaultProps = {
    message: "기본값"
};

export class PropsFunctionDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>[1] 부모: 자식 컴포넌트에게 데이터 전달</h1>
                <PropsFunctionSub message="보내준 데이터" order="1"></PropsFunctionSub>
                <PropsFunctionSub></PropsFunctionSub>
            </div >
        );
    };
}
