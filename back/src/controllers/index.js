const axios = require("axios");

const getCharById = function (res, id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`) 
    .then((data) => data.data)
    .then((data) => {
      const character = {
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        id: data.id,
      };
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-type": "text/plain" });
      res.end("not found character");
    });
};

const getCharDetail = function (res, id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`) 
      .then((data) => data.data)
      .then((data) => {
        // console.log(data)
        const character = {
          image: data.image,
          name: data.name,
          gender: data.gender,
          species: data.species,
          id: data.id,
          status:data.status,
          origin:data.origin
        };
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify(character));
      })
      .catch((error) => {
        res.writeHead(500, { "Content-type": "text/plain" });
        res.end("not found character");
      });
  };
module.exports = {
  getCharById,
  getCharDetail
};



