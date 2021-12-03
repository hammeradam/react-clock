import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Clock from './Clock';

interface DigitProps {
    number: number;
    size: number;
}

const Wrapper = styled.div<{ size: number }>`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: ${({ size }) => size * 5}px;
    height: ${({ size }) => size * 6}px;
`;

const getRotations = (number: number) => {
    switch (number) {
        case 0:
            return [
                [
                    [90, 180],[90, 270],[90, 270],[90, 270],[180, 270]
                ],
                [
                    [0, 180],[90, 180],[90, 270],[180, 270],[0, 180]
                ],
                [
                    [0, 180],[0, 180],[180, 180],[0, 180],[0, 180]
                ],
                [
                    [0, 180],[0, 180],[0, 0],[0, 180],[0, 180]
                ],
                [
                    [0, 180],[0, 90],[90, 270],[0, 270],[0, 180]
                ],
                [
                    [0, 90],[90, 270],[90, 270],[90, 270],[0, 270]
                ],
            ];
        case 1:
            return [
                [
                    [45, 45],[45, 45],[90, 180],[90, 270],[180, 270]
                ],
                [
                    [45, 45],[45, 45],[0, 90],[180, 270],[0, 180]
                ],
                [
                    [45, 45],[45, 45],[45, 45],[0, 180],[0, 180]
                ],
                [
                    [45, 45],[45, 45],[45, 45],[0, 180],[0, 180]
                ],
                [
                    [45, 45],[45, 45],[45, 45],[0, 180],[0, 180]
                ],
                [
                    [45, 45],[45, 45],[45, 45],[0, 90],[0, 270]
                ],
            ];
        case 2:
            return [
                [
                    [90, 180],[90, 270],[90, 270],[90, 270],[180, 270]
                ],
                [
                    [0, 90],[90, 270],[90, 270],[180, 270],[0, 180]
                ],
                [
                    [90, 180],[90, 270],[90, 270],[0, 270],[0, 180]
                ],
                [
                    [0, 180],[90, 180],[90, 270],[90, 270],[0, 270]
                ],
                [
                    [0, 180],[0, 90],[90, 270],[90, 270],[180, 270]
                ],
                [
                    [0, 90],[90, 270],[90, 270],[90, 270],[0, 270]
                ],
            ];
        case 3:
            return [
                [
                    [90, 180],[90, 270],[90, 270],[90, 270],[180, 270]
                ],
                [
                    [0, 90],[90, 270],[90, 270],[180, 270],[0, 180]
                ],
                [
                    [90, 180],[90, 270],[90, 270],[0, 270],[0, 180]
                ],
                [
                    [0, 90],[90, 270],[90, 270],[180, 270],[0, 180]
                ],
                [
                    [90, 180],[90, 270],[90, 270],[0, 270],[0, 180]
                ],
                [
                    [0, 90],[90, 270],[90, 270],[90, 270],[0, 270]
                ],
            ];
        case 4:
            return [
                [
                    [90, 180],[180, 270],[225, 225],[225, 225],[225, 225]
                ],
                [
                    [0, 180],[0, 180],[225, 225],[225, 225],[225, 225]
                ],
                [
                    [0, 180],[0, 90],[90, 270],[90, 270],[180, 270]
                ],
                [
                    [0, 90],[90, 270],[90, 270],[180, 270],[0, 180]
                ],
                [
                    [45, 45],[45, 45],[45, 45],[0, 180],[0, 180]
                ],
                [
                    [45, 45],[45, 45],[45, 45],[0, 90],[0, 270]
                ],
            ];
        case 5:
            return [
                [
                    [90, 180],[90, 270],[90, 270],[90, 270],[180, 270]
                ],
                [
                    [0, 180],[90, 180],[90, 270],[90, 270],[0, 270]
                ],
                [
                    [0, 180],[0, 90],[90, 270],[90, 270],[180, 270]
                ],
                [
                    [0, 90],[90, 270],[90, 270],[180, 270],[0, 180]
                ],
                [
                    [90, 180],[90, 270],[90, 270],[0, 270],[0, 180]
                ],
                [
                    [0, 90],[90, 270],[90, 270],[90, 270],[0, 270]
                ],
            ];
        case 6:
            return [
                [
                    [90, 180],[90, 270],[90, 270],[90, 270],[180, 270]
                ],
                [
                    [0, 180],[90, 180],[90, 270],[90, 270],[0, 270]
                ],
                [
                    [0, 180],[0, 90],[90, 270],[90, 270],[180, 270]
                ],
                [
                    [0, 180],[90, 180],[90, 270],[180, 270],[0, 180]
                ],
                [
                    [0, 180],[0, 90],[90, 270],[0, 270],[0, 180]
                ],
                [
                    [0, 90],[90, 270],[90, 270],[90, 270],[0, 270]
                ],
            ];
        case 7:
            return [
                [
                    [90, 180],[90, 270],[90, 270],[90, 270],[180, 270]
                ],
                [
                    [0, 90],[90, 270],[90, 270],[180, 270],[0, 180]
                ],
                [
                    [45, 45],[45, 45],[45, 45],[0, 180],[0, 180]
                ],
                [
                    [45, 45],[45, 45],[45, 45],[0, 180],[0, 180]
                ],
                [
                    [45, 45],[45, 45],[45, 45],[0, 180],[0, 180]
                ],
                [
                    [45, 45],[45, 45],[45, 45],[0, 90],[0, 270]
                ],
            ];
        case 8:
            return [
                [
                    [90, 180],[90, 270],[90, 270],[90, 270],[180, 270]
                ],
                [
                    [0, 180],[90, 180],[90, 270],[180, 270],[0, 180]
                ],
                [
                    [0, 180],[0, 90],[90, 270],[0, 270],[0, 180]
                ],
                [
                    [0, 180],[90, 180],[90, 270],[180, 270],[0, 180]
                ],
                [
                    [0, 180],[0, 90],[90, 270],[0, 270],[0, 180]
                ],
                [
                    [0, 90],[90, 270],[90, 270],[90, 270],[0, 270]
                ],
            ];
        case 9:
            return [
                [
                    [90, 180],[90, 270],[90, 270],[90, 270],[180, 270]
                ],
                [
                    [0, 180],[90, 180],[90, 270],[180, 270],[0, 180]
                ],
                [
                    [0, 180],[0, 90],[90, 270],[0, 270],[0, 180]
                ],
                [
                    [0, 90],[90, 270],[90, 270],[180, 270],[0, 180]
                ],
                [
                    [90, 180],[90, 270],[90, 270],[0, 270],[0, 180]
                ],
                [
                    [0, 90],[90, 270],[90, 270],[90, 270],[0, 270]
                ],
            ];
        default:
            return [

            ];
    }
};

const Digit: FC<DigitProps> = ({ number, size }) => {
    const [rotations, setRotations] = useState([
        [
            [0, 0],[0, 0],[0, 0],[0, 0],[0, 0]
        ],
        [
            [0, 0],[0, 0],[0, 0],[0, 0],[0, 0]
        ],
        [
            [0, 0],[0, 0],[0, 0],[0, 0],[0, 0]
        ],
        [
            [0, 0],[0, 0],[0, 0],[0, 0],[0, 0]
        ],
        [
            [0, 0],[0, 0],[0, 0],[0, 0],[0, 0]
        ],
        [
            [0, 0],[0, 0],[0, 0],[0, 0],[0, 0]
        ],
    ]);

    useEffect(() => {
        setRotations(getRotations(number));
    }, [number]);

    return (
        <Wrapper size={size}>
            {rotations.map((row, i) => (
                row.map((column, j) => (
                    <Clock size={size} key={`${i}_${j}`} rotations={column} />
                ))
            ))}
        </Wrapper>
    );
};

export default Digit;
