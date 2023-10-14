import React, { Component } from 'react'
import {
    Button,
    Form,
    Input,
    Select,
  } from 'antd';
export class studentupdation extends Component {
  render() {
    return (
      <div>
         <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="First Name: ">
          <Input />
        </Form.Item>
        <Form.Item label="Last Name: ">
          <Input />
        </Form.Item>
        <Form.Item label="Enter Email: ">
          <Input />
        </Form.Item>
        <Form.Item label="Mobile No: ">
          <Input />
        </Form.Item>
        <Form.Item label="Role: ">
          <Select>
            <Select.Option value="demo">UG</Select.Option>
            <Select.Option value="demo">PG</Select.Option>
            <Select.Option value="demo">Intern</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Assigned Batch: ">
          <Select>
            <Select.Option value="demo">A</Select.Option>
            <Select.Option value="demo">B</Select.Option>
            <Select.Option value="demo">C</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item className=''>
          <Button>Add Student</Button>
        </Form.Item>
      </Form>
      </div>
    )
  }
}

export default studentupdation
