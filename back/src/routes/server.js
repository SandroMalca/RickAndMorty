const http = require("http");
const PORT = 3001;
const characters = require("../utils/data");
const { getCharById, getCharDetail } = require("../controllers/index");

http
  .createServer(function (req, res) {
    const allUrl = req.url.split("/");
    const id = Number(allUrl.pop());
    const url = allUrl.join("/");

    switch (url) {
      case "/onsearch":
        return getCharById(res, id);
      case "/detail":
        return getCharDetail(res, id);
      default:
        res.writeHead(404, { "Content-type": "text/plain" });
        res.end("Route not found");
    }
  })
  .listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });

/*
Front o Client
http://localhost:3000   -> petición fetch http://localhost:3001
Cors




Back o Api
http://localhost:3001



Para solucionar provisoriamente lo de las CORS
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
*/
