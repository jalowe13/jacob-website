import Ant from '../components/AntLayout'
import { Button} from "antd";
import { GithubOutlined} from '@ant-design/icons';
import { Card} from 'antd';
const { Meta } = Card;

export default function Current(){
    const data = [
        {

        }
    ]
    const headerContent = <h1>Current Project: TheOneSDL</h1>
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
        <Button type="primary" size="large" block="large" href="https://github.com/jalowe13">
            <GithubOutlined className="teamSocialIcon"/>
        </Button>
    </div>
    return(
        <Ant header={headerContent} content={completePageContent}/>
    )
}