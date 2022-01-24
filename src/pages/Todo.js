function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div>
      <span style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>
        {todo.text}
      </span>
      <div>
        <button variant='outline-success' onClick={() => markTodo(index)}>
          ✓
        </button>
        <button variant='outline-danger' onClick={() => removeTodo(index)}>
          ✕
        </button>
      </div>
    </div>
  );
}
export default Todo;
