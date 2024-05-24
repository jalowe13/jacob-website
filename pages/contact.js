
import Ant from '../components/AntLayout';
import React from 'react';
import { Descriptions, Button} from "antd";
import { GithubOutlined, LinkedinOutlined} from '@ant-design/icons';

// About Page
export default class Contact extends React.Component{
  render() {
    const headerContent = <h1>Contact Me</h1>;
    const pageContent = (
    <div>
    <Descriptions title="Jacob Lowe" layout="vertical" bordered>
      <Descriptions.Item label="Programer"> Backend developer</Descriptions.Item>
      <Descriptions.Item label="Phone Number"> 828-337-0053 </Descriptions.Item>
      <Descriptions.Item label="Email"> jalowe13@gmail.com </Descriptions.Item>
    </Descriptions>

    <h1>
      If you have any questions please don't hesitate to contact me!
    </h1>

    <h1>
      Github    
    </h1>
    <Button type="primary" size="large" block="large" href="https://github.com/jalowe13">
      <GithubOutlined className="teamSocialIcon"/>
    </Button>
    <h1>
      LinkedIn
    </h1>
    <Button type="primary" size="large" block="large" href="https://www.linkedin.com/in/jacobplowe/">
      <LinkedinOutlined className="teamSocialIcon"/>
    </Button>
    </div>
    );
     return this.props.renderHeader ? headerContent : pageContent;
  }
}
