import React from 'react';

const PaymentError = ({ errorMessage }) => {
    return (
        <div>
            <h1>Payment Failed!</h1>
            {/* Add content for a failed payment */}
            <p>Your payment could not be processed.</p>
            <p>Error Message: {errorMessage}</p>
        </div>
    );
};

export default PaymentError;
