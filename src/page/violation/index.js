import React from 'react'
import { Space, Table, Tag, Input,Button } from 'antd';
const { Column, ColumnGroup } = Table;

export default function Violation() {

  const data = [
    {
      '上级单位': '重庆运输总公司',
      '基层单位': '遂宁分公司',
      '作业项目': '秋林17',
      "查出时间": '2019--06-18',
      "违章人员": '冷小兵',
      "违章类别": '违反交通规则',
      "违章简述": '6月18日，金益物流川E38765号运输车驾驶员，假系安全带',
      "可能后果": '一般',
      "发现人": '刘泳',
      '发现人单位':'HES监督站',
      '处理结果':'100',
      '扣分':'1.5',
      '用工性质':'承包商人员',
      '工种工龄':'五年以上',
      '岗位类别':'操作岗位',
      '违章性质':'一般违规操作',
      '检查类型':'10'
    }, {
      '上级单位': '重庆运输总公司',
      '基层单位': '遂宁分公司',
      '作业项目': '中江2井',
      "查出时间": '2019-07-06',
      "违章人员": '张晓',
      "违章类别": '违反交通规则',
      "违章简述": '6月18日，金益物流川E38765号运输车驾驶员，假系安全带',
      "可能后果": '一般',
      "发现人": '李天',
      '发现人单位':'HES监督站',
      '处理结果':'100',
      '扣分':'1.5',
      '用工性质':'承包商人员',
      '工种工龄':'五年以上',
      '岗位类别':'操作岗位',
      '违章性质':'一般违规操作',
      '检查类型':'10'
    },


  ];
  return (
    <div>
      <Input size="large" placeholder="搜索" style={{ width: '300px', marginBottom: '15px' }} />
      <Button type='default' style={{height:'39.6px'}}>🔍搜索</Button>
      <Button type='primary' style={{height:'39.6px',marginLeft:'100px'}}>新增</Button>

      <Table dataSource={data}
        pagination={{}}
      >
        <Column title="上级单位" dataIndex='上级单位' key="上级单位" />
        <Column title="基层单位" dataIndex='基层单位' key="基层单位" />
        <Column title="作业项目" dataIndex='作业项目' key="作业项目" />
        <Column title="查出时间" dataIndex='查出时间' key="查出时间" />
        <Column title="违章人员" dataIndex='违章人员' key="违章人员" />
        <Column title="违章类别" dataIndex='违章类别' key="违章类别" />
        <Column title="违章简述" dataIndex='违章简述' key="违章简述" />
        <Column title="可能后果" dataIndex='可能后果' key="可能后果" />
        <Column title="发现人" dataIndex='发现人' key="发现人" />
        <Column title="发现人单位" dataIndex='发现人单位' key="发现人单位" />
        <Column title="处理结果" dataIndex='处理结果' key="处理结果" />
        <Column title="扣分" dataIndex='扣分' key="扣分" />
        <Column title="用工性质" dataIndex='用工性质' key="用工性质" />
        <Column title="工种工龄" dataIndex='工种工龄' key="工种工龄" />
        <Column title="岗位分类" dataIndex='岗位分类' key="岗位分类" />
        <Column title="违章性质" dataIndex='违章性质' key="违章性质" />
        <Column title="检查类型" dataIndex='检查类型' key="检查类型" />
        <Column
          title="操作"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <a style={{color:'red'}}>删除</a>
              <a>修改</a>
            </Space>
          )}
        />
      </Table>
    </div>
  )
}
