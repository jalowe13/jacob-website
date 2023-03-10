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
            src:"https://www.kindpng.com/picc/m/198-1984828_java-icon-transparent-hd-png-download.png",
            infosrc:"https://en.wikipedia.org/wiki/Java_%28programming_language%29"
        },
        {
            title: "Javascript",
            description:"2 Years",
            src:"https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png",
            infosrc:"https://en.wikipedia.org/wiki/JavaScript"
        },
        {
          title: "Shell and Batch Scripting",
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
        {
            title: "OOP",
            description:"Object Oriented Programming: 5 Years",
            src:"https://cdn1.iconfinder.com/data/icons/programming-89/32/object_oriented_programming_coding_oop_objects_computer_science-1024.png",
            infosrc:"https://en.wikipedia.org/wiki/Object-oriented_programming"
        },
        {
            title: "Applied Software Design",
            description:"5 Years",
            src:"https://carbonreduction.eu/assets/images/010-monitor-1-512x512.png",
            infosrc:"https://en.wikipedia.org/wiki/Software_design"
        },
        {
            title: "Artificial Intelligence",
            description:"1 Year",
            src:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Anatomy-1751201_1280.png",
            infosrc:"https://en.wikipedia.org/wiki/Artificial_intelligence"
        },
        {
            title: "Machine Learning",
            description:"1 Year",
            src:"https://i1.wp.com/clayandmilk.com/wp-content/uploads/2017/10/MachineLearning.jpg?ssl=1",
            infosrc:"https://en.wikipedia.org/wiki/Machine_learning"
        },
        {
            title: "Computer Vision",
            description:"1 Year",
            src:"https://upload.wikimedia.org/wikipedia/commons/2/2d/Intersection_over_Union_-_object_detection_bounding_boxes.jpg",
            infosrc:"https://en.wikipedia.org/wiki/Computer_vision"
        },
        {
            title: "Github Version Control",
            description:"5 Years",
            src:"https://www.edopedia.com/assets/images/static/on_campus_workshops/git_and_github_version_control_system_1_1.jpg",
            infosrc:"https://en.wikipedia.org/wiki/Version_control"
        },
        {
            title: "Video Game Design",
            description:"3 Years",
            src:"https://th.bing.com/th/id/OIP.aVivgQYEZDyOUGUl8r8L1QHaHa?pid=ImgDet&rs=1",
            infosrc:"https://en.wikipedia.org/wiki/Video_game_design"
        },
        {
            title: "RTOS",
            description:" Real Time Operating Systems: 1 Year",
            src:"https://www.pngkey.com/png/detail/509-5091578_real-time-icon-png-real-time-monitoring-icon.png",
            infosrc:"https://en.wikipedia.org/wiki/Real-time_operating_system"
        },
        {
            title: "Computer Architecture",
            description:"1 Year",
            src:"https://static.vecteezy.com/system/resources/previews/000/424/635/original/processor-icon-vector-illustration.jpg",
            infosrc:"https://en.wikipedia.org/wiki/Computer_architecture"
        },
        {
            title: "Digital Systems",
            description:"1 Year",
            src:"https://wallpapercave.com/wp/wp3215342.jpg",
            infosrc:"https://en.wikipedia.org/wiki/Digital_electronics"
        },


        
    ];

    // Function - createRow
    // Creates array of inner cards to attach to an outer card and attached to a row
    // Params
    // min - Card starting
    // max - Card ending
    // Returns a row of cards

    function createRow(min, max){
      let innerCards = [];
      for (let i = min; i < max; i++){
        let item = data[i]; //grab item
        // Put item into new card
        let card = (
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card title={item.title} extra={<a href={item.infosrc}>More</a>} 
            cover={
              <img
              src={item.src}
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
    
      return row;
    }

    

    let completePageContent = [];

    // Languages OutterCard
    let outerCard = (
      <div>
        <Card title={"Languages and Frameworks"}>
        Ordered by level of comfort. These are my studied coding languages, frameworks, and environments during my time in university working on projects, research, and outside learning/development.
        </Card>
      </div>
    )
    let outerCard2 = (
      <div>
        <Card title={"Topics"}>
        Studied concepts and topics
        </Card>
      </div>
    )
    completePageContent.push(outerCard);

    // Innercards
    // Cards 0-12 are the Languages and frameworks
    let row = createRow(0,12); // Create first inner cards
    completePageContent.push(row);

    completePageContent.push(outerCard2);

    // Innercards
    // Cards 0-12 are the Languages and frameworks
    let row2 = createRow(12,22); // Create first inner cards
    completePageContent.push(row2);
    
    const headerContent = <h1>Skills </h1>
    





return (
    <Ant header={headerContent} content={completePageContent}/>
)
}
