import gtag from "../gtag";
import log from "../libs/log";
import { useEffect } from "react";

function PageView({ title }) {
  useEffect(() => {
    log(title);

    gtag("event", "page_view", {
      page_title: title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }, []);

  return "";
}

export default PageView;
