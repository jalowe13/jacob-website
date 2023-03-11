import Ant from '../components/AntLayout';

// ANT Components
// https://3x.ant.design/components/list/
import { Card,Col,Row, Icon, List, Avatar } from 'antd';

const { Meta } = Card;



export default function Skills(){
  // Card data
    const data = [
        {
            title: "Python",
            description: "2 Years",
            src:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
            infosrc: "https://en.wikipedia.org/wiki/Python_(programming_language)"
        },
        {
            title: "C++",
            description: "5 Years",
            src:"https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
            infosrc:"https://en.wikipedia.org/wiki/C%2B%2B"
        },
        {
            title: "C",
            description: "2 Years",
            src:"https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg",
            infosrc:"https://en.wikipedia.org/wiki/C_(programming_language)"
        },
        {
            title: "Java",
            description: "2 Years",
            src:"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
            infosrc:"https://en.wikipedia.org/wiki/Java_%28programming_language%29"
        },
        {
            title: "Javascript",
            description:"2 Years",
            src:"https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png",
            infosrc:"https://en.wikipedia.org/wiki/JavaScript"
        },
        {
          title: "Shell and Batch scripting",
          description:"3 Years",
          src:"https://th.bing.com/th/id/OIP.Fz3xjZQvBRcONmwo2-JRaQHaHa?pid=ImgDet&rs=1",
          infosrc:"https://en.wikipedia.org/wiki/Shell_script"
        },
        {
          title: "Verilog",
          description:"2 Years",
          src:"https://mshr-h.gallerycdn.vsassets.io/extensions/mshr-h/veriloghdl/1.2.0/1592841382860/Microsoft.VisualStudio.Services.Icons.Default",
          infosrc:"https://en.wikipedia.org/wiki/Verilog"
        },
        {
            title: "HTML with CSS",
            description:"1 Year",
            src:"https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
            infosrc:"https://en.wikipedia.org/wiki/HTML"
        },
        {
            title: "Node.js",
            description:"Currently learning",
            src:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
            infosrc:"https://en.wikipedia.org/wiki/Node.js"
        },
        {
          title: "MIPS Assembly",
          description:"1 Year",
          src:"https://muqtadaa.github.io/images/mipsIcon.png",
          infosrc:"https://en.wikipedia.org/wiki/MIPS_architecture"
        },
        {
          title: "React.js",
          description:"Currently learning",
          src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
          infosrc:"https://en.wikipedia.org/wiki/React_(JavaScript_library)"
        },
        {
            title: "QT",
            description:"1 Years",
            src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg",
            infosrc:"https://en.wikipedia.org/wiki/Qt_(software)"
        },


        
    ];



    let completePageContent = [];

    // Outercard
    let outerCard = (
      <div>
        <Card title={"Languages and Frameworks"}>
        Ordered by level of comfort. These are my studied coding languages, frameworks, and environments during my time in university working on projects, research, and outside learning/development.
        </Card>
      </div>
    )
    completePageContent.push(outerCard);

    // Innercards
    let innerCards = [];

    for (let i = 0; i < data.length; i++){
      let item = data[i]; //grab item
      // Put item into new card
      let card = (
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card title={item.title} extra={<a href={item.infosrc}>More</a>} 
          cover={
            <img
            src={item.src}
            height={400}
          />
          }
          >
            <p>{item.description}</p>
          </Card>
        </Col>
      );
      innerCards.push(card);
    }

    // Wrap all innerCards onto the outerCard

    let row = (
      <Row gutter={16}>
        {innerCards}
      </Row>
    );

    completePageContent.push(row);
    
    const headerContent = <h1>Skills </h1>
    





return (
    <Ant header={headerContent} content={completePageContent}/>
)
}
