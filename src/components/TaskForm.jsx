import { useState, useContext, useEffect } from "react";
import { TaskContext } from "../contexts/TaskContext";

export default function TaskForm({ taskToEdit, clearEditing }) {
  const { addTask, updateTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !description.trim()) {
      alert("Por favor, preencha o título e a descrição!");
      return;
    }

    if (taskToEdit) {
      updateTask(taskToEdit.id, { ...taskToEdit, title, description });
      clearEditing();
    } else {
      addTask({
        id: String(Date.now()),
        title,
        description,
        status: "Pendente"
      });
    }

    setTitle("");
    setDescription("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h3>{taskToEdit ? "Editar Tarefa" : "Nova Tarefa"}</h3>
      <input 
        type="text" 
        placeholder="Título da tarefa" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Descrição" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button type="submit">{taskToEdit ? "Atualizar Tarefa" : "Adicionar Tarefa"}</button>
      {taskToEdit && (
        <button className="cancel-button" type="button" onClick={clearEditing}>
          Cancelar Edição
        </button>
      )}
    </form>
  );
}