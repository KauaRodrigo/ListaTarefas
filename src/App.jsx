import { useState } from 'react'
import './App.css';
import Banner from './components/Banner'
import Form from './components/Form'
import ListaTarefas from './components/ListaTarefas'

function App() {
  const [tasks, setTask] = useState([])

  const onAddtask = (task) => {
    console.log(task)
    setTask([...tasks, task])
    console.log(tasks)
  }

  return (
    <div className="App">
      <Banner />      
      <Form addTask={(task) => onAddtask(task)} />
      <ListaTarefas tasks={tasks} />
    </div>
  );
}

export default App;
