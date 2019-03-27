const mongoose = require('mongoose');

// Roles Schema
const RolesSchema = mongoose.Schema({
    role_name:{
    type: String,
    required: true
  },
  permission_name:{
    type: String,
    required: true
  }
});

const Roles = module.exports = mongoose.model('Roles', RolesSchema);
