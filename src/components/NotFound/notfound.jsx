import React from 'react';
import { Button, Result } from 'antd';
const NotFound = () => (
    <Result
        status="404"
        title="404"
        subTitle="Oops! The page you're looking for doesn't exist."
        extra={<Button href='/' type="primary">Back Home</Button>}
    />
);
export default NotFound;