import './Attributes.css'
import React from 'react';
import { Layout, Space} from 'antd';
function Navbar() {
  const { Header} = Layout;
  const headerStyle = {
    textAlign: 'left',
    color: '#FFFFFF',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    
    backgroundColor: '#03045E',
  };
  return (
    <>
    <div>
    <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout className='layoutInMega2'>
      <Header style={headerStyle}>SIMAN</Header>
    </Layout>
    </Space>
    </div>
    </>
  )
}

export default Navbar