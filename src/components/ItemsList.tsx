import {Button, List, Modal} from "antd";
import {Link} from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {MenuItem} from "../App";

type ItemsListProps = {
    typeParam: string
}

const ItemsList = ( props: ItemsListProps ) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/menuItems/'+props.typeParam)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setItems(res)
            })
            .catch(e => console.log(e))
    }, []);

    const { confirm } = Modal;

    function showConfirm(item: MenuItem) {
        confirm({
            title: 'Are you sure you want to delete '+item.title+' ? ',
            onOk() {
                fetch(process.env.REACT_APP_API_URL+'/menuItems/'+item.item_id, {
                    method: 'DELETE',
                })
                    .then(response => { window.location.reload() })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    return (
        <List
            itemLayout="horizontal"
            dataSource={items}
            renderItem={(item: MenuItem) => (
                <List.Item
                    actions={[<Link to={'/'+item.item_id+'/edit'}>Edit</Link>, <Link to={"/options/item/"+item.item_id}>Options</Link>, <Button onClick={() => showConfirm(item)} danger>Delete</Button>]}
                >
                    <List.Item.Meta
                        title={<a href="https://ant.design">{item.title}</a>}
                        description={item.description}
                    />
                    <div style={{marginTop: 4}}>{item.vegetarian ? <FaLeaf style={{fill: "green"}}/> : <FaLeaf/>}</div>
                    <div style={{marginLeft: 20}}>{item.price} $</div>
                </List.Item>
            )}
        />
    )
};

export default ItemsList