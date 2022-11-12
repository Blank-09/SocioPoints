import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import "simple-datatables-classic/dist/style.css";
import "/assets/css/style.css";

import "boxicons";
import "bootstrap";

import { select, on } from "./utils";

if (select('.search-bar-toggle')) {
  on('click', '.search-bar-toggle', function(e) {
    select('.search-bar').classList.toggle('search-bar-show')
  })
}