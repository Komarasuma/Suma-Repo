import React from 'react';
import { useDispatch } from 'react-redux'
import LoginForm from './form';
import { Layout, Card, Row } from 'antd';
import logo from '../../assets/icons/icon.png'
import { createGenericAction } from '../../reducers/genericReducer'
import Particles from 'react-particles-js';

const { Content } = Layout;

const Login = () => {

    const dispatch = useDispatch()

    const onSubmit = (values) => {
        dispatch(createGenericAction("SESSION")(values))
    }

    return (
        <Content style={{ minHeight: '100vh', margin: "0px", background: "linear-gradient(135deg, rgb(96, 108, 136) 0%, rgb(63, 76, 107) 100%)"}}>
        <Particles style={{position: "absolute"}} params={{
            "particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
        }}/>
            <Row justify="center">
                <Card style={{width: 300, marginTop :"100px"}}>
                    <Row justify="center"  style={{padding: "10px", paddingBottom: "30px"}}>
                        <img width="150px" src={logo} />
                    </Row>
                    <Row><LoginForm  onSubmit={onSubmit} /></Row>
                </Card>
            </Row>
            
        </Content>
    )
}

export default Login;