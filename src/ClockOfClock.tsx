import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Colon from './Colon';
import Digit from './Digit';

const Wrapper = styled.time`
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
    const [size, setSize] = useState(40);

    const onResize = () => {
        setSize((window.innerWidth  - 100) / 34);
    }

    useEffect(() => {
        setSize((window.innerWidth  - 100) / 34);
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [])

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
        <Wrapper dateTime={time.toISOString()}>
            {/* Hour */}
            <Digit size={size} number={hour[0]} />
            <Digit size={size} number={hour[1]} />

            <Colon size={size} />

            {/* Minute */}
            <Digit size={size} number={minute[0]} />
            <Digit size={size} number={minute[1]} />

            <Colon size={size} />

            {/* Second */}
            <Digit size={size} number={second[0]} />
            <Digit size={size} number={second[1]} />
        </Wrapper>
    );
}

export default App;
