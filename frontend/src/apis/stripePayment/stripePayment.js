import axios from "axios";
//=======Stripe Payment=====

export const handleFreeSubscriptionAPI = async () => {
  const response = await axios.post(
    "https://contentcraft-backend.onrender.com",
    {},
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
//=======Stripe  Payment intent=====

export const createStripePaymentIntentAPI = async (payment) => {
  console.log(payment);
  const response = await axios.post(
    "https://contentcraft-backend.onrender.com",
    {
      amount: Number(payment?.amount),
      subscriptionPlan: payment?.plan,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
//=======Verify  Payment =====

export const verifyPaymentAPI = async (paymentId) => {
  const response = await axios.post(
    `https://contentcraft-backend.onrender.com/${paymentId}`,
    {},
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
