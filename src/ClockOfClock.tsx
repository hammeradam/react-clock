import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Digit from './Digit';

const Wrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function App() {
    const [time, setTime] = useState(new Date());
    const [hour, setHour] = useState([0, 0]);
    const [minute, setMinute] = useState([0, 0]);
    const [second, setSecond] = useState([0, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });

    useEffect(() => {
        setHour([
            parseInt(time.getHours().toString().padStart(2, '0')[0]),
            parseInt(time.getHours().toString().padStart(2, '0')[1]),
        ]);

        setMinute([
            parseInt(time.getMinutes().toString().padStart(2, '0')[0]),
            parseInt(time.getMinutes().toString().padStart(2, '0')[1]),
        ]);

        setSecond([
            parseInt(time.getSeconds().toString().padStart(2, '0')[0]),
            parseInt(time.getSeconds().toString().padStart(2, '0')[1]),
        ]);
    }, [time]);

    return (
        <Wrapper>
            {/* Hour */}
            <Digit number={hour[0]} />
            <Digit number={hour[1]} />

            {/* Minute */}
            <Digit number={minute[0]} />
            <Digit number={minute[1]} />

            {/* Secund */}
            <Digit number={second[0]} />
            <Digit number={second[1]} />
        </Wrapper>
    );
}

export default App;
