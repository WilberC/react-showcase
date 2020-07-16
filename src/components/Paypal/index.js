import React from "react";
import {PayPalButton} from "react-paypal-button-v2";

// https://www.npmjs.com/package/react-paypal-button-v2
function Paypal() {
    const {amount, currency} = ['300', 'USD']
    const paymentHandler = (details, data) => {
        console.log(details, data);
    }
    return (
        <div className="container">
            <PayPalButton
                amount={amount}
                currency={currency}
                onSuccess={(details, data) => paymentHandler(details, data)}
                options={{
                    clientId: "AQMKCCowZkW_xcUzItJqA5Ou4md3GyE-vFAlGZzUmfWQYLPz4Sm94VPFIG_cmis00SkfbS4cuPib9DNU"
                }}
            />
        </div>
    );
}

export default Paypal