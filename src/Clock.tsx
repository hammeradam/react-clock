import { FC } from 'react';
import styled from 'styled-components';

const Face = styled.div<{ size?: number }>`
    width: ${({ size }) => size ?? 50}px;
    aspect-ratio: 1;
    background-color: black;
    border-radius: 50%;
    position: relative;
`;

const Hand = styled.div<{ width?: number; length?: number; rotation: number }>`
    width: ${({ width }) => width ?? 2}px;
    height: ${({ length }) => length ? length / 2 : 25}px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -100%) rotate(${({ rotation }) => rotation}deg);
    transform-origin: bottom;
    border-radius: 5px;
    transition: transform .2s;
`;

interface ClockProps {
    rotations: number[];
    size?: number;
}

const Clock: FC<ClockProps> = ({ rotations, size }) => {
    return (
        <Face size={size}>
            <Hand rotation={rotations[0]} length={size} />
            <Hand rotation={rotations[1]} length={size} />
        </Face>
    );
};

export default Clock;
