import { activityCard } from "./template";
import data from "./data";

const activityDiv = document.getElementById("recentActivity");

data.forEach((datum) => {
  activityDiv && (activityDiv.innerHTML += activityCard(datum));
});
