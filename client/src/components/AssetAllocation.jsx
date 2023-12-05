import React, {useState, useEffect} from "react";
import Chart from "react-apexcharts";
import axios from "axios";

function AssetAllocation(){
  const [labelData, setLabelData] = useState([]);
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pieChartDataRequest = (await axios.get("http://localhost:4000/pie-chart-data")).data;
        console.log("data: " + pieChartDataRequest);
        setLabelData(pieChartDataRequest["Label Data"]);
        setPriceData(pieChartDataRequest["Price Data"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  });
  
  const data = {
    options: {
      series: priceData,
      labels: labelData
    }
  };
  
  return (
    <div>
        <Chart options={ data.options } series={data.options.series } type="pie" width="30%"></Chart>
    </div>
  ) 
}

export default AssetAllocation;