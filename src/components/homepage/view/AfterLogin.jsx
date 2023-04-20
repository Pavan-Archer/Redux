import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "../action";
import VehicleData from "./VehicleData";

function AfterLogin() {
  const dispatch = useDispatch();

  const getState = useSelector((state) => {
    // console.log(state);
    return {
      displayData: state.rootReducer.loginReducer,
    };
  });

  const { displayData } = getState;

  React.useEffect(() => {
    dispatch(fetchDataRequest(1, 1));
  }, []);

  return (
    <div>
      <VehicleData />
    </div>
  );
}

export default AfterLogin;
