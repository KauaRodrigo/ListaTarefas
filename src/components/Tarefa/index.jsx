import './Tarefa.css'

const Tarefa = (props) => {    

    return (
        <div className='Tarefa'>
            <input id="check" type="checkbox" />
            <div>
                <h1>{ props.title }</h1>
                <p>{ props.desc }</p>
            </div>
        </div>
    )
}

export default Tarefa