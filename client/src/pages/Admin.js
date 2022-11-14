import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SubHeader from "../components/Global/SubHeader/SubHeader";
import { Outlet } from "react-router-dom";

export default function Admin() {
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      <SubHeader name="Admin Panel" />
      <div className="d-flex justify-content-center my-5">
        <Link to="/admin/user">
          <button className="btn btn-success text-white mt-2">User</button>
        </Link>
        <Link to="/admin/seller">
          <button className="btn btn-success text-white mt-2 ms-3">
            Seller
          </button>
        </Link>
        <Link to="/admin/orders">
          <button className="btn btn-success text-white mt-2 ms-3">
            Orders
          </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
