import styled from "styled-components";


export const DashBoardCard = styled.button`
    display:flex;
    flex-direction: column;
    height: 170px;
    width: 255px;
    border:none;
    margin-top: 16px;
    background-color: ${(props) => props.bgColor};
    border-radius: 4px;
    padding: 9px;
    justify-content: space-evenly;
`;