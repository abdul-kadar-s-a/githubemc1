import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "20px", color: "white" }}>Home</Link>
      <Link to="/login" style={{ marginRight: "20px", color: "white" }}>Login</Link>
      <Link to="/register" style={{ color: "white" }}>Register</Link>
      <Link to="/products" style={{marginRight:"20px", color:"white"}}>Products</Link>

    </nav>
  );
}

export default Navbar;
