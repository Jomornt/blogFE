import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { Card, List, Icon, Modal, Input, Form, Upload, message } from 'antd';
import {
  DownloadPageWrapper,
} from '../style'

const { Dragger } = Upload;

@observer
class DownloadPage extends Component {
  constructor() {
    super()
    this.state = {
      imageUrl: '',
      loading: false,
    }
  }
  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  render() {
    const data = [
      {
        title: '一个很好用的工具',
      },
      {
        title: 'Title 2',
      },
      {
        title: 'Title 3',
      },
      {
        title: 'Title 4',
      },
      {
        title: 'Title 4',
      },
    ];
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const formItemLayout = {
      labelCol: {
        xs: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 18 },
      },
    };
    return (
      <DownloadPageWrapper>
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={data}
          renderItem={(item, index) => {
            if (index === data.length-1) {
              return <List.Item className="add-button-wrapper">
                <div className="add-button">
                  <Icon type="plus" />
                </div>
              </List.Item>
            }
            return (
              <List.Item>
                <Card title={item.title}>
                  <Icon type="folder" />
                </Card>
              </List.Item>
            )
          }}
        />,
        <Modal
          title="文件上传"
          visible={false}
          width={700}
        >
          <Form {...formItemLayout}>
            <Form.Item label="标题">
              <Input></Input>
            </Form.Item>
            <Form.Item label="图片">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={this.beforeUpload}
                onChange={this.handleChange}
              >
                {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              </Upload>
            </Form.Item>
            <Form.Item label="内容">
            <Dragger>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
              </p>
            </Dragger>
            </Form.Item>
          </Form>
        </Modal>
      </DownloadPageWrapper>
    )
  }

}

export default DownloadPage;