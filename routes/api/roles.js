const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Roles
router.get('/', async (req, res) => {
  const roles = await loadRolesCollection();
  res.send(await roles.find({}).toArray());
});

// Add Role
router.post('/', async (req, res) => {
  const roles = await loadRolesCollection();
  await roles.insertOne({
    role_name: req.body.role_name, 
    permission_name: req.body.permission_name
  });
  res.status(201).send();
});


async function loadRolesCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://realbenfica:14211421@cluster0-st6ez.mongodb.net/test?retryWrites=true',
    {
      useNewUrlParser: true
    }
  );

  return client.db('dashboard').collection('roles');
}

module.exports = router;
