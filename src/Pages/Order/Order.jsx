import { Helmet } from "react-helmet-async";
import Cover from "../.././Shared/Cover/Cover";
import orderImg from "../.././assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import './Order.css';
import Foodcart from "../../components/Foodcart/Foodcart";

import img1 from '../.././assets/menu/dessert-bg.jpeg';
import img2 from '../.././assets/menu/banner3.jpg';
import img3 from '../.././assets/menu/pizza-bg.jpg';
import img4 from '../.././assets/menu/salad-bg.jpg';
import img5 from '../.././assets/menu/soup-bg.jpg';

const Order = () => {

const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <Helmet>
            <title>Restaurant | Order Now </title>
            </Helmet>
            <Cover
            img={orderImg}
            title={"Order Food"}
            ></Cover>
          {/* tabs section starts */}
            <Tabs defaultIndex={tabIndex} onSelect={(index) =>  setTabIndex(index)}>
            <TabList>
              <Tab>SALAD</Tab>
              <Tab>PIZZA</Tab>
              <Tab>SOUPS</Tab>
              <Tab>DESSERTS</Tab>
              <Tab>DRINKS</Tab>
            </TabList>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
          {/* tabs section ends */}
            <div className="grid gap-8  grid-rows-2 grid-flow-col mx-10 my-10 ">

           <Foodcart
           img={img1}
           title1={"DESSERTS"}
           title2={"Order Now"}
           ></Foodcart>
           
           <Foodcart 
           img={img3}
           title1={"PIZZA"}
           title2={"Order Now"}
           ></Foodcart>


           <Foodcart
           img={img4}
           title1={"SALAD"}
           title2={"Order Now"}
           ></Foodcart>


           <Foodcart
           img={img5}
           title1={"SOUPS"}
           title2={"Order Now"}
           ></Foodcart>


           <Foodcart
           img={img2}
           title1={"DRINKS"}
           title2={"Order Now"}
           ></Foodcart>
          
           </div>
        </div>
    );
};

export default Order;