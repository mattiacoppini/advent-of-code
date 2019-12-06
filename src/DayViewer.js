import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
    margin: 0 auto;
    border: 1px solid #00cc00;
    padding: 15px;
    color: #00cc00;

    tbody {
        td {
            justify-content: center;
        }
    }
`;

export const DayViewer = ({ dayNumber, DayExercises }) => {

    return (
        <StyledTable>
            <thead>
                <tr>
                    <th colSpan={2}>{`Day ${dayNumber}`}</th>
                </tr>
                <tr>
                    <th>Puzzle nr.</th>
                    <th>Answer</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> 1 </td>
                    <td>{DayExercises.firstPuzzle()}</td>
                </tr>
                <tr>
                    <td> 2 </td>
                    <td>{DayExercises.secondPuzzle()}</td>
                </tr>
            </tbody>
        </StyledTable>
    )
};

export default DayViewer;