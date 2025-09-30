import { useState } from "react";
import Button from "./Button";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleChange = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
      if (!response.ok) {
        throw Error('Falha ao buscar tarefas');
      }
      const data: Task[] = await response.json();
      setTasks(data);
    } catch (err) {
      alert(`Erro no método: ${err}`);
    }
  };

  return (
    <>
      <h1 >Tasks from API</h1>
      <Button disabled={false} onClick={handleChange}>Get Tasks from API</Button>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            {item.title} {item.completed ? "(Concluída)" : "(Pendente)"}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
