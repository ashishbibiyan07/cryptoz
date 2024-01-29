import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar, Alert } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../imgs/logo.jpg";
const Navbar = () => {
  const [activeMenu, SetActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (screenSize < 786) {
      SetActiveMenu(false);
    } else {
      SetActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size={"large"} />
        <Typography.Title level={2} className="logo">
          <Link to={"/"}>CryptoZ</Link>
        </Typography.Title>

        <Button
          className="menu-control-container"
          onClick={() => SetActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>{" "}
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to={"/"}>Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to={"/exchange"}>Exchange</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to={"/news"}>News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;