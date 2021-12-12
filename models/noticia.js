const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
  titulo: { type: String },
  //subtitulo: { type: String },
  autor: { type: String },
  descricao: {type: String},
  dataPulicacao: {type: Date},
  conteudo: {type: String},
 // status: { type: Boolean, default: true }
});

const Noticia = mongoose.model("Noticias", NoticiaSchema);
module.exports = Noticia;
