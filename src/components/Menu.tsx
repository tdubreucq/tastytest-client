import {Menu} from "antd";
import React, {useState} from 'react';
import {Link} from "react-router-dom";

const HorizontalMenu = () => {
    const [current] = useState('home');

    return (
        <Menu mode="horizontal">
            <Menu.Item key="home">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="mail">
                <Link to="/create">Create a product</Link>
            </Menu.Item>
        </Menu>
    )
};

export default HorizontalMenu