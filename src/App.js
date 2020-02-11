import React, { useState, useEffect, useCallback, useMemo } from "react"
import {  getSubAgentListAsync } from "./api"

// import 'react-vis/dis/styles/legends'
import "./style.css"

import {Treemap} from 'react-vis';

import './App.css';
import { request } from 'http';

function App() {
  const [myData, setMyData] = useState("")
  useEffect(() => {
    // getAgentList()
    setMyData({
      title: "全球",
      children: [
        {
          title: "亞洲",
          // color: [0,1],
          // color: "red",
          children: [
            {title: "中國大陸",  size: Math.sqrt(17228)*10, color: '#ef948e'},
            {title: "日本",  size: Math.sqrt(20)*10, color: '#ef948e'},
            {title: "新加坡", size: Math.sqrt(18)*10, color: '#ef948e'},
            {title: "泰國",  size: Math.sqrt(19)*10, color: '#ef948e'},
            {title: "南韓", size: Math.sqrt(15)*10, color: '#ef948e'},
            {title: "馬來西亞", size: Math.sqrt(8)*10, color: '#ef948e'},
            {title: "越南", size: Math.sqrt(8)*10, color: '#ef948e'},
            {title: "阿聯猶", size: Math.sqrt(12)*10, color: '#ef948e'},
            {title: "印度", size: Math.sqrt(3)*10, color: '#ef948e'},
            {title: "菲律賓", size: Math.sqrt(2)*10, color: '#ef948e'},
            {title: "尼泊爾",  size: Math.sqrt(1)*10, color: '#ef948e'},
            {title: "柬埔寨", size: Math.sqrt(1)*10, color: '#ef948e'},
            {title: "斯里蘭卡", size: Math.sqrt(1)*10, color: '#ef948e'},
          ]
        },{
          title: "歐洲",
          children: [
            {title: "德國",  size: Math.sqrt(10)*10, color: '#43d2ab'},
            {title: "法國",  size: Math.sqrt(6)*10, color: '#43d2ab'},
            {title: "英國",  size: Math.sqrt(2)*10, color: '#43d2ab'},
            {title: "義大利",  size: Math.sqrt(2)*10, color: '#43d2ab'},
            {title: "俄羅斯",  size: Math.sqrt(2)*10, color: '#43d2ab'},
            {title: "西班牙",  size: Math.sqrt(1)*10, color: '#43d2ab'},
            {title: "芬蘭",  size: Math.sqrt(1)*10, color: '#43d2ab'},
            {title: "瑞典",  size: Math.sqrt(1)*10, color: '#43d2ab'},
            {title: "比利時",  size: Math.sqrt(1)*10, color: '#43d2ab'},
          ]
        },{
          title: "北美洲",
          children: [
            {title: "美國",  size: Math.sqrt(11)*10, color: '#cd99c8'},
            {title: "加拿大",  size: Math.sqrt(4)*10, color: '#cd99c8'},
          ]
        },{
          title: "大洋洲",
          children: [
            {title: "澳洲",  size: Math.sqrt(11)*10, color: '#f7b666'},
          ]
        },
      ]
  
    })
    getSubAgentList()
  }, [])

  const getSubAgentList = useCallback(
    params => {
      let domData;
      getSubAgentListAsync({}).then(res => {
        console.log(res)
        domData = new DOMParser().parseFromString(res.data, "text/xml");
        
        // console.log(domData)
        // console.log(res.data)
      })
    },
    []
  )

  

  const style = {

  }

console.log(document.body.clientWidth)
console.log(document.body.clientHeight)


  return (
    <div className="App">
      <header className="App-header">
        <Treemap
        title={'My first Treemap'}
        // className='nested-tree-example'
        
        // colorDomain={[0,1,2]}
        // colorRange={["white", "black"]}
        colorType="literal"

        width={document.body.clientWidth}
        height={document.body.clientHeight}
        // height={document.body.clientWidth}
        padding={0}
        margin={0}
        data={myData}
        // colorDomain={"Red"}
        
        renderMode='DOM'
        style={ {border: 'thin solid #ddd'}}
        />
      </header>
    </div>
  );
}

export default App;
