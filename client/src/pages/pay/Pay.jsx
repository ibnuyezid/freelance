import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import "./pay.scss";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51NCKA8HbA6TYcLS3nXZSkhn36EQsM3Tw1JtFblYkVX1834ybnPS8RCcYBUTGFRfKZoI1KbcF9sj8e2ZXhOzg3Uk900UwTJ9YAj"
);
const Pay = () => {
  const { id } = useParams();
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );

        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  console.log("on hey");
  return (
    <div className="pay">
      {" "}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
