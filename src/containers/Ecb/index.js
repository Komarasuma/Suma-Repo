import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  CaretUpOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons';

import { Row, Col, Slider, Button } from 'antd';
import CameraTable from './Table';

class Video extends Component {

  static propTypes = {
  }

  render() {
    const camera = this.props.camera ||  {
      lat: 16.5757523,
      lng: 80.2865137,
      id: 1
    };
    return (
      <div>
        <Row>
          <Col span={18}>
            Device: ID {camera? camera.id : ""}
          </Col>
          <Col span={3}>
            #3
          </Col>
          <Col span={3}>
            Mon:
          </Col>
        </Row>

        <Row gutter={5} style={{ textAlign: "center" }}>

        </Row>
        <Row>
          <br/>
        </Row>
        <Row>
          <Col span={24}>
            <CameraTable deviceid={camera.id} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const actionCreators = {
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Video);
