import { useState } from "react";
import Result from "../Result";
import { Clock } from "../Clock";
import { Button ,StyledForm, StyledDiv, Fieldset, StyledSelect, Legend, LabelText, Field, StyledParagraph, StyledParagraphLoading, StyledParagraphFailure } from "./styled";
import { useRatesData } from "./useRatesData";


const Form = () => {
    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();

    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <StyledForm onSubmit={onSubmit}>
            <StyledDiv>
                <p></p>
                <Clock />
                    <Legend>
                        Kalkulator walutowy
                    </Legend>
                        {ratesData.state === "loading"
                            ? (
                                <StyledParagraphLoading>
                                    Chwileczkę, <br /> ładuję kursy walut z Europejskiego Banku Centralnego.
                                </StyledParagraphLoading>
                             ) 
                             : (
                        ratesData.state === "error"
                            ? (
                                <StyledParagraphFailure>
                                    Strona nie załadowała się. Sprawdź połączenie internetowe.
                                </StyledParagraphFailure>
                            ) : (
                                <>
                                    <Fieldset>
                                        <p>
                                            <LabelText>
                                                Wpisz kwotę w PLN:
                                            </LabelText>
                                            <Field
                                                type="number"
                                                step="0.01"
                                                required min="0"
                                                placeholder="Wpisz kwotę"
                                                value={amount}
                                                onChange={({ target }) => setAmount(target.value)}
                                            />
                                            <label>
                                            <p></p>
                                                <LabelText>
                                                    Wybierz walutę:
                                                </LabelText>
                                                <StyledSelect
                                                    value={currency}
                                                    onChange={({ target }) => setCurrency(target.value)}
                                                >
                                                    {Object.keys(ratesData.rates).map(((currency) => (
                                                    <option
                                                        value={currency}
                                                        key={currency}
                                                >
                                                    {currency}
                                                </option>
                                                )))}
                                                </StyledSelect>
                                            </label>
                                        </p>
                                        <Button>Przelicz</Button>
                                        <StyledParagraph>Kurs walut pochodzi z Europejskiego Banku Centralnego z dnia: <br></br><strong>{ratesData.date}</strong></StyledParagraph>
                                        <Result
                                            result={result}
                                            />
                                    </Fieldset>
                               </>
                            )
                        )}
            </StyledDiv>
                                                
        </StyledForm>
    );
};
export default Form;