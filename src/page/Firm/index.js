import React, { useState, useEffect } from 'react'
import { Space, Table, Tag, Input, Button, Modal, Form } from 'antd';
import { companySelect, companyDelete,companyUpdate, companyInsert } from '../../api/company'
const companyData = await companySelect()
export default function Firm() {
  const { Column, ColumnGroup } = Table;

  const [form] = Form.useForm()
  const [registerForm] = Form.useForm()
  // const [editMode,setEditMode] =  useState(f)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [formData,setFormData] = useState({})
  
  const showModal = (record) => {
    setIsModalOpen(true);
    form.setFieldsValue({
      ...record
    });
  };
  const showRegisterModal = () => {
    setRegisterModalOpen(true);
  }
  const handleRegisterOk = async() => {
    const value = registerForm.getFieldValue();
    await companyUpdate(value)    
    setRegisterModalOpen(false);
    registerForm.resetFields();
  }
  const handleRegisterCancel = () => {

    setRegisterModalOpen(false);
  }

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
      <Button type='primary' style={{ height: '39.6px', marginLeft: '100px' }} onClick={showRegisterModal}>新增</Button>
      <Modal open={registerModalOpen} onOk={handleRegisterOk} onCancel={handleRegisterCancel}>
        <Form
         form={registerForm}
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

          autoComplete="off"
        >
          <Form.Item
            label="公司名称"
            name="companyName"
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
            label="上级公司编号"
            name="parentId"
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
            label="公司简述"
            name="description"
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
            label="层级"
            name="level"

          >
            <Input />
          </Form.Item>
          <Form.Item
            label="类型"
            name="type"
            rules={[
              {
                required: true,
                message: 'Please input type!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
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
              <Button type="primary" onClick={() => showModal(record)}>修改</Button>
              <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                  form={form}
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

                  autoComplete="off"
                >
                  <Form.Item
                    label="公司名称"
                    name="companyName"
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
                    label="上级公司编号"
                    name="parentId"
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
                    label="公司简述"
                    name="description"
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
                    label="层级"
                    name="level"

                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="类型"
                    name="type"
                    rules={[
                      {
                        required: true,
                        message: 'Please input type!',
                      },
                    ]}
                  >
                    <Input />
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
