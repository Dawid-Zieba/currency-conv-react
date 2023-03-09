import {StyledParagraph} from "./styled"

const Result = ({amount, currency, rate}) => {
    const result = amount / rate;

    return (
        <StyledParagraph>{result.toFixed(2)} {currency}</StyledParagraph>
    )
};

export default Result;
