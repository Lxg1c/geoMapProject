import React, { useState } from 'react';
import styled from 'styled-components';

interface SliderProps {
    min: number;
    max: number;
    value: number;
    onChange: (value: number) => void;
    step?: number;
}

const SliderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    position: relative;
`;

const StyledSlider = styled.input.attrs({ type: 'range' })<{ value: number; min: number; max: number }>`
    width: 100%;
    height: 10px;
    -webkit-appearance: none;
    background: transparent;
    border-radius: 15px;
    outline: none;
    margin: 0;
    position: relative;
    z-index: 1;

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 10px;
        -webkit-appearance: none;
        background: linear-gradient(
        to right,
        #5186ED 0%,
        #5186ED ${props => ((props.value - props.min) / (props.max - props.min)) * 100}%,
        white ${props => ((props.value - props.min) / (props.max - props.min)) * 100}%,
        white 100%
        );
        border-radius: 15px;
        box-shadow:
                inset 0 1px 3px rgba(0, 0, 0, 0.3),
                0 1px 2px rgba(0, 0, 0, 0.1);
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 24px;
        height: 24px;
        background: white;
        border-radius: 50%;
        border: 2px solid #5186ED;
        cursor: pointer;
        box-shadow:
                0 2px 5px rgba(0, 0, 0, 0.2),
                0 0 0 2px rgba(81, 134, 237, 0.3);
        transform: translateY(-50%);
        transition: all 0.2s ease;
        position: relative;
        z-index: 3;
        top: 5px;
    }
`;

const Tooltip = styled.div<{ $position: number; $visible: boolean }>`
    position: absolute;
    top: -10px;
    left: ${props => `${props.$position}%`};
    transform: translateX(-50%);
    background: #5186ED;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    opacity: ${props => (props.$visible ? 1 : 0)};
    transition: opacity 0.2s;
    z-index: 2;
    pointer-events: none;
    white-space: nowrap;

    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        border-width: 5px 5px 0;
        border-style: solid;
        border-color: #5186ED transparent transparent;
    }
`;

const ValueLabels = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
`;

const Label = styled.span`
    font-size: 12px;
    color: #666;
`;

export const Slider: React.FC<SliderProps> = ({
                                                  min,
                                                  max,
                                                  value,
                                                  onChange,
                                                  step = 1,
                                              }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getThumbPosition = (val: number): number => {
        const percent = ((val - min) / (max - min)) * 100;
        if (percent < 5) return 5;
        if (percent > 95) return 95;
        return percent;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.target.value));
    };

    return (
        <SliderContainer>
            <Tooltip
                $position={getThumbPosition(value)}
                $visible={isHovered}
            >
                {value}
            </Tooltip>

            <StyledSlider
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
                step={step}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />

            <ValueLabels>
                <Label>{min}</Label>
                <Label>{max}</Label>
            </ValueLabels>
        </SliderContainer>
    );
};
