import {useReducer, useState} from 'react'

const HookUseReducer = () => {
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // avançando em reducer
  

  const [taskText, setTaskText] = useState("");
  const initialTasks = [
    {id: 1, text :"Fazer alguam coisa"},
    {id: 2, text :"Fazer outra coisa"},
  ];
 

  const taskReducer = (state, action) => {
    switch (action.type){
        case 'ADD':
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                }
                setTaskText("");
                return [...state, newTask];
        case 'DELETE':
            return state.filter((task) => task.id !== action.id);
        default: {
            return state;
        }
    }
  };

  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTasks({type: 'ADD'});
  };

  const removeTask = (id) => {
    dispatchTasks({type: 'DELETE', id});
  }
  return (
    <div>
        <h2>UseReducer</h2>
        <p>{number}</p>
        <button onClick={dispatch}>Alterar number</button>
        <h3>Tarefas: </h3>
        <form  onSubmit={handleSubmit}>
            <input type='text' onChange={(e) => setTaskText(e.target.value)} value={taskText}/>
            <input type='submit' value='Enviar'/>
        </form>
        {tasks.map( (task) => 
            <li key={taskReducer.id} onDoubleClick={() => removeTask(task.id)} >{task.text}</li>
        )}
    </div>
  )
}

export default HookUseReducer;