import * as React from "react";
import {Button, Modal} from "antd";
import {useState} from "react";
import CreateOptionForm from "./CreateOptionForm";

const OptionInsertModal = () => {

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true)
    };

    const handleCancel = () => {
        setVisible(false)
    };

    return (
        <div>
            <Button type="primary" onClick={() => showModal()}>
                Create a new option
            </Button>
            <Modal
                title="New option"
                visible={visible}
                onCancel={handleCancel}
                footer={[]}
            >
                <CreateOptionForm/>
            </Modal>
        </div>
    );
};

export default OptionInsertModal