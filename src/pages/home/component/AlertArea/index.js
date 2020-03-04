import React, { useState, useEffect, useCallback } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/frozen";
// import am4themes_themes/dataviz.js from "@amcharts/amcharts4/themes/themes/dataviz.js";
import { List, NoticeBar } from "antd-mobile";
import { getSubAgentListAsync } from "../../../../common/api";

// import 'react-vis/dis/styles/legends'
import "antd-mobile/dist/antd-mobile.css";
import "./index.scss";
import "../../../../style.css";

import { Treemap } from "react-vis";

function Home() {
  const [chartData, setChartData] = useState();
  useEffect(() => {
    chartInint();
  }, []);
  const chartInint = useCallback(() => {
    /* Chart code */

    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end
    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.RadarChart);
    // Add data
    chart.data = [
      { category: "死亡", value: 1, full: 100 },
      { category: "解除隔離", value: 12, full: 100 },
      { category: "確診", value: 42, full: 100 }
    ];
    // Make chart not full circle
    chart.startAngle = -90;
    chart.endAngle = 180;
    chart.innerRadius = am4core.percent(25);
    // Set number format
    chart.numberFormatter.numberFormat = "#.#'人'";
    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.fontWeight = 500;
    categoryAxis.renderer.labels.template.adapter.add("fill", function(
      fill,
      target
    ) {
      console.log(fill);
      return target.dataItem.index >= 0
        ? chart.colors.getIndex(target.dataItem.index)
        : fill;
    });
    categoryAxis.renderer.minGridDistance = 10;
    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    //設定最大值剛好填滿
    valueAxis.max = 42;
    valueAxis.strictMinMax = false;
    // Create series
    let series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = "full";
    series1.dataFields.categoryY = "category";
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    series1.columns.template.fillOpacity = 0.08;
    series1.columns.template.cornerRadiusTopLeft = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;
    let series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = "value";
    series2.dataFields.categoryY = "category";
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series2.columns.template.radarColumn.cornerRadius = 20;
    series2.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
    // Add cursor
    chart.cursor = new am4charts.RadarCursor();
  }, []);

  return (
    <>
      <div className="alertArea">
        <div className="alertAreaWrapper">
          <div className="solidGaugeCt">
            <div className="title">Taiwan</div>
            <div className="chartWrapper">
              <div
                className="gaugeChart"
                id="chartdiv"
                // style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="lineChartCt">
            <div className="infectedCt">🇹🇼</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
