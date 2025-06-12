// refund.js
import React from 'react';
import './refund.css';

const Refund = () => {
  return (
    <div className="refund-container">
      <h1>Refund Policy</h1>

      <h2>Cancellation & Refund Policy</h2>

      <p><strong>PAYMAN FINTECH SOLUTIONS PVT LTD</strong> believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:</p>

      <ul>
        <li>
          Once a value is debited from your payment instrument/bank account and you have received the same value in your PayMan ID, there is no cancellation or refund permitted for such transaction.
        </li>
        <li>
          However, if in a transaction performed by you on the PayMan Platform, an amount has been charged to your card or bank account and a value is not delivered within 24 hours of the completion of the transaction, then you shall inform us by sending an email to our customer service email address mentioned on the ‘Contact Us’ page on the PayMan Platform.
        </li>
        <li>
          Please include in the email the following details – value, transaction date, and order number.
        </li>
        <li>
          PayMan will investigate the incident and, if it is found that money was indeed charged to your card or bank account without delivery of the value, then you will be refunded the amount within 21 working days from the date of receipt of your email.
        </li>
        <li>
          All refunds will be credited to the instrument that was charged.
        </li>
      </ul>
    </div>
  );
};

export default Refund;
