import React, { useState, useEffect, useCallback, useMemo } from "react"
import {Button, WhiteSpace, WingBlank, Flex, List} from 'antd-mobile';
import {  getSubAgentListAsync } from "./api"

// import 'react-vis/dis/styles/legends'
import 'antd-mobile/dist/antd-mobile.css';
import "./style.css"

import {Treemap} from 'react-vis';

import './App.scss';
import { request } from 'http';

function App() {
  const [myData, setMyData] = useState([])
  useEffect(() => {
    // getAgentList()
    setMyData([{
      title: "全球",
      children: [
        {
          title: "亞洲",
          color: '#ef948e',
          children: [
            {title: "中國大陸",  size: Math.sqrt(44729)*5, color: '#ef948e', confirmed: 44729, deaths: 1114},
            {title: "日本",  size: Math.sqrt(203)*10, color: '#ef948e', confirmed: 203, deaths: 0},
            {title: "新加坡", size: Math.sqrt(47)*10, color: '#ef948e', confirmed: 47, deaths: 0},
            {title: "泰國",  size: Math.sqrt(32)*10, color: '#ef948e', confirmed: 32, deaths: 0},
            {title: "南韓", size: Math.sqrt(28)*10, color: '#ef948e', confirmed: 28, deaths: 0},
            {title: "馬來西亞", size: Math.sqrt(18)*10, color: '#ef948e', confirmed: 18, deaths: 0},
            {title: "台灣", size: Math.sqrt(18)*10, color: '#ef948e', confirmed: 18, deaths: 0},
            {title: "越南", size: Math.sqrt(15)*10, color: '#ef948e', confirmed: 15, deaths: 0},
            {title: "阿聯猶", size: Math.sqrt(8)*10, color: '#ef948e', confirmed: 8, deaths: 0},
            {title: "印度", size: Math.sqrt(3)*10, color: '#ef948e', confirmed: 3, deaths: 0},
            {title: "菲律賓", size: Math.sqrt(3)*10, color: '#ef948e', confirmed: 3, deaths: 0},
            {title: "尼泊爾",  size: Math.sqrt(1)*10, color: '#ef948e', confirmed: 1, deaths: 0},
            {title: "柬埔寨", size: Math.sqrt(1)*10, color: '#ef948e', confirmed: 1, deaths: 0},
            {title: "斯里蘭卡", size: Math.sqrt(1)*10, color: '#ef948e', confirmed: 1, deaths: 0},
          ]
        },{
          title: "歐洲",
          color: '#43d2ab',
          children: [
            {title: "德國",  size: Math.sqrt(10)*10, color: '#43d2ab', confirmed: 14, deaths: 0},
            {title: "法國",  size: Math.sqrt(6)*10, color: '#43d2ab', confirmed: 11, deaths: 0},
            {title: "英國",  size: Math.sqrt(2)*10, color: '#43d2ab', confirmed: 8, deaths: 0},
            {title: "義大利",  size: Math.sqrt(2)*10, color: '#43d2ab', confirmed: 3, deaths: 0},
            {title: "俄羅斯",  size: Math.sqrt(2)*10, color: '#43d2ab', confirmed: 2, deaths: 0},
            {title: "西班牙",  size: Math.sqrt(1)*10, color: '#43d2ab', confirmed: 2, deaths: 0},
            {title: "芬蘭",  size: Math.sqrt(1)*10, color: '#43d2ab', confirmed: 1, deaths: 0},
            {title: "瑞典",  size: Math.sqrt(1)*10, color: '#43d2ab', confirmed: 1, deaths: 0},
            {title: "比利時",  size: Math.sqrt(1)*10, color: '#43d2ab', confirmed: 1, deaths: 0},
          ]
        },{
          title: "北美洲",
          color: '#cd99c8',
          children: [
            {title: "美國",  size: Math.sqrt(11)*10, color: '#cd99c8', confirmed: 13, deaths: 0},
            {title: "加拿大",  size: Math.sqrt(4)*10, color: '#cd99c8', confirmed: 7, deaths: 0},
          ]
        },{
          title: "大洋洲",
          color: '#f7b666',
          children: [
            {title: "澳洲",  size: Math.sqrt(11)*10, color: '#f7b666', confirmed: 15, deaths: 0},
          ]
        },
      ]
  
    }])
    getSubAgentList()
  }, [])

  const getSubAgentList = useCallback(
    params => {
      let domData;
      getSubAgentListAsync({}).then(res => {
        console.log(res)
        // domData = new DOMParser().parseFromString(res.data, "text/xml");
        
        // console.log(domData)
        // console.log(res.data)
      })
    },
    []
  )



console.log(document.body.clientWidth)
console.log(document.body.clientHeight)


  return (
    <div className="App">
      <header className="App-header">
      <div className="header-bar">
        <span style={{color: '#404040'}}>H</span> <span style={{color: '#d8d8d8'}}>|</span> <span style={{color: '#404040'}}>武漢肺炎</span>
      </div>
      <div>
      {
        myData.length > 0 && myData[0].children.map((state, index)=>{
          const eachState = state.children.map((country, cIndex) => (
            <List.Item 
              key={cIndex}
              extra={`${country.confirmed}`}
            >
              🇹🇼 {country.title}
              </List.Item>
          ))
          
          const stateDom = <List style={{margin: '5px 0', backgroundColor: 'white'}} key={`dom${index}`}>
            {eachState}
          </List>;
          const stateName = <List style={{margin: '5px 0', backgroundColor: state.color}} className="stateRow" key={index}>
            <List.Item 
              extra="確診人數"
            >
              {state.title}
              </List.Item>      
          </List> ;
          // const stateName = <div className="sub-title" key={index}>
          //   <div>
          //     <Button inline size="small">{state.title}</Button>
          //   </div>
          //   <div>
          //     <Button inline size="small">確診人數</Button>
          //   </div>        
          // </div> ;

          return [stateName].concat(stateDom)
        })
      }
      {/* <div className="sub-title">亞洲</div>
      <List style={{margin: '5px 0', backgroundColor: 'white'}}>
        <List.Item
          extra={<Button type="ghost" size="small" inline>23232</Button>}
          multipleLine>
          🇨🇳中國大陸
          <List.Item.Brief>死亡：xxxx人</List.Item.Brief>
          </List.Item>
      </List> */}
      <Treemap
        title={'My first Treemap'}
        className='myTreeMap'
        
        // colorDomain={[0,1,2]}
        // colorRange={["white", "black"]}
        colorType="literal"

        width={document.body.clientWidth}
        height={document.body.clientHeight}
        padding={0}
        margin={0}
        data={myData[0]}
        // colorDomain={"Red"}
        
        renderMode='DOM'
        style={ {border: 'thin solid #ddd'}}
        />
      </div>
      </header>
      
    </div>
  );
}

export default App;
