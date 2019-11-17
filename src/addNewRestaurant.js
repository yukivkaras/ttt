import React from 'react';
import { Form, Input, Button } from 'antd';
import { __values } from 'tslib';

class AddNewRestaurant extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal'
    };
  }

  submitRestaurant = () => {    
    var address = document.getElementById('address').value;
    var restaurant = document.getElementById('restaurant').value;
    var values =  {
      'address': address,
      'restaurant' : restaurant
    }
    fetch('http://192.168.2.106:8080/add_new_address', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(values)
    })
      .then(res => res.json())
      .then(json => {
        if (json.code === "200") {
          console.log("232323233-----正确")
        } else if (json.code === "400") {
          console.log("2323232323------错了～")
        }
      })
  };

  render() {
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
        : null;
    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
          wrapperCol: { span: 14, offset: 4 },
        }
        : null;
    return (
      <div>
        <Form layout={formLayout}>
          <Form.Item label="Address" {...formItemLayout}>
            <Input placeholder="请输入地点" id='address' />
          </Form.Item>
          <Form.Item label="Restaurant" {...formItemLayout}>
            <Input placeholder="请输入新的餐厅名称" id='restaurant' />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" onClick={this.submitRestaurant}>Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default AddNewRestaurant;
