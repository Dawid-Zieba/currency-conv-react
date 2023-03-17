import {StyledParagraph} from "./styled"

export const Result = ({ result }) => (

    <StyledParagraph> 
        {!!result && (
        <>
            {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
            {" "}
            <strong>
                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </strong>
        </>
    )}
    </StyledParagraph>
);

export default Result;