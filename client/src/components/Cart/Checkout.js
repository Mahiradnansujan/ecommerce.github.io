import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import ProcessPayment from "../Payment/ProcessPayment";
import { postData } from "../../utils/api";
import { addCToCartData } from "../../redux/cart/reducer";
import { notifyError, notifyLoading } from "../../redux/notify/action";
import NogodPayModal from "./NogodPayModal";
import BkashPayModal from "./BkashPayModal";

export default function Checkout({ total }) {
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const shipping = 60;
  const allTotal = total + shipping + (total / 100) * 20;

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [type, setType] = useState(null);

  const handlePaymentSuccess = async (paymentId) => {
    dispatch(notifyLoading(true));
    const res = await postData("customer/order", {
      user: user._id,
      address: user.address,
      cart,
      total: allTotal,
      paymentId: paymentId,
      dateOfPayment: new Date().toISOString(),
    });
    dispatch(notifyLoading(false));
    if (res.msg) return dispatch(notifyError(res.msg));
    if (res.user) {
      dispatch(addCToCartData([]));
      localStorage.removeItem("shah_cart");
      navigate(`/customer/${user.name}/${user._id}/orders`);
    }
  };

  return (
    <div className="card shadow-sm p-5">
      <p className="fw-bold">Sub Total: ৳ {total}</p>
      <p className="fw-bold">Vat: ৳ {(total / 100) * 20}</p>
      <p className="fw-bold">Shippping: ৳ 60</p>
      <p className="fw-bold">Total: ৳ {allTotal}</p>

      {user.address ? (
        <>
          <p>Shipping Address:</p>
          <p> {user.address}</p>
          {!type && (
            <>
              <ProcessPayment
                handlePayment={handlePaymentSuccess}
              ></ProcessPayment>
              <p>Or</p>
              <div className="d-flex">
                <img
                  style={{ cursor: "pointer" }}
                  src={require("../../img/bkash.png").default}
                  alt="bkash"
                  className="border p-3"
                  height="100"
                  height="100"
                  onClick={() => setType("bkash")}
                />
                <img
                  style={{ cursor: "pointer" }}
                  src={require("../../img/nogod.png").default}
                  alt="bkash"
                  className="ms-5 border p-3"
                  height="100"
                  height="100"
                  onClick={() => setType("nogod")}
                />
              </div>
            </>
          )}
        </>
      ) : (
        <Link to={`/customer/${user.name}/${user._id}`}>
          <button className="btn btn-success">Please Add Address</button>
        </Link>
      )}
      {user.address && type === 'bkash' && <BkashPayModal />}
      {user.address && type  === 'nogod' && <NogodPayModal />}
    </div>
  );
}
