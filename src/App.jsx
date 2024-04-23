import { useState } from 'react';

import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';

import './App.css';

function App() {

    const [toDos, setToDos] = useState([
      {
        id: 1,
        text: "Criar funcionalidade X no sistema",
        category: "Trabalho",
        isCompleted: false,
      },
      {
        id: 2,
        text: "Ir para a academia",
        category: "Pessoa",
        isCompleted: false,
      },
      {
        id: 3,
        text: "Estudar React",
        category: "Estudos",
        isCompleted: false,
      },
    ]);

    return (
      <div className="app">
        <h1>Lista de Tarefas</h1>
        <div className="todo-list">
          {toDos.map((todo) => (
            // eslint-disable-next-line react/jsx-key
            <ToDo todo={todo}/>
          ))}
        </div>
        <ToDoForm />
      </div> 
    );
  

}

export default App;
