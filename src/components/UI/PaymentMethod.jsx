import React from "react";
import masterCard from "../../assets/all-images/master-card.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  return (
    <>
      {/* <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Direct Bank Transfer
        </label>
      </div> */}

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Mobile Money 🇬🇭
        </label>
        <p>
          <i>You will be redirected to the mobile money platform to complete the payment.</i>
        </p>
      </div>

      <div className="payment mt-3 d-flex justify-content-between bankpayment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" />Visa / Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment text-end mt-5">
         
        <button>Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;
