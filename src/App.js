import ReactDOM from 'react-dom';
import React from 'react';
import Days from './days';
import styled, { css, createGlobalStyle } from 'styled-components';
import DayViewer from './DayViewer';

const StyledList = styled.ul`
    padding-inline-start: 0;
    display: flex;
    list-style: none;
    justify-content: center;
`;

const StyledListItem = styled.li`
    color: #00cc00;

    padding: 2px 5px;
    border: 1px solid #00cc00;
    cursor: pointer;

    ${({ active }) => active && css`
        background: #00cc00;
        color: #0f0f23;
    `}
`;

const GlobalStyle = createGlobalStyle`
    body {
        background: #0f0f23;
        color: #cccccc;
        font-family: "Source Code Pro", monospace;
        font-size: 14pt;
        min-width: 60em;
    }
`;
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: 3
        }
    }

    setActive = (active) => {
        this.setState({ active })
    }

    render() {
        const { active } = this.state;

        return <React.Fragment>
            <GlobalStyle />
            <StyledList>
                {
                    Days.map(
                        (elem, idx) => (
                            <StyledListItem
                                key={idx}
                                onClick={() => this.setActive(idx)}
                                active={idx === active}
                            >
                                {idx + 1}
                            </StyledListItem>)
                    )
                }
            </StyledList>

            {
                active !== -1 && <DayViewer
                    dayNumber={active + 1}
                    DayExercises={new Days[active]()}
                />
            }
        </React.Fragment>
    }
}

ReactDOM.render(<App />, document.getElementById("root"));