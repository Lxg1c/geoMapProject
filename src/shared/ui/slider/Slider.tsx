import React from 'react';
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

    /* Общий трек */
    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 10px;
        -webkit-appearance: none;
        background: linear-gradient(
        to right,
        #5186ED 0%,
        #ffffff ${props => ((props.value - props.min) / (props.max - props.min)) * 100}%,
        white ${props => ((props.value - props.min) / (props.max - props.min)) * 100}%,
        white 100%
        );
        border-radius: 15px;
        box-shadow:
                inset 0 1px 3px rgba(0, 0, 0, 0.3),
                0 1px 2px rgba(0, 0, 0, 0.1);
    }

    /* Ползунок */
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
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
        z-index: 2;
        top: 5px;
    }

    &:hover::-webkit-slider-thumb {
        transform: translateY(-50%) scale(1.1);
        box-shadow:
                0 3px 8px rgba(0, 0, 0, 0.3),
                0 0 0 3px rgba(81, 134, 237, 0.4);
    }

    /* Для Firefox */
    &::-moz-range-track {
        width: 100%;
        height: 10px;
        background: linear-gradient(
        to right,
        #5186ED 0%,
        #5186ED ${props => ((props.value - props.min) / (props.max - props.min)) * 100}%,
        white ${props => ((props.value - props.min) / (props.max - props.min)) * 100}%,
        white 100%
        );
        border-radius: 15px;
    }

    &::-moz-range-thumb {
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 50%;
        border: 2px solid #5186ED;
        cursor: pointer;
        box-shadow:
                0 2px 5px rgba(0, 0, 0, 0.2),
                0 0 0 2px rgba(81, 134, 237, 0.3);
        transition: all 0.2s ease;
    }

    &:hover::-moz-range-thumb {
        transform: scale(1.1);
        box-shadow:
                0 3px 8px rgba(0, 0, 0, 0.3),
                0 0 0 3px rgba(81, 134, 237, 0.4);
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
                                                  step = 1
                                              }) => {
    return (
        <SliderContainer>
            <StyledSlider
                min={min}
                max={max}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                step={step}
            />
            <ValueLabels>
                <Label>{min}</Label>
                <Label>{max}</Label>
            </ValueLabels>
        </SliderContainer>
    );
};