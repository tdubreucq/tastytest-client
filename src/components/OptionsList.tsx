import React, {useEffect, useState} from "react";
import {Button, Card, Col, Divider, List, Row, Typography} from "antd";
import {
    withRouter,
    useParams
} from "react-router-dom";
import OptionsSelect from "./OptionsSelect";
import OptionInsertModal from "./OptionInsertModal";
import {deleteOptionFromItem} from "../database/queries";
import CreateOptionForm from "./CreateOptionForm";
import ChoicesModal from "./ChoicesModal";

export type Option = {
    title: string
    id: number
}

type Choice = {
    title: string
    option_id: number
    choice_title: string
    choice_id: number
}

const OptionsList = () => {

    const [options, setOptions] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+"/options/byItem/"+id)
            .then(res => res.json())
            .then(res => {
                setOptions(res)
            })
            .catch(e => console.log(e))
    }, []);

    const deleteOption = (option_id: number) => {
        deleteOptionFromItem(id,option_id)
            .then(response => {
                if (response) window.location.reload()
            })

    };

    return (
        <Row gutter={16} className="align-center">
            <Col span={10} offset={6}>
                <Card className="custom-card" style={{marginTop: 20}}>
                    <List
                        itemLayout="horizontal"
                        dataSource={options}
                        renderItem={(option: Option) => (
                            <List.Item actions={[<ChoicesModal option_id={option.id}/>,<Button onClick={() => deleteOption(option.id)} danger>Delete</Button>]}>
                                <List.Item.Meta
                                    title={<a href="https://ant.design">{option.title}</a>}
                                />
                            </List.Item>
                        )}
                    />
                    <Divider/>
                    <OptionsSelect/>
                    <br/><Typography.Title level={4}>or</Typography.Title>
                    <OptionInsertModal/>
                </Card>
            </Col>
        </Row>
    )

};

export default withRouter(OptionsList)