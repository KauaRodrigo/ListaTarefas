import { useState } from 'react'
import './Form.css'

const Form = (props) => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState()

    function onTypeDesc(evento) {
        setDesc(evento.target.value)
    }

    function onTypeTitle(evento) {
        setTitle(evento.target.value)
    }

    function onSave() {
        props.addTask({
            title,
            desc
        })
    }

    return (
        <div className='Form'>     
            <div>       
                <label>Título da tarefa</label>
                <input value={ title } type="text" onChange={ onTypeTitle } placeholder='Infome o título da tarefa' />
            </div>
            <div>
                <label>Descrição</label>            
                <textarea value={ desc } onChange={onTypeDesc} placeholder='Inclua detalhes da tarefa' />
            </div>
            <button onClick={onSave}>Criar Tarefa</button>
        </div>
    )
}

export default Form