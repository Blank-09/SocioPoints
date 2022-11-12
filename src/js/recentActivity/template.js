const levels = ["success", "primary", "info", "warning", "danger"];

/**
 * @param {{title:string;body:string;level:number;}} data
 * @returns {string}
 */

export function activityCard(
  // title = "", content = "", level = 0
  data
) {
  if (data.level > 5) data.level = 5;
  else if (data.level < 0) data.level = 0;

  return `<div class="activity-item d-flex">
    <div class="activite-label"> ${data.title} </div>
    <i
      class="bi bi-circle-fill activity-badge text-${
        levels[data.level - 1]
      } align-self-start"
    ></i>
    <div class="activity-content">
      ${data.body}
    </div>
  </div>`;
}
