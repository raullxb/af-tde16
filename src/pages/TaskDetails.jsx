import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { TaskContext } from "../contexts/TaskContext";

export default function TaskDetails() {
  const { id } = useParams();
  const { tasks } = useContext(TaskContext);

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return (
      <div className="not-found">
        <h2>Tarefa não encontrada.</h2>
        <Link to="/">Voltar para Home</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>Detalhes da Tarefa</h1>
      <div className="task-details">
        <h2>{task.title}</h2>
        <p><strong>Descrição:</strong> {task.description}</p>
        <p><strong>Status:</strong> {task.status}</p>
      </div>
      <br />
      <Link to="/">Voltar para a lista</Link>
    </div>
  );
}