import React from 'react'
import { Col, Button, Row, Input, Select } from 'antd'
import IncidentCard from './IncidentCard';

const { Search } = Input;
const { Option } = Select;

const tempArray =  Array.from({ length: 10 }).fill(0)

const Home = () => {
  return <div style={{backgroundColor: "#fff", padding: "10px"}}>
    <Row >
      <Col span={8}><h3>Incident Managment</h3></Col>
      <Col span={4} offset={8}><Button type="primary">Create New Incident</Button></Col>
      <Col span={4}><Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    /></Col>
    </Row>
    <Row style={{display: "flex", alignItems: "baseline", backgroundColor: "#f5f7f9", marginTop: "5px", padding: "10px", borderTop: "1px #cfd7df solid", borderBottom: "1px #cfd7df solid"}}>
      <Col style={{alignContent:"center"}}>
      <span>Sort By:</span>
      </Col>
      <Col>
      <Select defaultValue="Date Created" style={{ width: 240, fontWeight: "bold" }} bordered={false}>
        <Option value="date">Date Created</Option>
        <Option value="priority">Priority</Option>
        <Option value="status">Status</Option>
       </Select>
      </Col>
    </Row>
    {tempArray.map(() => {
      return <IncidentCard />
    })}
  </div>
}

export default Home;