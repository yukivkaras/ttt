import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';

  const columns = [
    {
      title: 'Address_id',
      dataIndex: 'address_id',
      key: 'address_id',
    },
    {
      title: 'Restaurant_id',
      dataIndex: 'restaurant_id',
      key: 'restaurant_id',
    },
    {
      title: 'Address_name',
      dataIndex: 'address_name',
      key: 'address_name',
    },
    {
      title: 'Restaurant_name',
      key: 'restaurant_name',
      dataIndex: 'restaurant_name',
    },
    {
        title: 'Ate_count',
        key: 'ate_count',
        dataIndex: 'ate_count',
    },
    {
        title: 'Create_time',
        key: 'create_time',
        dataIndex: 'create_time',
    },
    {
        title: 'Last_ate_time',
        key: 'last_ate_time',
        dataIndex: 'last_ate_time',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a>Invite {record.name}</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ];
class FoodTable extends Component {
   constructor(props){
    super(props);
    this.state = {data:[]}
    }
  
  componentDidMount(){
    fetch('http://192.168.2.107:8080/get_table', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
    .then(res => res.json())
    .then(res => {
        console.log(res);
        console.log(res.datas);
        this.setState({
            data : res.datas
        });
    })
  }
      render() {
        return (
            <Table columns={columns} dataSource={this.state.data} />
        );
      }

}

export default FoodTable;
