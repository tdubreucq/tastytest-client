import React from "react";
import {Button, Col, Form, Input, InputNumber, Row, Select, Switch, Modal, Typography, Card} from 'antd';
import {useHistory} from "react-router";

const CreateForm = () => {

    let history = useHistory();

    const onFinish = (values: any) => {
        fetch(process.env.REACT_APP_API_URL+'/menuItems', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                showConfirm(data.body.item.item_id)
            })
            .catch(e => console.log(e))
    };

    const { confirm } = Modal;

    function showConfirm(id: number) {
        confirm({
            title: 'Do you want to add options right now?',
            onOk() {
                history.push('/options/item/'+id)
            },
            onCancel() {
                history.push('/')
            },
        });
    }

    return (
        <Row gutter={16}>
            <Col span={10} offset={6}>
                <Card className="custom-card" style={{marginTop: 20}}>
                    <Typography.Title className="align-center" level={2}>Adding a product</Typography.Title>
                    <Form name="control-hooks"
                          onFinish={onFinish}
                          initialValues={{
                              ['vegetarian']: false
                          }}
                    >
                        <Form.Item
                            name="title"
                            label="Title"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="description"
                            label="Description"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="vegetarian"
                            label="Vegetarian"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Switch />
                        </Form.Item>
                        <Form.Item
                            name="price"
                            label="Price"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <InputNumber />
                        </Form.Item>
                        <Form.Item
                            name="type"
                            label="Type"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select
                                placeholder="Product Type"
                                allowClear
                            >
                                <Select.Option value="entry">Entry</Select.Option>
                                <Select.Option  value="main">Main</Select.Option >
                                <Select.Option  value="dessert">Dessert</Select.Option >
                                <Select.Option  value="drink">Drink</Select.Option >
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
};

export default CreateForm