import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Clock from './Clock';

interface DigitProps {
    number: number;
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100px;
    height: 150px;
`;

const getRotations = (number: number) => {
    switch (number) {
        case 0:
            return [
                [90, 180],
                [180, 270],
                [0, 180],
                [0, 180],
                [0, 90],
                [0, 270],
            ];
        case 1:
            return [
                [225, 225],
                [180, 180],
                [225, 225],
                [0, 180],
                [225, 225],
                [0, 0],
            ];
        case 2:
            return [
                [90, 90],
                [180, 270],
                [90, 180],
                [0, 270],
                [0, 90],
                [270, 270],
            ];
        case 3:
            return [
                [90, 90],
                [180, 270],
                [90, 90],
                [0, 270],
                [90, 90],
                [0, 270],
            ];
        case 4:
            return [
                [180, 180],
                [180, 180],
                [0, 90],
                [0, 180],
                [225, 225],
                [0, 0],
            ];
        case 5:
            return [
                [90, 180],
                [270, 270],
                [0, 90],
                [180, 270],
                [90, 90],
                [0, 270],
            ];
        case 6:
            return [
                [90, 180],
                [270, 270],
                [0, 180],
                [180, 270],
                [0, 90],
                [0, 270],
            ];
        case 7:
            return [
                [90, 90],
                [180, 270],
                [225, 225],
                [0, 180],
                [225, 225],
                [0, 0],
            ];
        case 8:
            return [
                [90, 180],
                [180, 270],
                [0, 90],
                [180, 270],
                [0, 90],
                [0, 270],
            ];
        case 9:
            return [
                [90, 180],
                [180, 270],
                [0, 90],
                [0, 180],
                [90, 90],
                [0, 270],
            ];
        default:
            return [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
            ];
    }
};

const Digit: FC<DigitProps> = ({ number }) => {
    const [rotations, setRotations] = useState([
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
    ]);

    useEffect(() => {
        setRotations(getRotations(number));
    }, [number]);

    return (
        <Wrapper>
            {rotations.map((rotation, index) => (
                <Clock key={index} rotations={rotation} />
            ))}
        </Wrapper>
    );
};

export default Digit;
