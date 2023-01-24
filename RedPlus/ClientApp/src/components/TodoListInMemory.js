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
            todoItem: ""
        };

        // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
        // https://ko.reactjs.org/docs/handling-events.html
        this.handleCheckedChange = this.handleCheckedChange.bind(this);
        this.handleChangeTodoItem = this.handleChangeTodoItem.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
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

    handleChangeTodoItem(e) {
        this.setState({ todoItem: e.target.value });
    }

    handleChange(e) {
        e.preventDefault(); // 이벤트 기본 작업 방지: 버튼, 링크 등의 고유 기능을 제거하고 React 기능만 사용

        let todos = this.state.todos; // 현재 todos 상태 데이터 가져오기

        let maxId = Math.max.apply(Math, todos.map(t => t.id)); // id 최댓값 가져오기 

        // 새로운 TODO 항목 만들기 
        let newTodo = { id: maxId + 1, title: this.state.todoItem, isDone: false };

        // 상태 데이터에 추가 
        todos.push(newTodo); 

        // 상태 데이터 업데이트 
        this.setState({todos: todos, todoItem: ""}); 
    }

    render() {
        const todos = this.state.todos.map((todo) => <TodoItem key={todo.id} item={todo}
            handleCheckedChange={this.handleCheckedChange} />);

        return (
            <>
                <h3>초간단 인-메모리 TODO 리스트</h3>
                <div>
                    <form onSubmit={this.handleChange}>
                        <input type="text" value={this.state.todoItem}
                            onChange={this.handleChangeTodoItem}
                        ></input>
                        <input type="submit" value="Add"></input>
                    </form>
                </div>
                <ul>
                    {todos}
                </ul>
            </>
        );
    }
}

export default TodoListInMemory;
