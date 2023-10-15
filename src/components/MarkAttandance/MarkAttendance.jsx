import React, { Component } from 'react'
import { useState } from 'react'
import './markAttendance.css'
import {
  Button,
  Form,
  Upload,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const NormFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const data = [
  {
    studentId: '01',
    name: 'John Doe',
    status: 'No',
    comment: 'NA',
  },
  {
    studentId: '02',
    name: 'Sara',
    status: 'Yes',
    comment: 'NA',
  },
  {
    studentId: '03',
    name: 'Mike',
    status: 'Yes',
    comment: 'NA',
  },
]

const MarkAttendance = () => {
    const [studentData, setstudentData] = useState(data)
  
    const onChangeInput = (e, studentId) => {
      const { name, value } = e.target
      console.log('name', name)
      console.log('value', value)
      console.log('studentId', studentId)
  
      const editData = studentData.map((item) =>
        item.studentId === studentId && name ? { ...item, [name]: value } : item
      )
  
      console.log('editData', editData)
  
      setstudentData(editData)
    }
  
    
    return (
      <div>
        {/* <Table columns={columns} dataSource={data} />; */}
        <div className="container">
      <h1 className="title">ReactJS Editable Table</h1>
      <table>
        <thead>
          <tr>
          <th>Roll No</th>
            <th>Name</th>
            <th>status</th>
            <th>comment</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map(({ studentId, name, status, comment }) => (
            <tr key={studentId}>
              <td>
                <input
                  studentId="studentId"
                  value={studentId}
                  type="text"
                  onChange={(e) => onChangeInput(e, studentId)}
                  placeholder="Type Name"
                />
              </td>
              <td>
                <input
                  name="name"
                  value={name}
                  type="text"
                  onChange={(e) => onChangeInput(e, studentId)}
                  placeholder="Type Email"
                />
              </td>
              <td>
                <input
                  name="status"
                  type="text"
                  value={status}
                  onChange={(e) => onChangeInput(e, studentId)}
                  placeholder="Type Position"
                />
              </td>
              <td>
                <input
                  name="comment"
                  type="text"
                  value={comment}
                  onChange={(e) => onChangeInput(e, studentId)}
                  placeholder="Type Position"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Form>
    <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={NormFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        </Form>
        <Button href='/studentupdation'>Add new Student</Button>
      </div>
    )
  }


export default MarkAttendance
