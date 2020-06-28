import {default as React, useEffect, useState} from "react";
import {Button, List, Modal} from "antd";

type ChoicesModalProps = {
    option_id: number
}

type Choice = {
    title: string
    option_id: number
    choice_title: string
    choice_id: number
}

const ChoicesModal = (props: ChoicesModalProps) => {

    const [visible, setVisible] = useState(false);
    const [choices, setChoices] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/options/choices/'+props.option_id)
            .then(res => res.json())
            .then(res => {
                setChoices(res)
            })
            .catch(e => console.log(e))
    }, []);

    const showModal = () => {
        setVisible(true)
    };

    const handleOk = () => {
        setVisible(false)
    };

    const handleCancel = () => {
        setVisible(false)
    };

    return (
        <div>
            <Button type="primary" onClick={() => showModal()}>
                Choices
            </Button>
            <Modal
                title="List of choices"
                visible={visible}
                onCancel={handleCancel}
                footer={[]}
            >
                <List
                    size="small"
                    bordered
                    dataSource={choices}
                    renderItem={(item: Choice) => <List.Item>{item.choice_title}</List.Item>}
                />
            </Modal>
        </div>
    );
};

export default ChoicesModal