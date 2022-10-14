const getDb = require('../services/db');

exports.create = async (req, res) => {
  const db = await getDb()
  const { name, genre } = req.body;

  try {
    await db.query(`INSERT INTO Artist (name, genre) VALUES ('${name}','${genre}')`);

    res.send(201);
  } catch (err) {
    res.status(500).json(err);
  }

  db.end();
  };