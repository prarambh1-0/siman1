import React, { Component } from 'react';
import { Form, InputNumber} from 'antd';
import { Col, Row, Select } from 'antd';


export class MegaSheetTwo extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={8} className='mx-10'>
            <Form.Item label="Out of Participants :">
              <InputNumber />
            </Form.Item>
            <Form.Item label="UG :">
              <InputNumber />
            </Form.Item>
            <Form.Item label="PG :">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Interns :">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Fellowship: ">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Faculty :">
              <InputNumber />
            </Form.Item>
            <Form.Item label="BSc Nursing:">
              <InputNumber />
            </Form.Item>
            <Form.Item label="MSc Nursing:">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Non HCP:">
              <InputNumber />
            </Form.Item>
            <Form.Item label="No of Beneficiaries : ">
              <InputNumber />
            </Form.Item>
            <Form.Item label="No. of Workshop Day’s :">
              <InputNumber />
            </Form.Item>

          </Col>
          <Col span={8}>
            <Form.Item label="Out of Participants :">
              <InputNumber />
            </Form.Item>
            <Form.Item label="UG :">
              <InputNumber />
            </Form.Item>
            <Form.Item label="PG :">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Interns :">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Fellowship: ">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Faculty :">
              <InputNumber />
            </Form.Item>
            <Form.Item label="BSc Nursing:">
              <InputNumber />
            </Form.Item>
            <Form.Item label="MSc Nursing:">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Non HCP:">
              <InputNumber />
            </Form.Item>
            <Form.Item label="No of Beneficiaries : ">
              <InputNumber />
            </Form.Item>
            <Form.Item label="No. of Workshop Day’s :">
              <InputNumber />
            </Form.Item>

          </Col>
          <Col span={8}>
          <Form.Item label="Department"> 
          <Select>
            <Select.Option value="Anesthesiology">Anesthesiology</Select.Option>
            <Select.Option value="Dermatology">Dermatology</Select.Option>
            <Select.Option value="G. Medicine">G. Medicine</Select.Option>
            <Select.Option value="G. Surgery">G. Surgery</Select.Option>
            <Select.Option value="Obst & Gyn">Obst & Gyn</Select.Option>
            <Select.Option value="Ophthalmology">Ophthalmology</Select.Option>
            <Select.Option value="Orthopedics">Orthopedics</Select.Option>
            <Select.Option value="Pediatrics">Pediatrics</Select.Option>
            <Select.Option value="Pathology">Pathology</Select.Option>
            <Select.Option value="Psychiatry">Psychiatry</Select.Option>
            <Select.Option value="Radio-Diagnosis">Radio-Diagnosis</Select.Option>
          </Select>
        </Form.Item>
            <Form.Item label="Lucina: ">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Anatomage: ">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Vimedix: ">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Lucina: ">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Anatomage: ">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Vimedix: ">
              <InputNumber />
            </Form.Item>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MegaSheetTwo
