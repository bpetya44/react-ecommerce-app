import axios from "axios";
import { useSelector } from "react-redux";

const PayButton = ({ cartItems }) => {
  console.log(cartItems);
  const handleCheckout = () => {
    axios
      .post("http://localhost:4000/api/payment/checkout", {
        cartItems,
        userId: cartItems.userId,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button className="button btn mt-0" onClick={() => handleCheckout()}>
        Check Out
      </button>
    </>
  );
};

export default PayButton;
