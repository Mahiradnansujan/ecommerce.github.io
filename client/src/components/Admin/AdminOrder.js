import React, { useEffect, useState } from "react";
import { getData } from "../../utils/api";
import Order from "../Seller/Store/Order";

export default function AdminOrder() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  const get = async () => {
    const res = await getData(`allOrders`);
    setOrders(res);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    get();
  }, []);
  return (
    <div className="table-responsive my-5">
      {loading ? <h2 className="text-center">...Loading...</h2>
      :
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Customer Name & Address</th>
            <th scope="col">Products</th>
            <th scope="col">Price</th>
            <th scope="col">Quanity</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((i) => (
            <Order key={i._id} i={i} />
          ))}
        </tbody>
      </table>}
    </div>
  );
}
