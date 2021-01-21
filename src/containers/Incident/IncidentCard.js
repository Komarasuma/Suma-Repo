import React from 'react'
import {Card, Tag, Row, Col} from 'antd'

const IncidentCard = () => {
  return (
    <Card style={{margin: "5px"}}>
      <Row>
        <Col>
          <Tag>Incident_category</Tag>
        </Col>
        <Col span={4} offset={12}>
          <span>Priority</span>
        </Col>
      </Row>
      <Row>
        <Col>Subject of the incident</Col>
      </Row>
      <Row>
        <Col>AssignedTo - </Col>
        <Col>Created yesterday - </Col>
        <Col>Due on Tomorrow</Col>
      </Row>
    </Card>
  )
}

export default IncidentCard