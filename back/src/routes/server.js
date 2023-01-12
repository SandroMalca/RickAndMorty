const http = require("http");
const PORT = 3001;
const characters = require("../utils/data");

function error(res) {
  res.writeHead(404, { "Content-type": "text/plain" });
  res.end("Route not found");
}

http
  .createServer(function (req, res) {
    const allUrl = req.url.split("/");
    // console.log(allUrl); // [ '', 'rick', 'nana', '7' ]
    const id = Number(allUrl.pop()); // 7
    const url = allUrl.join("/"); // [ '', 'rick', 'nana' ] /rick/nana
    if (url === "/rickandmorty/character") {
      const character = characters.find((ch) => {
        return ch.id === id;
      });
      if (character) {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify(character));
      } else {
        error(res);
      }
    } else if (req.url === "/rickandmorty/characters") {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(characters));
    } else {
      error(res);
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
