const getDb = require('../services/db');

exports.create = async (req, res) => {
  const db = await getDb()
  const { name, year } = req.body;
  const { artistId } = req.params;

  try {
    await db.query('INSERT INTO Album (name, year, artistId) VALUES (?, ?, ?)', 
    [
      name,
      year,
      artistId
    ]);

    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500).json(err);
  }
  db.end();
};

exports.delete = async (req, res) => {
  const db = await getDb();
  const { albumId } = req.params;

  try {
    const [
      { affectedRows },
    ] = await db.query('DELETE FROM Album WHERE id = ?', [albumId]);
    if (!affectedRows) {
      res.sendStatus(404);
    } else {
      res.status(200).send();
    }
  } catch (err) {
    res.sendStatus(500);
  }
  db.end();
};