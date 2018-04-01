const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  volume:{
    type: Number,
    required :true
  },
  total_strength:{
    type:Number,
    required:true
  },
  des_pg:{
    type:Number,
    required:true
  },
  des_vg:{
    type:Number,
    required:true
  },
  nic_strength:{
    type:Number,
    required:true
  },
  nic_pg:{
    type:Number,
    required:true
  },
  nic_vg:{
    type:Number,
    required:true
  },
  nic_vol:{
    type:Number,
    required:true
  },
  flavor:{
    type:Number,
    required:false
  },
  date:{
    type:String,
    required:true
  }
});


const Recipe = module.exports=mongoose.model('Recipe',RecipeSchema);
