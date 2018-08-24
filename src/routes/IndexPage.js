import React from 'react';
import { connect } from 'dva';

import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>topics</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>jobs</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span>me</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: '100vh',
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
