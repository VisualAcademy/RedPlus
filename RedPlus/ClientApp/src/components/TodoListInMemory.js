import React from 'react';

// 컬렉션 형태의 데이터: 배열, 개체 리터럴, JSON, ... 
const todoItems = [
    { id: 1, title: "React 학습", isDone: true },
    { id: 2, title: "JavaScript 학습", isDone: true },
    { id: 3, title: "ASP.NET Core 학습", isDone: false },
];

// 자식 컴포넌트 
function TodoItem(props) {
    const isDoneStyle = {
        textDecoration: "line-through",
    };
    return (
        <li>
            <input
                type="checkbox"
                checked={props.item.isDone}
                // 체크 이벤트를 다시 부모로 전달, 자식은 그냥 UI와 이벤트만 담당 
                onChange={() => props.handleCheckedChange(props.item.id)}
            ></input>
            <span style={props.item.isDone ? isDoneStyle : null}>{props.item.title}</span>
        </li>
    );
}

// /TodoListInMemory 라우팅에서 사용되는 메인 컴포넌트 
class TodoListInMemory extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todoItems,
        };

        // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
        // https://ko.reactjs.org/docs/handling-events.html
        this.handleCheckedChange = this.handleCheckedChange.bind(this);
    }

    handleCheckedChange(id) {
        this.setState(prev => {
            const modified = prev.todos.map(todo => {
                if (todo.id === id) {
                    todo.isDone = !todo.isDone; // 체크 상태 토글 
                }
                return todo;
            });
            return {
                todos: modified
            }
        });
    }

    render() {
        const todos = this.state.todos.map((todo) => <TodoItem key={todo.id} item={todo}
            handleCheckedChange={this.handleCheckedChange} />);

        return (
            <>
                <h3>초간단 인-메모리 TODO 리스트</h3>
                <ul>
                    {todos}
                </ul>
            </>
        );
    }
}

export default TodoListInMemory;
