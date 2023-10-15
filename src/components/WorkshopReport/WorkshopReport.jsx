import React, { Component } from "react";
import { Form, InputNumber, Input, Button } from "antd";
import { Col, Row, Select } from "antd";
import './WorkshopRP.css'

export class WorkshopReport extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={5} className="mx-15" offset={3}>
            <Form.Item label="Title of Workshop:">
              <Input />
            </Form.Item>

            <Form.Item label="Lead Faculty:">
              <Input />
            </Form.Item>

            <Form.Item label="Program structure:">
              <Select>
                <Select.Option value="ACLS">ACLS</Select.Option>
                <Select.Option value="Trauma-I">Trauma-I</Select.Option>
                <Select.Option value="Trauma-II">Trauma-II</Select.Option>
                <Select.Option value="NRP-I">NRP-I</Select.Option>
                <Select.Option value="POCUS">POCUS</Select.Option>
                <Select.Option value="ACN">ACN</Select.Option>
                <Select.Option value="Endoscopyy">Endoscopy</Select.Option>
                <Select.Option value="Laproscopy">Laproscopy</Select.Option>
                <Select.Option value="Ultrasound for Radiology">
                  Ultrasound for Radiology
                </Select.Option>
                <Select.Option value="Ultrasound for OBGYN">
                  Ultrasound for OBGYN
                </Select.Option>
                <Select.Option value="Advanced ventilation">
                  Advanced ventilation
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col offset={3}>
            <Form.Item label="Details Page:">
              <Input />
            </Form.Item>
            <Form.Item label="Attendance:">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Button type="primary" className="btn">Submit</Button>
      </div>
    );
  }
}

export default WorkshopReport;
