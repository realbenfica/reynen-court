let mongoose = require('mongoose');

// Article Schema
let PermissionsSchema = mongoose.Schema({
  resource_name:{
    type: String,
    required: true
  },
  module_name:{
    type: String,
    required: true
  },
  permission_name:{
    type: String,
    required: true
  }
});

let Permissions = module.exports = mongoose.model('Permissions', PermissionsSchema);
