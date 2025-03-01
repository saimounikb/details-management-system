import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: linear-gradient(135deg, #333, #000); /* Gradient effect */
  width: 100%;
  padding: 10px 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

const Tabs = styled(NavLink)`
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;
  color: white;
  background: #d32f2f;
  width: 150px;
  height: 40px;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 2px 2px 10px rgba(255, 0, 0, 0.3);

  &:hover {
    background: #b71c1c;
    transform: scale(1.05);
    box-shadow: 2px 2px 15px rgba(255, 0, 0, 0.5);
  }
`;

const Navbar = () => {
  return (
    <Header position="static">
      <Toolbar style={{ display: "flex", justifyContent: "center" }}>
        <Tabs to="/">Code for Good</Tabs>
        <Tabs to="/all">All Users</Tabs>
        <Tabs to="/add">Add User</Tabs>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
