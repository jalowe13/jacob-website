import Ant from '../components/AntLayout'
import { Button} from "antd";
import { GithubOutlined} from '@ant-design/icons';
import { Card} from 'antd';

export default function Aero(){
    const headerContent = <h1>The Aerospace Corperation and Virginia Tech: Coral Jam</h1>
    const completePageContent =
    <div>
        <Card title={"Project Introduction"}>
        TBD
        </Card>
        <Card title={"Features"}>
        TBD
        </Card>
        <Card title={"Architecture"}>
        TBD
        </Card>
        <Card title={"Getting Started"}>
        TBD
        </Card>
        <Card title={"Documentation"}>
        TBD
        </Card>
        <h1>
            Github Repository
        </h1>
    </div>
    return(
        <Ant header={headerContent} content={completePageContent}/>
    )
}