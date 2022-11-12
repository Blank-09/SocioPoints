import * as echarts from "echarts";
import { select } from "../utils/index";

document.addEventListener("DOMContentLoaded", () => {
  var budgetChart = echarts
    .init(document.querySelector("#healthChart"))
    .setOption({
      legend: {
        data: ["Positive Impact", "Negative Impact"],
      },
      radar: {
        // shape: 'circle',
        indicator: [
          {
            name: "Income",
            max: 100,
          },
          {
            name: "Current Employement",
            max: 100,
          },
          {
            name: "Education",
            max: 100,
          },
          {
            name: "Housing",
            max: 100,
          },
          {
            name: "Race",
            max: 100,
          },
          {
            name: "Social Exposure",
            max: 100,
          },
        ],
      },
      series: [
        {
          name: "Positive vs Negative Impact",
          type: "radar",
          data: [
            {
              value: [82, 15, 60, 90, 93, 82],
              name: "Positive Impact",
            },
            {
              value: [90, 90, 86, 53, 81, 90],
              name: "Negative Impact",
            },
          ],
        },
      ],
    });
});

/**
 * Auto resize echart charts
 */

const mainContainer = select("#main");

function handleResize() {
  select(".echart", true).forEach((getEchart) => {
    echarts.getInstanceByDom(getEchart).resize();
  });
}

if (mainContainer) {
  setTimeout(() => {
    new ResizeObserver(handleResize).observe(mainContainer);
  }, 500);
}
