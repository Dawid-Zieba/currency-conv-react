import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 20px;
    background-color: #993838;
    border-radius: 15px;
    margin: 20px;
`;

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    border: none;
    
`;

export const Legend = styled.legend`
    border-radius: 5px;
    background-color: #8000006b;
    color: white;
    padding: 5px;
    font-size: 20px;
    `;

export const LabelText = styled.span`
    max-width: 500px;
    width: 100%;
    display: inline-block;
    text-align: center;
    color: black;
    font-size: 20px;
    `;

export const Field = styled.input`
    flex-basis: 500px;
    width: 100%;
    padding: 5px;
    border: 2px solid #383535;
    border-radius: 20px;
    margin: 10px;
    text-align: center;
    margin: 0 auto;
    `;

export const StyledDiv = styled.div`
    flex-basis: 700px;
    margin: 20px;
    padding: 20px;
    background: #b99797;
    border-radius: 20px;
    box-shadow: 0 0 30px black;
`;

export const StyledHeader = styled.h1`
    text-align: center;
    color: rgb(0, 128, 128);
`;

export const StyledSelect = styled.select`
flex-basis: 500px;
    width: 100%;
    padding: 5px;
    border: 2px solid #383535;
    border-radius: 5px;
    margin: 10px;
    text-align: center;
    margin: 0 auto;
`;