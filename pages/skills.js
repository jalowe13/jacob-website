import Ant from '../components/AntLayout';

// ANT Components
// https://3x.ant.design/components/list/
import { Card, Icon, List, Avatar } from 'antd';

const { Meta } = Card;



export default function Resume(){
    const data = [
        {
            title: "C++",
            description: "Language"
        },
        {
            title: "C",
            description: "Language"
        },
    ];

    const headerContent = <h1> Skills </h1>
    const pageConent =
    <div>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>



return (
    <Ant header={headerContent} content={pageConent}/>
)
}
