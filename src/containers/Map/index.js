import React, { Component } from "react";
import { connect } from "react-redux";
import { Drawer } from "antd";
import { Map, TileLayer, Marker, GeoJSON } from "react-leaflet";
import L from "leaflet";
import Camera from "../Camera";
import Ecb from "../Ecb";

import FullscreenOutlined from '@ant-design/icons';


class MapView extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      ecbvisible:false,
      lat: 26.338345,
      lng: 75.036621,
      zoom: 10,
      cameras: [
        {
          lat: 26.583307,
          lng: 74.824029,
          id: 1,
        },
        {
          lat: 26.556788,
          lng: 74.793162,
          id: 3,
        },
        {
          lat: 26.541442,
          lng: 74.760085,
          id: 4,
        },
        {
          lat: 26.524913,
          lng: 74.722222,
          id: 5,
        },
        {
          lng: 74.311883,
          lat: 26.099694,
          id: 6 
        },
        {
          lng: 74.313592,
          lat: 26.105011,
          id: 7
        },
        {
          lng: 74.324288,
          lat: 26.105257,
          id: 8
        },
        {
          lng: 74.363704,
          lat: 26.154093,
          id: 9
        },
        {
          lng:74.390543,
          lat:26.172531,
          id: 10
        },
        {
          lng:74.437584,
          lat:26.194119,
          id: 11
        },
        {
          lng:74.485556,
          lat:26.249306,
          id: 12
        },
        {
          lng:74.498971,
          lat:26.279132,
          id: 13
        },
        {
          lng:74.519989,
          lat:26.284955,
          id: 14
        },
        {
          lng:74.553217,
          lat:26.322603,
          id: 15
        },
        {
          lng:74.584275,
          lat:26.345487,
          id: 16
        },
        {
          lng:74.592343,
          lat:26.359971,
          id: 17
        },
        {
          lng:74.615151,
          lat:26.36587,
          id: 18,
        },
        {
          lng:74.700772,
          lat:26.443723,
          id: 19,
        },
      ],
      ecb: [
        {
          lat: 26.573307,
          lng: 74.814029,
          id: 21
        },
        {
          lat: 26.546788,
          lng: 74.783162,
          id: 23
        },
        {
          lat: 26.531442,
          lng: 74.750085,
          id: 24
        },
        {
          lat: 26.514913,
          lng: 74.712222,
          id: 25
        },
        {
          lat: 26.478694,
          lng: 74.699972,
          id: 26
        },
        {
          lat: 26.462787,
          lng:  74.703018,
          id: 27
        },
        {
          lng: 74.301883,
          lat: 26.089694,
          id: 28
        },
        {
          lng: 74.303592,
          lat: 26.095011,
          id: 29
        },
        {
          lng: 74.314288,
          lat: 26.095257,
          id: 30
        },
        {
          lng: 74.353704,
          lat: 26.144093,
          id: 31
        },
        {
          lng:74.380543,
          lat:26.162531,
          id: 32
        },
        {
          lng:74.427584,
          lat:26.184119,
          id: 33
        },
        {
          lng:74.475556,
          lat:26.239306,
          id: 34
        },
        {
          lng:74.488971,
          lat:26.269132,
          id: 35
        },
        {
          lng:74.509989,
          lat:26.274955,
          id: 36
        },
        {
          lng:74.543217,
          lat:26.312603,
          id: 37
        },
        {
          lng:74.574275,
          lat:26.335487,
          id: 38
        },
        {
          lng:74.582343,
          lat:26.349971,
          id: 39
        },
        {
          lng:74.605151,
          lat:26.35587,
          id: 40
        },
        {
          lng:74.690772,
          lat:26.433723,
          id: 41
        },
      ],
      routeGeoJson: {
            "coordinates": [
              [
                74.311883,
                26.099694
              ],
              [
                74.313592,
                26.105011
              ],
              [
                74.324288,
                26.105257
              ],
              [
                74.363704,
                26.154093
              ],
              [
                74.390543,
                26.172531
              ],
              [
                74.437584,
                26.194119
              ],
              [
                74.485556,
                26.249306
              ],
              [
                74.498971,
                26.279132
              ],
              [
                74.519989,
                26.284955
              ],
              [
                74.553217,
                26.322603
              ],
              [
                74.584275,
                26.345487
              ],
              [
                74.592343,
                26.359971
              ],
              [
                74.615151,
                26.36587
              ],
              [
                74.700772,
                26.443723
              ],
              [
                74.713978,
                26.475931
              ],
              [
                74.703262,
                26.507027
              ],
              [
                74.70553,
                26.514253
              ],
              [
                74.798358,
                26.558899
              ],
              [
                74.80517,
                26.569552
              ],
              [
                74.853621,
                26.600538
              ],
              [
                74.86714,
                26.59776
              ],
              [
                74.860448,
                26.58848
              ]
            ],
            "type": "LineString",
      },
      selectedCamera: null,
      selectedEcb:null
    };
  }

  state = {
    collapsed: true,
  };

  polystyle = (feature) => {
    return {
        fillColor: 'blue',
        weight: 5,
        opacity: 1,
        color: '#536878',  //Outline color
        fillOpacity: 0.7
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  showecbDrawer = () => {
    this.setState({
      ecbvisible: true,
      
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
      ecbvisible: false,
    });
  };

  showPopup = () => {
    this.showDrawer();
  };
  showecbPopup = () => {
    this.showecbDrawer();
  };

  componentDidMount() {}

  onCameraClicked = (camera, event) => {
    this.setState({ selectedCamera: camera }, () => {
      this.showPopup();
    });
    console.log(event, camera);
  };
  onecbClicked = (camera, event) => {
    console.log('camera----',camera);
    this.setState({ selectedEcb: camera }, () => {
      this.showecbPopup();
    });
    console.log(event, camera);
  };

  render() {
    const cameraIcon = new L.Icon({
      iconUrl: "/images/camera.svg",
      iconRetinaUrl: "/images/camera.svg",
      iconSize: [20, 20],
    });
    const ecbIcon = new L.Icon({
     
      iconUrl: "/images/emergency-call.svg",
      iconRetinaecgUrl: "/images/emergency-call.svg",
      iconSize: [20, 20],
    });
    const position = [this.state.lat, this.state.lng];

    return (
      <React.Fragment>
        <Drawer title="Camera" placement="right" closable={true} onClose={this.onClose} visible={this.state.visible} width={520}>
          <Camera camera={this.state.selectedCamera} />
        </Drawer>
        <Drawer title="ECB" placement="right" closable={true} onClose={this.onClose} visible={this.state.ecbvisible} width={520}>
         <Ecb camera={this.state.selectedEcb} />
        </Drawer>


        <Map center={position} style={{ width: "100%", height: "100%" ,position: "relaive"}} zoom={this.state.zoom} >
        <FullscreenOutlined className="mapExpanderCSS"/>
          <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <GeoJSON data={this.state.routeGeoJson} style={this.polystyle} />
          {this.state.cameras.map((camera) => {
            return <Marker onclick={this.onCameraClicked.bind(this, camera)} icon={cameraIcon} position={[camera.lat, camera.lng]} key={camera.id}></Marker>;
          })}
          {this.state.ecb.map((ecb) => {
            return <Marker onclick={this.onecbClicked.bind(this, ecb)}  icon={ecbIcon} position={[ecb.lat, ecb.lng]} key={ecb.id}></Marker>;
          })}
        </Map>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(MapView);
