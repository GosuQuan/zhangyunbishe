import React from 'react'
import { Space, Table, Tag , Input ,Button} from 'antd';
const { Column, ColumnGroup } = Table;








export default function People() {

  const data = [
    {
      id: '300001',
      '公司id': '1号公司',
      '姓名': '李天',
      "密码": 123123123123,
      "作业项目": '秋林17',
      "角色": '员工',
      "用工性质": '承包商人员',
      "工作时间": '一年',
      "岗位分类": '操纵岗位',
    },
    {
      id: '300002',
      '公司id': '1号公司',
      '姓名': '张晓',
      "密码": '中江2井',
      "作业项目": '地基',
      "角色": '员工',
      "用工性质": '承包商人员',
      "工作时间": '一年',
      "岗位分类": '班组管理人员',
    },{
      id: '300003',
      '公司id': '1号公司',
      '姓名': '李雨',
      "密码": 65451513,
      "作业项目": '西14井',
      "角色": '员工',
      "用工性质": '承包商人员',
      "工作时间": '一年',
      "岗位分类": '班组管理人员',
    },
  ];


  return (
    
    <div>
      <Input size="large" placeholder="搜索" style={{width:'300px',marginBottom:'15px'}}/>
      <Button type='default' style={{height:'39.6px'}}>🔍搜索</Button>
      <Button type='primary' style={{height:'39.6px',marginLeft:'100px'}}>新增</Button>
      
      <Table dataSource={data} 
       pagination={{}}
      >
        <Column title="id" dataIndex='id' key="id" />
        <Column title="公司id" dataIndex='公司id' key="fid" />
        <Column title="姓名" dataIndex='姓名' key="姓名" />
        <Column title="密码" dataIndex='密码' key="密码" />
        <Column title="作业项目" dataIndex='作业项目' key="作业项目" />
        <Column title="角色" dataIndex='角色' key="角色" />
        <Column title="用工性质" dataIndex='用工性质' key="用工性质" />
        <Column title="工作时间" dataIndex='工作时间' key="工作时间" />
        <Column title="岗位分类" dataIndex='岗位分类' key="岗位分类" />
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
