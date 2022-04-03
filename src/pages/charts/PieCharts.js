
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";

const data = [
  { name: "Group A", value: 50 }, 
  { name: "Group D", value: 500 }
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;

  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g >
      <text x={cx} y={cy} dy={6} textAnchor="middle" fill={fill} style={{display:"flex",alignItems: "center",justifyContent: "center"}}>
      {` ${(percent * 100).toFixed(2)}%`}
      </text>
      <Sector 
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={percent?"red":"green"}
      />
      {/* <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill="red"
      /> */}
      {/* <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      /> */}
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{` ${value.toFixed(2)}`}</text>
      {/* <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="red"
      >
        {` ${(percent * 100)}%`}
      </text> */}
    </g>
  );
};

export default function PieCharts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <PieChart width={70} height={70}>
      <Pie
      style={{border: '1px solid red'}}
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={30}
        cy={25}
        innerRadius={20}
        outerRadius={30}
        fill= "rgb( 206 206 207)"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
}
