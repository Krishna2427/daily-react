import React, { useCallback, useMemo, useState } from 'react'
import { Button, Container } from 'react-bootstrap'


function ExpensiveComponet({ count }) {
    const calculateExpensiveValues = useMemo(() => {

        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += count * 2;
        }
        return result;
    }, [count]);

    return <div>Calcute value: {calculateExpensiveValues}</div>
}
const UseMemo = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    return (
        <Container>
            <ExpensiveComponet count={count} />
            <Button onClick={increment}>increment</Button>
        </Container>
    )
}

export default UseMemo;