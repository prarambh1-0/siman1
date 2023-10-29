import './Attributes.css'
import React from 'react';
import { Layout, Space } from 'antd';
function Navbar() {
  const { Header } = Layout;

  return (
    <>
      <div >
         <Space direction="vertical" style={{ width: '100%' }}>
        <Layout style={{margin:0, padding:0, marginBottom:20}} >
          <Header style={{
            textAlign: 'left',
            color: 'white',
            height: 64,
            padding:-7,
            backgroundColor: 'rgb(37, 150, 190)',
          }}><h1>SIMAN
          <a href='/dashbord' style={{ textAlign: 'right', marginLeft: 1200, fontSize:20, color:'white'  }}> Dashbord</a>
          </h1>
          </Header>

        </Layout>
          </Space>
      </div>
    </>
  )
}

export default Navbar