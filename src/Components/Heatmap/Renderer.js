import { useMemo } from "react";
import * as d3 from "d3";
import {  colorSecSchema } from "./colorSchema";

const MARGIN = { top: 10, right: 10, bottom: 30, left: 30 };

export const Renderer = (props) => {
  // The bounds (=area inside the axis) is calculated by substracting the margins

  const { width, height, data, setHoveredCell } = props;

  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // groups
  const allYGroups = useMemo(() => [...new Set(data.map((d) => d.y))], [data]);
  const allXGroups = useMemo(() => [...new Set(data.map((d) => d.x))], [data]);

  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .range([0, boundsWidth])
      .domain(allXGroups)
      .padding(0.01);
  }, [data, width]);

  const yScale = useMemo(() => {
    return d3
      .scaleBand()
      .range([boundsHeight, 0])
      .domain(allYGroups)
      .padding(0.01);
  }, [data, height]);

  // function tempMap(value) {
  //   if (value >= 0 && value < 5) return colorSchema["0"];
  //   else if (value >= 5 && value < 10) return colorSchema["10"];
  //   else if (value >= 10 && value < 12) return colorSchema["12"];
  //   else if (value >= 12 && value < 15) return colorSchema["15"];
  //   else if (value >= 15 && value < 18) return colorSchema["18"];
  //   else if (value >= 18 && value < 20) return colorSchema["20"];
  //   else if (value >= 20 && value < 22) return colorSchema["22"];
  //   else if (value >= 22 && value < 28) return colorSchema["28"];
  //   else if (value >= 28 && value < 32) return colorSchema["32"];
  //   else if (value >= 32 && value < 39) return colorSchema["39"];
  //   else if (value >= 39 && value < 45) return colorSchema["45"];
  //   else if (value >= 45 && value < 55) return colorSchema["55"];
  //   else if (value >= 55 && value < 60) return colorSchema["60"];
  //   else if (value >= 60 && value < 80) return colorSchema["80"];
  //   else if (value >= 80 && value < 100) return colorSchema["100"];
  //   else if (value >= 100 && value < 130) return colorSchema["130"];
  //   else if (value >= 130 && value < 180) return colorSchema["180"];
  //   else if (value >= 180 && value < 230) return colorSchema["230"];
  //   else if (value >= 230 && value < 280) return colorSchema["280"];
  //   else if (value >= 280 && value < 350) return colorSchema["350"];
  //   else if (value >= 350 && value < 400) return colorSchema["400"];
  //   else if (value >= 400 && value < 450) return colorSchema["450"];
  //   else if (value >= 450 && value < 500) return colorSchema["500"];
  //   else if (value >= 500 && value < 550) return colorSchema["550"];
  //   else if (value >= 550 && value < 600) return colorSchema["600"];
  //   else if (value >= 600 && value < 650) return colorSchema["600"];
  //   else return "#222";
  // }

  function tempSecMap(value) {
    if (value >= 0 && value < 40) return colorSecSchema["1"];
    else if (value >= 40 && value < 80) return colorSecSchema["2"];
    else if (value >= 80 && value < 120) return colorSecSchema["3"];
    else if (value >= 120 && value < 160) return colorSecSchema["4"];
    else if (value >= 160 && value < 200) return colorSecSchema["5"];
    else if (value >= 200 && value < 240) return colorSecSchema["6"];
    else if (value >= 240 && value < 280) return colorSecSchema["7"];
    else if (value >= 280 && value < 320) return colorSecSchema["8"];
    else if (value >= 320 && value < 360) return colorSecSchema["9"];
    else if (value >= 360 && value < 400) return colorSecSchema["10"];
    else if (value >= 400 && value < 440) return colorSecSchema["11"];
    else if (value >= 440 && value < 480) return colorSecSchema["12"];
    else if (value >= 480 && value < 520) return colorSecSchema["13"];
    else if (value >= 520 && value < 560) return colorSecSchema["14"];
    else if (value >= 560 && value < 600) return colorSecSchema["15"];
    else return "#222";
  }

  const allShapes = data.map((d, i) => {
    const color = tempSecMap(d.Temperature);
    if (d.value === null) {
      return;
    }
    return (
      <rect
        key={i}
        r={4}
        x={xScale(d.y)}
        y={yScale(d.x)}
        width={xScale.bandwidth()}
        height={yScale.bandwidth()}
        opacity={1}
        fill={color}
        rx={5}
        onMouseEnter={(e) => {
          setHoveredCell({
            xLabel: d.x,
            yLabel: d.y,
            // xPos: xScale(d.x) + xScale.bandwidth() + MARGIN.left, // todo, is it the best way?
            // yPos: yScale(d.y) + xScale.bandwidth() / 2 + MARGIN.top,
            xPos:e.pageX -800, // todo, is it the best way?
            yPos: e.pageY -300,
            value: d.Temperature,
          });
        }}
        onMouseLeave={() => setHoveredCell(null)}
      />
    );
  });

  const xLabels = allXGroups.map((name, i) => {
    return (
      <text
        key={i}
        x={xScale(name) + xScale.bandwidth() / 2}
        y={boundsHeight + 10}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={10}
      >
        {name}
      </text>
    );
  });

  const yLabels = allYGroups.map((name, i) => (
    <text
      key={i}
      x={-5}
      y={yScale(name) + yScale.bandwidth() / 2}
      textAnchor="end"
      dominantBaseline="middle"
      fontSize={10}
    >
      {name}
    </text>
  ));



  return (
    <div style={{ transform: "rotateY(180deg)",paddingBottom:'45px' }}>
      <svg width={width} height={height} transform="rotate(180)">
        <g
          width={boundsWidth}
          height={boundsHeight}
          // transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {allShapes}
        </g>
      </svg>
    </div>
  );
};
