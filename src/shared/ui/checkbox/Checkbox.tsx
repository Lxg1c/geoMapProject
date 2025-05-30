import React from "react";
import styled from "styled-components";

interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
}

const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 8px;  /* Уменьшено с 16px */
    user-select: none;
    font-size: 0.875rem;  /* Уменьшенный размер текста */
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
`;

const StyledCheckbox = styled.div<{ checked: boolean; disabled?: boolean }>`
    width: 20px;  /* Уменьшено с 40px */
    height: 20px;  /* Уменьшено с 40px */
    background: ${({ checked }) => (checked ? "#5186ED" : "#fff")};
    border: 2px solid ${({ checked }) => (checked ? "#5186ED" : "#ccc")};  /* Уменьшено с 4px */
    border-radius: 6px;  /* Уменьшено с 12px */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    position: relative;
    pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

    &:hover {
        border-color: #5186ED;
    }

    /* Стиль галочки */
    &::after {
        content: "";
        position: absolute;
        display: ${({ checked }) => (checked ? "block" : "none")};
        width: 6px;  /* Уменьшено с 12px */
        height: 12px;  /* Уменьшено с 24px */
        border: solid white;
        border-width: 0 2px 2px 0;  /* Уменьшено с 4px */
        transform: rotate(45deg);
        margin-top: -2px;  /* Уменьшено с -4px */
    }
`;

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label, disabled }) => {
    return (
        <CheckboxContainer>
            <HiddenCheckbox
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                disabled={disabled}
            />
            <StyledCheckbox checked={checked} disabled={disabled} />
            {label && <span>{label}</span>}
        </CheckboxContainer>
    );
};