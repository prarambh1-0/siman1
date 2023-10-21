import React, { Component } from 'react';
import { Form, InputNumber} from 'antd';
import { Col, Row, Select, Input } from 'antd';
// import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';


export class MegaSheetOne extends Component {
  
  render() {
    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
    return (
      
      <div className='container page' >
        <Row className='container' style={{ marginTop: 8 }}>
          <Col span={8} className='mx-19'>
            <Form.Item label="Title of workshop :">
              <Input placeholder=" name "  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Nature of workshop"> 
          <Select>
            <Select.Option value="Anesthesiology">Student training</Select.Option>
            <Select.Option value="Dermatology">FDP</Select.Option>
            <Select.Option value="G. Medicine">Consultancy-paid/</Select.Option>
            <Select.Option value="G. Surgery"> Unpaid</Select.Option>
          </Select>
        </Form.Item>
            <Form.Item label="Date :">
            <DatePicker onChange={onChange}  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Reaport Number :">
              <InputNumber  style={{backgroundColor:'#CAF0F8'}} />
            </Form.Item>
            <Form.Item label="Name Of Trainer :">
              <Input label="name"  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
            <Form.Item label="Beneficiaries : ">
            <Input label="Name/Institution/Category"  style={{backgroundColor:'#CAF0F8'}}/>
            </Form.Item>
        
          </Col>
          <Col span={8} className='mx-20 container' >
          
        <Form.Item label="Type of workshop :"> 
          <Select>
            <Select.Option value="Anesthesiology">Student training</Select.Option>
            <Select.Option value="Dermatology">FDP</Select.Option>
            <Select.Option value="G. Medicine">Consultancy-paid/</Select.Option>
            <Select.Option value="G. Surgery"> Unpaid</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Department:"> 
          <Select>
            <Select.Option  value="Anesthesiology">Anesthesiology</Select.Option>
            <Select.Option value="Dermatology">Dermatology</Select.Option>
            <Select.Option value="G. Medicine">G. Medicine/</Select.Option>
            <Select.Option value="G. Surgery"> G. Surgery</Select.Option>
            <Select.Option value="Dermatology">	Obst & Gyn</Select.Option>
            <Select.Option value="Dermatology">	Ophthalmology</Select.Option>
            <Select.Option value="Dermatology">	Orthopedics</Select.Option>
            <Select.Option value="Dermatology">	Pediatrics</Select.Option>
            <Select.Option value="Dermatology">	Pathology</Select.Option>
            <Select.Option value="Dermatology">	Psychiatry</Select.Option>
            <Select.Option value="Dermatology">Radio-Diagnosis</Select.Option>
            <Select.Option value="Dermatology">IP</Select.Option>
            <Select.Option value="Dermatology">Physiotherapy</Select.Option>
            <Select.Option value="Dermatology">Nursing</Select.Option>
            <Select.Option value="Dermatology">E.N.T</Select.Option>
            <Select.Option value="Dermatology">Forensic Medicine</Select.Option>
            <Select.Option value="Dermatology">Emergency Medicine</Select.Option>
            <Select.Option value="Dermatology">	Faculty Development Workshop</Select.Option>
            <Select.Option value="Dermatology">Obs & Gyn/Radio-diagnosis</Select.Option>
            <Select.Option value="Dermatology">Intern</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Institution of trainer:"> 
          <Select>
            <Select.Option value="Anesthesiology">Internal</Select.Option>
            <Select.Option value="Dermatology">External</Select.Option>
          </Select>
        </Form.Item>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MegaSheetOne
