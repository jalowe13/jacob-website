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
        <h1> Version 0.39.2 - A C++ and SDL2 2D Tileset Platformer Game Engine Prototype for Windows and Linux</h1>
        <Image src="https://github-production-user-asset-6210df.s3.amazonaws.com/40873986/296116161-6076ce3c-30f0-4893-b5cc-7411a1f83793.png"/>
        <h1>
            Windows Download: Extract and run the EXE to play!
        </h1>
        <Button type="primary" size="large" block="large" href="https://github.com/jalowe13/TheOneSDL/releases/download/v0.39.2/TheOneSDL_v0.39.2.zip">
            <GithubOutlined className="teamSocialIcon"/>
        </Button>
        <h1>
            Linux Download
        </h1>
        <Button type="primary" size="large" block="large" href="https://github.com/jalowe13/TheOneSDL/releases/download/v.0.25/TheOneSDL.v.0.25.LINUX.tar.gz">
            <GithubOutlined className="teamSocialIcon"/>
        </Button>
        <h1>
            Github Repository
        </h1>
        <Button type="primary" size="large" block="large" href="https://github.com/jalowe13/TheOneSDL">
            <GithubOutlined className="teamSocialIcon"/>
        </Button>
        <Card title={"Project Introduction"}>
        TheOneSDL is a prototype game engine made in SDL2. I made it for my game TheOneSDL, currently a 2D platformer.
        It runs on Windows and Linux. I wanted to show my ability to use the resources of SDL2 to create a game engine more or less from scratch.
        </Card>
        <Card title={"Features"}>
        Currently, in the game you can move the player character with A and D. You can also jump with the W key and sit with S.  There are also collision mechanics with the terrain.
        </Card>
        <Card title={"Getting Started"}>
        You can download the game from the links above for your specific operating system. To develop or make fixes to the game. You can click the GitHub Repository link and follow the README file.
        </Card>
        <Card title={"Documentation"}>
        The overall goal of the project the goal is to make a complete game from a scratch engine made from SDL2.
        The basics are required first to make a solid game. Window creation, Player Control, Animations, Physics, and Terrain Generation/Interactions are the basics needed for any game.
        This prototype has all basics implemented for Player control around a generated environment, with simple gravity physics with jumping.
        </Card>
        {/* <h1>Architecture with Method Breakdown</h1>
        <Card title={"Application"}>
        Main Window function
        </Card>
        <Card title={"Player"}>
        Player function
        </Card>
        <Card title={"Terrain"}>
        Terrain function
        </Card>
        <Card title={"Physics"}>
        Physics function
        </Card> */}
    </div>
    return(
        <Ant header={headerContent} content={completePageContent}/>
    )
}
