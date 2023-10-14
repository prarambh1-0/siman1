import React, { Component } from 'react'
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const NormFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export class StudentDBCreation extends Component {
  
  render() {
   

    return (
      <div>
        <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Create a batch: ">
          <Input />
        </Form.Item>
        <Form.Item label="Speciality: ">
          <Select>
            <Select.Option value="demo">Medical</Select.Option>
            <Select.Option value="demo">Nursing</Select.Option>
            <Select.Option value="demo">Physiotherapy</Select.Option>
            <Select.Option value="demo">Pharmacy</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Level: ">
          <Select>
            <Select.Option value="demo">UG</Select.Option>
            <Select.Option value="demo">PG</Select.Option>
            <Select.Option value="demo">Intern</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Academic Year: ">
          <InputNumber />
        </Form.Item>

         <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={NormFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item> 
        <Form.Item className=''>
          <Button>Create a batch</Button>
          <Button>Next</Button>
        </Form.Item>
      </Form>
      </div>
    )
  }
}

export default StudentDBCreation
