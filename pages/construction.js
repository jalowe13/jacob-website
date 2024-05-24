
import Ant from '../components/AntLayout';
import React from 'react';
import {Image} from 'antd';


// About Page
export default class Construction extends React.Component {
  render() {
    const headerContent = <h1>Under Construction</h1>;
    const pageContent = (
      <div>
        <h1>
          This page is under construction. Check back later!
        </h1>
        <Image
          src="https://www.phoenix.gov/eodsite/SiteAssets/Pages/Site-Under-Construction/website-construction-graphic-4.jpg"
          preview={false}
        />
      </div>
    );

    return this.props.renderHeader ? headerContent : pageContent;
  }
}