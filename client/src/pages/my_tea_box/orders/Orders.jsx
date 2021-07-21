/** @format */

import React from "react";

import { useSelector } from "react-redux";
import UserNav from "../../../components/User_Navbar/UserNav.component";
const Orders = () => {
  const userData = useSelector((data) => data.user);
  console.log(userData.user);
  return (
    <div>
      <UserNav />
      {
        <div className="orders-container">
          {userData.user &&
            userData.user.cart.map((items) => <p>{items.itemName}</p>)}
        </div>
      }
    </div>
  );
};

export default Orders;
