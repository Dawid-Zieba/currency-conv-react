
import { currencies } from "../currencies";
import { useState } from "react";
import Result from "../Result";
import { Clock } from "../Clock";
import { StyledForm, StyledDiv, Fieldset,  StyledSelect, Legend, LabelText, Field } from "./styled";


const Form = () => {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);
    const rate = currencies.find(({ short }) => short === currency).rate;

    return (

        <StyledForm>
            <StyledDiv>
            <Clock />
                <Legend>Wymiana waluty</Legend>
                <Fieldset>
                <p>
                    <label>
                        <LabelText>Kwota w PLN</LabelText>
                        <Field
                            type="number"
                            step="0.01"
                            required min="0"
                            placeholder="Wpisz kwotę"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <LabelText>Waluta</LabelText>
                        <StyledSelect
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map((currency) => (
                                <option
                                    value={currency.short}
                                    key={currency.short}
                                >
                                    {currency.name}
                                </option>
                            ))}
                        </StyledSelect>
                    </label>
                </p>

                <Result
                    amount={amount}
                    currency={currency}
                    rate={rate}
                />
            </Fieldset>
            </StyledDiv>
        </StyledForm>
    );
};

export default Form;