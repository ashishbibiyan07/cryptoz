import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from "./Loader";
const News = ({ simplified }) => {
  // const count = simplified ? 10 : 100;
  const { data: cryptoNews } = useGetCryptoNewsQuery();
  const { Text, Title } = Typography;
  const { Option } = Select;
  console.log(cryptoNews?.news);
  if (!cryptoNews?.news) return <Loader />;

  const demoImage =
    "https://www.freepik.com/free-vector/bitcoins-falling-illustration_1430399.htm#query=crypto%20png&position=0&from_view=keyword&track=ais&uuid=510d69e6-1a04-4cd8-8344-f5dfa300a30a";

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.news.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.Url} target="_blank">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.Title}
                </Title>
                <img
                  src={news.Image}
                  alt="image"
                  width={"100px"}
                  height={"100px"}
                />
              </div>
              <p>
                {news.Description > 100
                  ? `${news.Description.substring(0, 100)}...`
                  : news.Description}
              </p>
              <p className="published-Date">
                Published Date -{" "}
                {new Date(news.PublishedOn).toLocaleDateString()}
              </p>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
