import React, { useState } from "react";
import { Link, useNavigate, Outlet, NavLink } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  return (
    <>
      <Link to="/" style={{ display: "block" }}>
        Go to Home
      </Link>
      <NavLink
        activeStyle={{ color: "white" }}
        to="user/random"
        style={{ display: "block" }}
      >
        Go to Random user
      </NavLink>
      <form
        onSubmit={e => {
          e.preventDefault();
          navigate(`/user/${user}`);
        }}
      >
        <input
          placeholder="input a username"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <button disabled={!user}>Go to that user</button>
      </form>
      <Outlet />
    </>
  );
};

export default Home;
