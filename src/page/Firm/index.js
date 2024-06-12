import React, { useState,useEffect } from 'react'
import { Space, Table, Tag, Input, Button, Modal, Form } from 'antd';
import { companySelect, companyDelete } from '../../api/company'

export default function Firm() {
  const { Column, ColumnGroup } = Table;
  const companyData = companySelect()
  // const [form] =  Form.useForm()
  // const [editMode,setEditMode] =  useState(f)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleDelete = (record) => {
    console.log(record)
    // console.log(record.id)
    companyDelete(record.id)
  }
  const data = [
    {
      id: '0011',
      '公司名': '1号公司',
      '上级公司编号': '00',
      "创建时间": '20130912',
      "修改时间": '20200913',
    }, {
      id: '0012',
      '公司名': '2号公司',
      '上级公司编号': '00',
      "创建时间": '20130912',
      "修改时间": '20200913',
    }

  ];
  return (
    <div>
      <Input size="large" placeholder="搜索" style={{ width: '300px', marginBottom: '15px' }} />
      <Button type='default' style={{ height: '39.6px' }}>🔍搜索</Button>
      <Button type='primary' style={{ height: '39.6px', marginLeft: '100px' }}>新增</Button>
      {/* TestingAPi: 将 dataSource = {data} 替换成 dataSource = {companyData} */}
      <Table dataSource={data}
        pagination={{}}
      >
        <Column title="id" dataIndex='id' key="id" />
        <Column title="公司名" dataIndex='companyName' key="companyName" />
        <Column title="上级公司编号" dataIndex='parentId' key="parentId" />
        <Column title="公司简述" dataIndex='description' key="description" />
        <Column title="层级" dataIndex='level' key="level" />
        <Column title="类型" dataIndex='type' key="type" />
        <Column
          title="操作"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button danger onClick={() => handleDelete(record)}>删除</Button>
              <Button type="primary" onClick={showModal}>修改</Button>
              <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form 
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    
                    remember: true,
                  }}
                  autoComplete="off"
                >
                  <Form.Item 
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                  </Form.Item>
                </Form>
              </Modal>
            </Space>
          )}
        />
      </Table>
    </div>
  )
}
