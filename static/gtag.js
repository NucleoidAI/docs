if (window.location.hostname !== "nucleoid.com") {
  window["ga-disable-G-L9H12K94J4"] = true;
}

window.dataLayer = window.dataLayer || [];

function gtag() {
  // eslint-disable-next-line no-undef
  dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", "G-L9H12K94J4", {
  send_page_view: false,
});
gtag("event", "page_view", {
  page_title: "Docs",
  page_location: window.location.href,
  page_path: window.location.pathname,
});

window.gtag = gtag;
