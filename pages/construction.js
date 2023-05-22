
import Ant from '../components/AntLayout';
import {Image} from 'antd';


// About Page
export default function Construction(){
  const headerContent = <h1>Under Construction</h1>;
  const pageContent = 
<div>
  <h1>
  This page is under construction. Check back later!
  </h1>
    <Image
    src="https://www.phoenix.gov/eodsite/SiteAssets/Pages/Site-Under-Construction/website-construction-graphic-4.jpg"
    preview={false}
/>

</div>
    return (
      <Ant header={headerContent} content={pageContent}/>
      )
        }