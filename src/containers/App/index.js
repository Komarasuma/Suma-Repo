import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { BrowserRouter, withRouter } from 'react-router-dom';
import '../../App.css';
import SideMenu from './SideMenu';
import TopMenu from './TopMenu';
import logo from '../../assets/icons/icon.png'
import smallLogo from '../../assets/icons/icon_small.png'

import Dashboard from '../Dashboard';
import Login from '../Login';
import MainDrawer from './MainDrawer';
import Router from '../Router';

const { Header, Sider, Content, Footer } = Layout;

/**
 * Root/Template component
 */
class App extends Component {

  state = {
    collapsed: true,
    visible: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onIMSClicked = () => {
    this.setState({

    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showPopup = () => {
    debugger;
    this.showDrawer()
  }

  // isFullPageLoaded = () => {
  //   debugger;
  //   if (window.location.pathname == "/ims") {
  //     return true;
  //   }
  //   return false;
  // }

  render() {

    return (
      <BrowserRouter>
        <Layout>
          {this.props.login && this.props.login.status ? <><Sider
            collapsible
            onCollapse={this.toggle}
            collapsed={this.state.collapsed}
            style={{ textAlign: "center" }}
          >
            {this.state && this.state.collapsed ? <img className="logo" alt="" src={smallLogo} /> : <img className="logo" alt="" src={logo} />}

            <SideMenu onClick={this.showPopup} />
          </Sider>
          <Layout>
            <Header style={{ padding: "0px" }}>
              <div style={{ width: "100vw", display: 'flex', flexDirection: 'row' }}>
                <TopMenu style={{ width: '100%' }} />
              </div>
            </Header>
            <Content style={{ minHeight: '85vh' }}>
              <MainDrawer />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              ITMS ©2020
            </Footer>
          </Layout></>:<Login />}
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
};

const actionCreators = {
};

export default connect(
  mapStateToProps,
  actionCreators,
)(App);

