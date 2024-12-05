import {useState} from 'react'
//usa use state para gerenciar valpres de estado
const HookUseState = () => {
    let userName = "João";
    const [name, setName] = useState("Keren");
    const changeNames = () => {
        userName = "Maria";
        setName("Ana");
    }

    // 2 - useState e input
    const [age, setAge] = useState(18);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div>
        <hr/>
        <h2>useState</h2>
            <p>Variavel: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Change</button>
       
        <form onSubmit={handleSubmit}>
            <label>idade:</label>
            <input type='text' value={age} onChange={(e) => setAge(e.target.value)}></input>
            <input type='submit' value='Enviar'></input>
        </form>
        <p>
            Idade: {age}
        </p>
       
    </div>
  )
}

export default HookUseState;