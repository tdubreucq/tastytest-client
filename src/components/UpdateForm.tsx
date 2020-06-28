import React, {useEffect} from "react";
import {Button, Col, Form, Input, InputNumber, Row, Select, Switch, Typography, Card} from 'antd';
import {useHistory, useParams} from "react-router";
import {updateItem} from "../database/queries";

const UpdateForm = () => {

    let history = useHistory();
    const {item_id} = useParams();
    const [updateForm] = Form.useForm();

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/menuItems/'+item_id)
            .then(res => res.json())
            .then(res => {
                updateForm.setFieldsValue({
                    title: res.title,
                    description: res.description,
                    vegetarian: res.vegetarian,
                    price: res.price,
                    type: res.type
                });
            })
            .catch(e => console.log(e))
    }, [])

    const onFinish = (values: any) => {
        values.item_id = item_id;
        updateItem(values)
            .then(response => {
                if (response) history.push('/')
            })
    };

    return (
        <Row gutter={16}>
            <Col span={10} offset={6}>
                <Card className="custom-card" style={{marginTop: 20}}>
                    <Typography.Title className="align-center" level={2}>Editing a product</Typography.Title>
                    <Form name="control-hooks"
                          form={updateForm}
                          onFinish={onFinish}
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

export default UpdateForm