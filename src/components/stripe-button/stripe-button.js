import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButtonCheckout = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableStripeKey = "pk_test_GGjCsEmpJMtNVX4s2ubPJlga00PRm2T0h3";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableStripeKey}
        />
    )
}

export default StripeButtonCheckout;