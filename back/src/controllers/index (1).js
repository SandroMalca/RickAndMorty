const axios = require("axios");
var fav = [];

const getFav = function (req, res) {
  res.status(200).end(JSON.stringify(fav));
};
/*
Ejemplo para cuando si trabajemos con nuestra base de datos y no con este array de mentira, ju

const getFav = async function (req, res) {
  try {
    const allFav = await fav.findAll()
    res.status(200).end(JSON.stringify(allFav));
  } catch (error) {
    res.status(500).end(error);
  }
};
*/
const postFav = function (req, res) {
  fav.push(req.body);
  console.log("post fav -> ", fav);
  res.status(200).end(JSON.stringify(req.body));
};
const deleteFavId = function (req, res) {
  const { id } = req.params;
  const character = fav.find((c) => c.id === Number(id));
  if (character) {
    fav = fav.filter((e) => e.id !== Number(id));
    console.log("delete fav -> ", fav);
    res.status(200).end(JSON.stringify(character));
  } else {
    res.status(400).end("este character ya no se encuentra en fav");
  }
};

const getCharacterId = async function (req, res) {
  const { id } = req.params;
  try {
    const char = await axios(`https://rickandmortyapi.com/api/character/${id}`);
    const character = {
      image: char.data.image,
      name: char.data.name,
      gender: char.data.gender,
      species: char.data.species,
      id: char.data.id,
    };
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(character));
  } catch (error) {
    res.writeHead(500, { "Content-type": "text/plain" });
    res.end("not found character", error);
  }
};

const getDetailId = async function (req, res) {
  const { detailId } = req.params;
  try {
    const charDetail = await axios(
      `https://rickandmortyapi.com/api/character/${detailId}`
    );

    const character = {
      image: charDetail.data.image,
      name: charDetail.data.name,
      gender: charDetail.data.gender,
      species: charDetail.data.species,
      id: charDetail.data.id,
      status: charDetail.data.status,
      origin: charDetail.data.origin,
    };
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(character));
  } catch (error) {
    res.writeHead(500, { "Content-type": "text/plain" });
    res.end("not found character", error);
  }
};

module.exports = {
  getCharacterId,
  getDetailId,
  getFav,
  postFav,
  deleteFavId,
};
