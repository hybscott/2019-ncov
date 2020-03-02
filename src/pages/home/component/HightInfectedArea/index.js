import React, { useState, useEffect, useCallback } from "react"
import {List, NoticeBar} from 'antd-mobile';
import {  getSubAgentListAsync } from "../../../../common/api"

// import 'react-vis/dis/styles/legends'
import 'antd-mobile/dist/antd-mobile.css';
import "./index.scss"
import "../../../../style.css"

import {Treemap} from 'react-vis';

function Home() {
  const [myData, setMyData] = useState([])
  const [infectAreaData, setInfectAreaData] = useState([])
  useEffect(() => {
    setMyData([{
      title: "全球",
      children: [
        {
          title: "入境地區/國家",
          color: '#ef948e',
          children: [
            {title: "中國大陸武漢市",  date: '2020/xx/xx', url: 'https://ppt.cc/fpDGLx', note: '留意自身健康10天'},
          ]
        }
      ]
  
    }])
    setInfectAreaData([{
      title: "全球",
      children: [
        {
          title: "入境地區/國家",
          color: '#ef948e',
          children: [
            {title: "中國大陸武漢市",  date: '2020/01/xx', url: 'https://ppt.cc/fpDGLx', note: '留意自身健康10天'},
          ]
        }
      ]
  
    }])
  }, [])

  return (
    <div className="Home">
      <header className="App-header">
      <div className="header-bar">
        <span style={{color: '#404040'}}>H</span> <span style={{color: '#d8d8d8'}}>| </span> 
        <span style={{color: '#404040'}}>入境須檢疫地區/國家</span>
      </div>

      <div>
        {
          myData.length > 0 && myData[0].children.map((state, index)=>{
            const eachState = state.children.map((country, cIndex) => (
              <List.Item 
                key={cIndex}
                extra={`${country.date}`}
              >
              <span role="img">🇹🇼</span> {country.title}
                </List.Item>
            ))
            
            const stateDom = <List style={{margin: '5px 0', backgroundColor: 'white'}} key={`dom${index}`}>
              {eachState}
            </List>;
            const stateName = <List style={{margin: '5px 0', backgroundColor: state.color}} className="stateRow" key={index}>
              <List.Item 
                extra="開始日期"
              >
                {state.title}
                </List.Item>      
            </List> ;
            return [stateName].concat(stateDom)
          })
        }
      </div>
      <h3 style={{color: 'black', marginLeft: '15px'}}>疫情摘要</h3>
      <div>
        {
          infectAreaData.length > 0 && infectAreaData[0].children.map((state, index)=>{
            const eachState = state.children.map((country, cIndex) => (
              <List.Item 
                key={cIndex}
                extra={`${country.date}`}
              >
              <span role="img">🇹🇼</span> {country.title}
                </List.Item>
            ))
            
            const stateDom = <List style={{margin: '5px 0', backgroundColor: 'white'}} key={`dom${index}`}>
              {eachState}
            </List>;
            const stateName = <List style={{margin: '5px 0', backgroundColor: state.color}} className="stateRow" key={index}>
              <List.Item 
                extra="開始日期"
              >
                {state.title}
                </List.Item>      
            </List> ;
            return [stateName].concat(stateDom)
          })
        }
      </div>
      </header>
      
    </div>
  );
}

export default Home;
