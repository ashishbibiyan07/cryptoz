import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Home,
  Cryptocurrencies,
  CryptoDetails,
  Exchange,
  News,
} from "./components";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route
                path="/cryptocurrencies"
                exact
                element={<Cryptocurrencies />}
              />
              <Route path="/crypto/:coinId" exact element={<CryptoDetails />} />
              <Route path="/exchange" exact element={<Exchange />} />
              <Route path="/news" exact element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "#fff", alignItems: "center" }}
          >
            copyright 2024 || crypto-team <br />
            CryptoZ
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchange">Exchange</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>{" "}
      </div>
    </div>
  );
};

export default App;
