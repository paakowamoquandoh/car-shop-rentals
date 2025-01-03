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

      <div className="payment mt-3 bankPayment">
        <span htmlFor="" className="d-flex align-items-center gap-2">
          Mobile Money 🇬🇭
          <button>Reserve Now</button>
        </span>
       
        <span>
          <i>(You will be redirected to the mobile money platform to complete the payment.)</i>
        </span>
      </div>

      <div className="payment mt-3 d-flex justify-content-between ">
        <span htmlFor="" className="d-flex align-items-center gap-2 bankpayment">
          Visa / Master Card
          <img src={masterCard} alt="" />
          <button>Reserve Now</button> 
        </span>        
      </div>
      <div className="payment text-start mt-5">
      </div>
    </>
  );
};

export default PaymentMethod;
