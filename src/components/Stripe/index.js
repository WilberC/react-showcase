import React, {useState} from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51H5PpPLlBtFGzLSlD0ozaDLoPQILEGz77g48i2b3ssSedbIO4TU3olbN2wfJl39LiBgDvMRNY6pGiRuL1kAsF98g00qqs8gYyk');

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: '#32325d',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    }
};

const CheckoutForm = () => {
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();

    const handleChange = (event) => {
        if (event.error) {
            setError(event.error.message);
        } else {
            setError(null);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card)
        if (result.error) {
            setError(result.error.message);
        } else {
            setError(null);
        }
    };
    return (
        <form onSubmit={handleSubmit} style={{width: '700px'}}>
            <div class="form-row">
                <label for="card-element">
                    Credit or debit card
                </label>
                <CardElement
                    id="card-element"
                    options={CARD_ELEMENT_OPTIONS}
                    onChange={handleChange}
                />
                <div className="card-errors" role="alert">{error}</div>
            </div>
            <button type="submit">Submit Payment</button>
        </form>
    );
}

function Stripe() {
    return (
        <div className="container" style={{position: 'relative'}}>
            <Elements stripe={stripePromise}>
                <CheckoutForm/>
            </Elements>
        </div>
    );
}

export default Stripe