import React from 'react'
import { Space, Table, Tag , Input,Button } from 'antd';
const { Column, ColumnGroup } = Table;


export default function Firm() {
  const data = [
    {
      id: '0011',
      '公司名': '1号公司',
      '上级公司编号': '00',
      "创建时间": '20130912',
      "修改时间": '20200913',
    },{
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
      <Button type='default' style={{height:'39.6px'}}>🔍搜索</Button>
      <Button type='primary' style={{height:'39.6px',marginLeft:'100px'}}>新增</Button>

      <Table dataSource={data}
        pagination={{}}
      >
        <Column title="id" dataIndex='id' key="id" />
        <Column title="公司名" dataIndex='公司名' key="name" />
        <Column title="上级公司编号" dataIndex='上级公司编号' key="上级公司编号" />
        <Column title="创建时间" dataIndex='创建时间' key="创建时间" />
        <Column title="修改时间" dataIndex='修改时间' key="修改时间" />
        <Column
          title="操作"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <a tyle={{color:'red'}}>删除</a>
              <a>修改</a>
            </Space>
          )}
        />
      </Table>
    </div>
  )
}
