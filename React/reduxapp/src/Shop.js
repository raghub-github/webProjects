import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <h2 className="mt-4">Deposit/Withdraw Money</h2>
      {/* <button
        className="btn-primary btn mx-2 m-2"
        onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}
      >
        <strong>
          <h2>-</h2>
        </strong>
      </button>
      Update Balance
      <button
        className="btn-primary btn mx-2 m-2"
        onClick={()=>{dispatch(actionCreators.depositMoney(100))}}
      >
        <strong>
          <h2>+</h2>
        </strong>
      </button> */}
      <button
        className="btn-primary btn mx-2 m-2"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        <strong>
          <h2>-</h2>
        </strong>
      </button>
      Update Balance
      <button
        className="btn-primary btn mx-2 m-2"
        onClick={() => {
          depositMoney(100);
        }}
      >
        <strong>
          <h2>+</h2>
        </strong>
      </button>
    </div>
  );
};

export default Shop;
