import { useEffect, useState } from 'react';

// sintaxe utiliza uma função e um array de dependências
const HooksUseEffect = () => {

    // useEffect sem dependências sempre é executado quan o component for rerenderizado
    useEffect(() => {
        console.log("useEffect sem dependências");
    });

    const [number, setNumber] = useState(0);
    const [anotherNumber, setAnotherNumber] = useState(0);
    const changeSomething = () => {
        setNumber(number + 1);
        console.log(number);
    }

    const changeNumber = () => {
        setAnotherNumber(anotherNumber + 1);
        console.log(anotherNumber);
    }

    // useEffect com array dependência vazio, executa o useEffect apenas uma vez
    useEffect(() => {
        console.log("Number atualizado:", number);
    }, [number]);

    // useEffect com array de dependências, executa o useEffect apenas quando a dependência mudar
   
    useEffect(() => {
        if (anotherNumber > 0) {
            console.log("Another Number atualizado:", anotherNumber);
        }
    }, [anotherNumber]);


    // cleanup function
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Hello world");
        }, 2000);

        return () => {
            clearTimeout(timer);
        }
    }, [anotherNumber]);
    return (
        <div>
            <h2>UseEffect</h2>
            <span> Number {number}</span>
            <button onClick={e => setNumber(number+1)}>+</button>
            <p>Another Number</p> <span>{anotherNumber}</span>
            <button onClick={changeNumber}>+</button>
        </div>
    );
}

export default HooksUseEffect;