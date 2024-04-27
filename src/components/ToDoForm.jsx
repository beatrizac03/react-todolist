import { useState } from "react";

const ToDoForm = ( {addTodo} ) => {
    const [value, setValue] = useState("");   
    const [category, setCategory] = useState(""); // ambos serão preenchidos pelos inputs

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        // adicionar todo 
        // limpar campos 
        addTodo(value, category);
        setValue("");
        setCategory("");
    }

  return (
    <div className="todo-form">
        <h2>Criar tarefa: </h2>
        <form onSubmit={handleSubmit} >
            <input 
            type="text" 
            placeholder="Digite o título" 
            value = {value}
            onChange={(e) =>  setValue(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export default ToDoForm