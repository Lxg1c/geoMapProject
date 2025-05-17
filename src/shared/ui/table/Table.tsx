import React from "react";
import styled from "styled-components";
import { TableProps } from "@/shared/ui/table/models/types";

const TableContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr); /* Первая колонка шире */
    gap: 12px;
    padding: 16px;
    border-radius: 16px;
`;

const Row = styled.div`
    display: contents;
`;

const Cell = styled.div`
    background: white;
    border-radius: 24px;
    padding: 12px;
    text-align: center;
    font-weight: 500;
`;

const HeaderCell = styled(Cell)`
    background: transparent;
    color: #5186ED;
    font-weight: 600;
`;

export const Table = ({ data }: TableProps) => {
    return (
        <TableContainer>
            <HeaderCell />
            <HeaderCell>Рейтинг</HeaderCell>
            <HeaderCell>Офисные центры</HeaderCell>
            <HeaderCell>Качество воздуха</HeaderCell>
            <HeaderCell>Безопасность</HeaderCell>

            {data.map((area) => (
                <Row key={area.name}>
                    <Cell style={{ color: "#5186ED", fontWeight: 600 }}>{area.name}</Cell>
                    <Cell>{area.rating}</Cell>
                    <Cell>{area.offices}</Cell>
                    <Cell>{area.airQuality}</Cell>
                    <Cell>{area.safety}</Cell>
                </Row>
            ))}
        </TableContainer>
    );
};
