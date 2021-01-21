import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Device Type',
    dataIndex: 'deviceType',
  },
  {
    title: 'Device Id',
    dataIndex: 'deviceId',
  },
  {
    title: 'Device Status',
    dataIndex: 'deviceStatus',
  },
  {
    title: 'Connection Type',
    dataIndex: 'connectyionType',
    filters: [
      {
        text: 'Active',
        value: 'active',
      },
      {
        text: 'Inactive',
        value: 'deactive',
      },
      {
        text: 'Not Published',
        value: 'deactive',
      },
      {
        text: 'Video loss',
        value: 'deactive',
      },
    ]
  },
];
export default class CameraTable extends Component {

  render() {
    let data = [{"deviceType":"ECB","deviceId":this.props.deviceid,"deviceStatus":"Active","connectyionType":"OFC/WIF/GSM"}];

    return <Table columns={columns} dataSource={data} /> 
  }
  
}