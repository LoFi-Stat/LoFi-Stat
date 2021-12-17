window.setInterval(
  (function () {
    var start = Date.parse("2018-03-01");
    var pages = document.createTextNode("0");
    document.getElementById("witten_pages").appendChild(pages);
    return function () {
      pages.data = Math.floor((Date.now() - start) / 20000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
  })(),
  1000
);