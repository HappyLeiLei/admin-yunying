import React from 'react'
import { DataTable } from 'components'
import { Table, Row, Col, Card, Select } from 'antd'

class DataTablePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterCase: {
        gender: '',
      }
    }
  }

  handleSelectChange = (gender) => {
    this.setState({
      filterCase: {
        gender,
      },
    })
  }
  render() {
    const { filterCase } = this.state
    const staticDataTableProps = {
      dataSource: [{
          key: '1',
          name: '尺寸',
          val: '24',
        }, {
          key: '2',
          name: '颜色',
          val: '太空灰',
        }],
        columns: [{
          title: '属性名',
          dataIndex: 'name'
        }, {
          title: '属性值',
          dataIndex: 'val'
        }, {
          title: '操作',
        }],
        pagination: false,

    }


    return (<div className="content-inner">
      <Row gutter={32}>
        <Col lg={24} md={24}>
          <Card title="属性列表">
            <DataTable
              {...staticDataTableProps}
            />
          </Card>
        </Col>
      </Row>
    </div>)
  }
}


export default DataTablePage
