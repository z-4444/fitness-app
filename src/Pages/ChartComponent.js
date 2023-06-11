// import React, { useEffect, useRef } from "react";
// import {
//   Chart,
//   LineController,
//   LineElement,
//   Title,
//   Tooltip,
//   LinearScale,
// } from "chart.js";
// import { format } from "date-fns";
// import fitnessActivityData from "../json/fitnessActivityData";

// Chart.register(LineController, LineElement, Title, Tooltip, LinearScale);

// const ChartComponent = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const ctx = chartRef.current.getContext("2d");

//     // Prepare data for the chart
//     const labels = Object.keys(fitnessActivityData);
//     const datasets = Object.entries(fitnessActivityData).map(([day, data]) => ({
//       label: day,
//       data: [
//         { t: new Date(day), y: data.distance },
//         { t: new Date(day), y: data.caloriesBurned },
//         { t: new Date(day), y: data.sleep },
//         { t: new Date(day), y: data.workoutTime },
//       ],
//       fill: false,
//       borderColor: getRandomColor(),
//       backgroundColor: getRandomColor(0.5),
//     }));

//     const config = {
//       type: "line",
//       data: {
//         labels: labels,
//         datasets: datasets,
//       },
//       options: {
//         responsive: true,
//         scales: {
//           x: {
//             type: "time",
//             time: {
//               parser: (value) => new Date(value),
//               tooltipFormat: "PP",
//               displayFormats: {
//                 day: "EEEE",
//               },
//               unit: "day",
//               stepSize: 1,
//               minUnit: "day",
//               min: labels[0],
//               max: labels[labels.length - 1],
//             },
//             title: {
//               display: true,
//               text: "Weekdays",
//             },
//           },
//           y: {
//             type: "linear",
//             title: {
//               display: true,
//               text: "Value",
//             },
//           },
//         },
//       },
//     };

//     new Chart(ctx, config);
//   }, []);

//   // Helper function to generate random color
//   const getRandomColor = (alpha = 1) => {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgba(${r}, ${g}, ${b}, ${alpha})`;
//   };

//   return <canvas ref={chartRef} />;
// };

// export default ChartComponent;
