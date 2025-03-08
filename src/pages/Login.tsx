import React, { useState } from 'react';
import { Button, Input, Form, message } from 'antd';
import { signIn } from '../api/services';
import { XTSSignInRequest, XTSSignInResponse, XTSServiceError } from '../api/types';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (values: { phone: string; otp: string }) => {
    const request: XTSSignInRequest = {
      _type: 'XTSSignInRequest',
      _dbId: '',
      _messageId: null,
      deviceId: '3cf50800-e53a-42d4-be10-e5abffe9ecda',
      phone: values.phone,
      otp: values.otp,
    };

    setLoading(true);
    try {
      const response: XTSSignInResponse = await signIn(request);
      message.success('Đăng nhập thành công!');
      console.log('Sign in success:', response);
    } catch (error) {
      const serviceError = error as XTSServiceError;
      message.error(`Lỗi ${serviceError.status}: ${serviceError.message}`);
      console.error('Sign in failed:', serviceError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto' }}>
      <h2>Đăng nhập</h2>
      <Form onFinish={handleSignIn}>
        <Form.Item name="phone" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}>
          <Input placeholder="Số điện thoại" />
        </Form.Item>
        <Form.Item name="otp" rules={[{ required: true, message: 'Vui lòng nhập OTP!' }]}>
          <Input placeholder="OTP" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;