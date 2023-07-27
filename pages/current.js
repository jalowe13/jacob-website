import Ant from '../components/AntLayout'
import { Button} from "antd";
import { GithubOutlined} from '@ant-design/icons';
import { Card, Image} from 'antd';
const { Meta } = Card;

export default function Current(){
    const data = [
        {

        }
    ]
    const headerContent = <h1>Current Project: TheOneSDL</h1>
    const completePageContent =
    <div>
        {/* <Card title={"Project Introduction"}>
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
        </Card> */}
        <h1> Version 0.24 - A C++ and SDL2 2D Tileset Platformer Game Engine Prototype for Windows and Linux</h1>
        <Image src="https://github-production-user-asset-6210df.s3.amazonaws.com/40873986/256396087-af2e8d4f-2f06-4718-b3a8-ababbb7e386b.png"/>
        <h1>
            Windows Download: Extract and run the EXE to play!
        </h1>
        <Button type="primary" size="large" block="large" href="https://github.com/jalowe13/TheOneSDL/releases/download/v.0.24/TheOneSDL.v.0.24.WIN.zip">
            <GithubOutlined className="teamSocialIcon"/>
        </Button>
        <h1>
            Linux Download
        </h1>
        <Button type="primary" size="large" block="large" href="https://github.com/jalowe13/TheOneSDL/releases/download/v.0.24/TheOneSDL.v.0.24.LINUX.tar.gz">
            <GithubOutlined className="teamSocialIcon"/>
        </Button>
        <h1>
            Github Repository
        </h1>
        <Button type="primary" size="large" block="large" href="https://github.com/jalowe13/TheOneSDL">
            <GithubOutlined className="teamSocialIcon"/>
        </Button>
    </div>
    return(
        <Ant header={headerContent} content={completePageContent}/>
    )
}