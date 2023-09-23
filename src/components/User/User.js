import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  let { id } = useParams();
  return <div>User: {id}</div>;
};

export default User;
