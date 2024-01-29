import React from "react";
import { data } from "../services/exchangeApi";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
const { Text } = Typography;
const { Panel } = Collapse;
const Exchange = () => {
  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Score</Col>
      </Row>
      <Row>
        {data.map((exchange) => {
          return (
            <Col span={24}>
              <Collapse>
                <Panel
                  key={exchange.sn}
                  showArrow={false}
                  header={
                    <Row key={exchange.sn}>
                      <Col span={6}>
                        <Text>
                          <strong>{exchange.sn}</strong>
                        </Text>
                        <Avatar
                          className="exchange-image"
                          src={exchange.logo}
                        ></Avatar>
                        <Text>
                          <strong>{exchange.name}</strong>
                        </Text>
                      </Col>
                      <Col span={6}>{exchange.Trade24hVolume}</Col>
                      <Col span={6}>{exchange.Market}</Col>
                      <Col span={6}>{exchange.score}</Col>
                    </Row>
                  }
                >
                  {exchange.descriptionIntro}
                </Panel>
              </Collapse>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Exchange;
