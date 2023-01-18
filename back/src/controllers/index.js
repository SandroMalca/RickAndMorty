const axios = require("axios");
var fav = []

const getFav = async function (req, res) {
  res.status(200).end(JSON.stringify(fav))

};
const postFav = function (req, res) {
  fav.push(req.body)
  console.log("post fav -> ", fav)
  res.status(200).end(JSON.stringify(req.body))
};
const deleteFavId = function (req, res) {
  const { id } = req.params;
  const character = fav.find(c=> c.id ===Number(id))
  if(character){
    fav = fav.filter(e=> e.id !== Number(id))
    console.log("delete fav -> ", fav)
    res.status(200).end(JSON.stringify(character))
  } else {
    res.status(400).end("este character ya no se encuentra en fav")
  }
};

const getCharacterId = async function (req, res) {
  const { id } = req.params;
  const result = await axios(`https://rickandmortyapi.com/api/character/${id}`)
  const characterApi = result.data
    try{
      const character = {
        image: characterApi.image,
        name: characterApi.name,
        gender: characterApi.gender,
        species: characterApi.species,
        id: characterApi.id,
      };
      res.status(200).end(JSON.stringify(character));
  
    }catch(error){
      res.status(500).end("not found character",error);   
    };
  }

const getDetailId = async function (req, res) {
  const { detailId } = req.params;
  const result= await axios(`https://rickandmortyapi.com/api/character/${detailId}`)
  const characterDetail = result.data
    try{    
      const character = {
        image: characterDetail.image,
        name: characterDetail.name,
        gender: characterDetail.gender,
        species: characterDetail.species,
        id: characterDetail.id,
        status: characterDetail.status,
        origin: characterDetail.origin,
      };
      res.status(200).end(JSON.stringify(character))
    }catch(error) {
      res.status(500).end("not found character",error);
    }
  }


module.exports = {
  getCharacterId,
  getDetailId,
  getFav,
  postFav,
  deleteFavId,
};
