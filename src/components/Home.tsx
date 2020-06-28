import React from "react";
import {Card, Col, Row, Typography} from 'antd';
import ItemsList from "./ItemsList";

const Home = () => {

    return (
        <div className="align-center">
            <Row gutter={16}>
                <Col span={10} offset={6}>
                    <Card className="custom-card" style={{marginTop: 20}}>
                        <Typography.Title level={2}>Appetizers</Typography.Title>
                        <ItemsList typeParam='entry'/>
                    </Card>
                </Col>
            </Row>
            <br/><br/><br/>
            <Row gutter={16}>
                <Col span={10} offset={6}>
                    <Card className="custom-card">
                        <Typography.Title level={2}>Mains</Typography.Title>
                        <ItemsList typeParam='main'/>
                    </Card>
                </Col>
            </Row>
            <br/><br/><br/>
            <Row gutter={16}>
                <Col span={10} offset={6}>
                    <Card className="custom-card">
                        <Typography.Title level={2}>Desserts</Typography.Title>
                        <ItemsList typeParam='dessert'/>
                    </Card>
                </Col>
            </Row>
            <br/><br/><br/>
            <Row gutter={16}>
                <Col span={10} offset={6}>
                    <Card className="custom-card" style={{marginBottom: 20}}>
                        <Typography.Title level={2}>Drinks</Typography.Title>
                        <ItemsList typeParam='drink'/>
                    </Card>
                </Col>
            </Row>
        </div>
    )
};

export default Home