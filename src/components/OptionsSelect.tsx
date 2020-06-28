import React, {useEffect, useState} from "react";
import {Button, Form, Select} from "antd";
import {Option} from "./OptionsList";
import {useParams} from "react-router";
import {addOptionToItem} from "../database/queries";

const OptionsSelect = () => {

    const [options, setOptions] = useState([]);
    const { id } = useParams();

    const onFinish = (values: any) => {
        addOptionToItem(parseInt(id),values.option_id)
            .then(response => {
                if (response.ok) window.location.reload()
            })
            .catch(e => console.log(e))
    };

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+"/options")
            .then(res => res.json())
            .then(res => {
                setOptions(res)
            })
            .catch(e => console.log(e))
    },[]);

    return (
        <Form name="control-hooks"
              onFinish={onFinish}
        >
            <Form.Item
                name="option_id"
                label="Available Options"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    showSearch
                    placeholder="Product Type"
                    allowClear
                    optionFilterProp="children"
                    filterOption={(input: string, option: any) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {options.map(((option: Option) => (
                        <Select.Option value={option.id}>{option.title}</Select.Option>
                    )))}
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Add
                </Button>
            </Form.Item>
        </Form>
    )
};

export default OptionsSelect