import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCToCartData } from "../../redux/cart/reducer";
import { notifyError, notifyLoading } from "../../redux/notify/action";
import { postData } from "../../utils/api";

const BkashPayModal = ({allTotal}) => {
  const {user} = useSelector((state) => state.auth);
  const {cart} = useSelector((state) => state.cart);
  let navigate = useNavigate();
  const initialState = {
    no: "",
    otp: "",
  };
  const [nogod, setNogod] = useState(initialState);
  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setNogod({ ...nogod, [name]: value });
  };

  const [no, setNo] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setNo(true);
  };

  const dispatch = useDispatch();
  const handleOrder = async (e) =>{
    e.preventDefault();
    dispatch(notifyLoading(true));
    const res = await postData("customer/order", {
      user: user._id,
      address: user.address,
      cart,
      total: allTotal,
      paymentId: nogod.no,
      dateOfPayment: new Date().toISOString(),
    });
    dispatch(notifyLoading(false));
    if (res.msg) return dispatch(notifyError(res.msg));
    if (res.user) {
      dispatch(addCToCartData([]));
      localStorage.removeItem("shah_cart");
      navigate(`/customer/${user.name}/${user._id}/orders`);
    }
  }
  return (
    <div>
      {!no ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nogod No</label>
            <input
              type="text"
              name="no"
              className="form-control"
              style={{ backgroundColor: "#EF8F1C", color: "#fff" }}
              onChange={handleChangeInput}
            />
          </div>
          <button className="btn btn-success text-white mt-2">Submit</button>
        </form>
      ) : (
        <form onSubmit={handleOrder}>
          <div className="mb-3">
            <label className="form-label">Nogod OTP</label>
            <input
              type="text"
              name="otp"
              className="form-control"
              placeholder="256896"
              onChange={handleChangeInput}
              value={nogod.otp}
            />
          </div>
          <button className="btn btn-success text-white mt-2">Order Now</button>
        </form>
      )}
    </div>
  );
};

export default BkashPayModal;
