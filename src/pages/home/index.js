import React, { useState } from "react"
import {TabBar, Icon} from 'antd-mobile';

import Convira from './component/convira'
import HightInfectedArea from './component/HightInfectedArea'
import 'antd-mobile/dist/antd-mobile.css';
import "./index.scss"

function Home() {
  const [selectTab, setSelectTab] = useState("highInfectedAreas")

  return (
    <div className="Home">
      <div className="tabContent" style={{position: 'fixed', height: '100%', width: '100%', top: 0}}>
        <TabBar className="tabBar" unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white">
          <TabBar.Item
            title="新冠確診"
            key="convira"
            selected={selectTab === "convira"}
            icon={<Icon type={'right'}/>}
            selectedIcon={<Icon type={'right'}/>}
            onPress={() => {
              setSelectTab("convira")
            }}
          >
            <Convira />
          </TabBar.Item>
          <TabBar.Item
            title="檢疫地區"
            key="highInfectedAreas"
            selected={selectTab === "highInfectedAreas"}
            icon={<Icon type={'cross-circle-o'}/>}
            selectedIcon={<Icon type={'cross-circle-o'}/>}
            onPress={() => {
              setSelectTab("highInfectedAreas")
            }}
          >
            <HightInfectedArea />
          </TabBar.Item>
          <TabBar.Item
            title="旅遊燈號"
            key="travelAlert"
            selected={selectTab === "travelAlert"}
            icon={<Icon type={'ellipsis'}/>}
            selectedIcon={<Icon type={'ellipsis'}/>}
            onPress={() => {
              setSelectTab("travelAlert")
            }}
          >
            travelAlert tab data
          </TabBar.Item>

        </TabBar>
      </div>
      
    </div>
  );
}

export default Home;
