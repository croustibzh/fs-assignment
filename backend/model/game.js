const mongoose =require('mongoose')

const game = mongoose.Schema({
  title:{type:String, required:true},
  platform:{type:String, required:true},
  genre:{type:String, required:true},
  rating:{type:String, required:true},
  publisher:{type:String, required:true},
  release:{type:Date, required:true},
  status:{type:Boolean, required:true},
});

module.exports = mongoose.model('gameSchema', game)
