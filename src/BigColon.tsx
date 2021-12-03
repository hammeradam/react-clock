import { FC } from 'react';
import styled from 'styled-components';
import Clock from './Clock';

const Wrapper = styled.div<{ size: number }>`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: ${({ size }) => size * 2}px;
    height: ${({ size }) => size * 6}px;
`;

const rotations = [
    [
        [90, 90],
        [270, 270],
    ],
    [
        [90, 180],
        [180, 270],
    ],
    [
        [0, 90],
        [0, 270],
    ],
    [
        [90, 180],
        [180, 270],
    ],
    [
        [0, 90],
        [0, 270],
    ],
    [
        [90, 90],
        [270, 270],
    ],
];

interface BigColonProps {
    size: number;
}

const BigColon: FC<BigColonProps> = ({ size }) => {
    return (
        <Wrapper size={size}>
            {rotations.map((row, i) =>
                row.map((column, j) => (
                    <Clock size={size} key={`${i}_${j}`} rotations={column} />
                ))
            )}
        </Wrapper>
    );
};

export default BigColon;
