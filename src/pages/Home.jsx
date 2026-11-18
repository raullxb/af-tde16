import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../contexts/TaskContext";
import TaskForm from "../components/TaskForm";

export default function Home() {
  const { tasks, deleteTask, updateTask } = useContext(TaskContext);
  const [editingTask, setEditingTask] = useState(null);

  const toggleStatus = (task) => {
    const newStatus = task.status === "Pendente" ? "Concluído" : "Pendente";
    updateTask(task.id, { ...task, status: newStatus });
  };

  return (
    <div className="page-container">
      <h1>Gerenciador de Tarefas</h1>
      <TaskForm taskToEdit={editingTask} clearEditing={() => setEditingTask(null)} />

      <h2>Lista de Tarefas</h2>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <h3 className="task-title">
              {task.title} - <span className={task.status === "Concluído" ? "status completed" : "status pending"}>{task.status}</span>
            </h3>
            <div className="task-actions">
              <Link className="task-link" to={`/task/${task.id}`}>
                <button className="action-button">Ver Detalhes</button>
              </Link>
              <button className="action-button" onClick={() => setEditingTask(task)}>Editar</button>
              <button className="action-button" onClick={() => toggleStatus(task)}>Mudar Status</button>
              <button className="action-button delete-button" onClick={() => deleteTask(task.id)}>
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}