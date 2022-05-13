function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Upgrade flight for Maui',
      isCompleted: false,
    },
    {
      text: 'Confirm room at resort',
      isCompleted: false,
    },
    {
      text: 'Book car rental',
      isCompleted: false,
    },
    {
      text: 'Pack for vacation',
      isCompleted: false,
    }           
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
