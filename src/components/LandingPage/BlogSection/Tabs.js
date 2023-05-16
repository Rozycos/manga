import React, { useState } from "react";
import BlogSectionTabs from "./AllTabs/BlogTabs/BlogSectionTabs";
import TabContent from "./V2/TabContent";
import TabNavItem from "./V2/TabNavItem";


const Tabs = () => {
    const [activeTab, setActiveTab] = useState("comedy");
   
    return (
      <div className="tabs">
        <ul className="tabs__nav">
          <TabNavItem title="comedy" id="comedy" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="fantasy" id="fantasy" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="drama" id="drama" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="action" id="action" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="military" id="military" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </ul>
   
        <div className="outlet blog__category--outlet">
            <TabContent id="comedy" activeTab={activeTab}>
                <BlogSectionTabs category={"comedy"}/>
            </TabContent>
            <TabContent id="fantasy" activeTab={activeTab}>
                <BlogSectionTabs category={"fantasy"}/>
            </TabContent>
            <TabContent id="drama" activeTab={activeTab}>
                <BlogSectionTabs category={"drama"}/>
            </TabContent>
            <TabContent id="action" activeTab={activeTab}>
                <BlogSectionTabs category={"action"}/>
            </TabContent>
            <TabContent id="military" activeTab={activeTab}>
                <BlogSectionTabs category={"military"}/>
            </TabContent>
        </div>
      </div>
    );
  };
   
  export default Tabs;