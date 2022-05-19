import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.

// DEV Public Key: pk_test_CS883XDnmHE0WQhwZhrKvuVO
// UAT Public Key: pk_test_B4TsDwhHXFDTA0BtDgOo6RSH
const stripePromise = loadStripe('pk_test_B4TsDwhHXFDTA0BtDgOo6RSH');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));