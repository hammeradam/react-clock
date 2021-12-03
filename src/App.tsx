import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: teal;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Circle = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: black;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 2px solid white; */
  transition: transform 0.3s ease;
`;

const Number = styled.div<{ index: number; max: number; size: number }>`
  position: absolute;
  top: ${({ size }) => size / 2 - 10}px;
  font-size: 20px;

  transform: rotate(${({ max, index }) => (360 / max) * (index - 1)}deg)
    translateY(-${({ size }) => size / 2 - 20}px);

  div {
    transform: rotate(270deg);
  }
`;

const Indicator = styled.div`
  position: absolute;
  width: 170px;
  height: 30px;
  border: 3px solid red;
  top: 50%;
  left: 50%;
  transform: translate(17px, -50%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    font-size: 20px;
    color: red;
    margin-top: -5px;
  }
`;

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Wrapper>
      <CircleWrapper>
        <Circle
          size={400}
          style={{
            transform: `rotate(-${
              270 +
              (360 / 10) *
                parseInt(time.getSeconds().toString().padStart(2, '0')[1])
            }deg)`,
          }}
        >
          {new Array(10).fill('').map((_, index) => (
            <Number
              key={`minute_1_${index}`}
              size={400}
              index={index + 1}
              max={10}
            >
              <div>{index}</div>
            </Number>
          ))}
        </Circle>
      </CircleWrapper>
      <CircleWrapper>
        <Circle
          size={340}
          style={{
            transform: `rotate(-${
              270 +
              (360 / 6) *
                parseInt(time.getSeconds().toString().padStart(2, '0')[0])
            }deg)`,
          }}
        >
          {new Array(6).fill('').map((_, index) => (
            <Number
              key={`minute_1_${index}`}
              size={340}
              index={index + 1}
              max={6}
            >
              <div>{index}</div>
            </Number>
          ))}
        </Circle>
      </CircleWrapper>
      <CircleWrapper>
        <Circle
          size={280}
          style={{
            transform: `rotate(-${
              270 +
              (360 / 10) *
                parseInt(time.getMinutes().toString().padStart(2, '0')[1])
            }deg)`,
          }}
        >
          {new Array(10).fill('').map((_, index) => (
            <Number
              key={`minute_1_${index}`}
              size={280}
              index={index + 1}
              max={10}
            >
              <div>{index}</div>
            </Number>
          ))}
        </Circle>
      </CircleWrapper>
      <CircleWrapper>
        <Circle
          size={220}
          style={{
            transform: `rotate(-${
              270 +
              (360 / 6) *
                parseInt(time.getMinutes().toString().padStart(2, '0')[0])
            }deg)`,
          }}
        >
          {new Array(6).fill('').map((_, index) => (
            <Number
              key={`minute_0_${index}`}
              size={220}
              index={index + 1}
              max={6}
            >
              <div>{index}</div>
            </Number>
          ))}
        </Circle>
      </CircleWrapper>
      <CircleWrapper>
        <Circle
          size={160}
          style={{
            transform: `rotate(-${
              270 +
              (360 / 10) *
                parseInt(time.getHours().toString().padStart(2, '0')[1])
            }deg)`,
          }}
        >
          {new Array(10).fill('').map((_, index) => (
            <Number
              key={`hour_1_${index}`}
              size={160}
              index={index + 1}
              max={10}
            >
              <div>{index}</div>
            </Number>
          ))}
        </Circle>
      </CircleWrapper>
      <CircleWrapper>
        <Circle
          size={100}
          style={{
            transform: `rotate(-${
              270 +
              (360 / 3) *
                parseInt(time.getHours().toString().padStart(2, '0')[0])
            }deg)`,
          }}
        >
          {new Array(3).fill('').map((_, index) => (
            <Number
              key={`hour_0_${index}`}
              size={100}
              index={index + 1}
              max={3}
            >
              <div>{index}</div>
            </Number>
          ))}
        </Circle>
      </CircleWrapper>

      <Indicator>
        <div>:</div>
        <div>:</div>
      </Indicator>
    </Wrapper>
  );
}

export default App;
