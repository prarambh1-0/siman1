import './Attributes.css'
import React from 'react';
import { Button, Layout } from 'antd';
function Navbar() {
  const { Header } = Layout;

  return (
    <>
      <div>
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

      </div>
    </>
  )
}

export default Navbar