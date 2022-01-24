import { useState } from 'react';

function FormTodo({ addTodo }) {
  const [value, setValue] = useState('');
  const [error, seterror] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return seterror('Please enter a value');
    addTodo(value);
    setValue('');
    seterror(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3
          style={{
            color: 'red',
          }}
        >
          {error}
        </h3>
        <div>
          <b>Add Todo</b>
        </div>
        <input
          type='text'
          className='input'
          value={value.toLocaleUpperCase()}
          onChange={e => setValue(e.target.value)}
          placeholder='Add new todo'
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}
export default FormTodo;
