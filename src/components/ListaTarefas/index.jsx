import Tarefa from '../Tarefa'
import './ListaTarefas.css'

const ListaTarefas = (props) => {
    return (
        <div className='ListaTarefas'>
            {props.tasks.map(task => <Tarefa title={task.title} desc={task.desc} />)}
        </div>
    )
}

export default ListaTarefas