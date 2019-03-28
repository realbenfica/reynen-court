const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  const permissions = await loadPermissionsCollection();
  res.send(await permissions.find({}).toArray());
});

// Add Post
router.post('/', async (req, res) => {
  const permissions = await loadPermissionsCollection();
  await permissions.insertOne({
    resource_name: req.body.resource_name, 
    module_name: req.body.module_name, 
    permission_name: req.body.permission_name
  });
  res.status(201).send();
});


async function loadPermissionsCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://realbenfica:14211421@cluster0-st6ez.mongodb.net/test?retryWrites=true',
    {
      useNewUrlParser: true
    }
  );

  return client.db('dashboard').collection('permissions');
}

module.exports = router;
