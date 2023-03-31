import './Banner.css'

const Banner = () => {
    const title = 'TaskList'
    const tag = '<React>'
    return (
        <div className="Banner">            
            <h1>{ title } <code>{ tag }</code></h1>
            <p>O app de tarefas para <code>TODOS</code>!</p>
        </div>
    )
}

export default Banner