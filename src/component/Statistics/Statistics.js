import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const dataLoad = useLoaderData();
  const data = dataLoad.data;
  //console.log(data);
  return (
    <div className="mt-5 d-flex justify-content-center ">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
        <Bar dataKey="id" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Statistics;
