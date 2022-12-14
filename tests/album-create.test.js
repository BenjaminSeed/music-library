const { expect } = require('chai');
const request = require('supertest');
const getDb = require('../src/services/db');
const app = require('../src/app');

describe('create album', () => {
  let db;
  let albums;

  beforeEach(async () => {
    db = await getDb();

    [albums] = await db.query('SELECT * from Album');
  });

  afterEach(async () => {
    await db.query('DELETE FROM Album');
    await db.close();
  });

  describe('/album', () => {
    describe('POST', () => {
      it('creates a new album in the database', async () => {
        if (albums[0]) {
          const res = await request(app).post('/artist/:artistId/album').send({
            name: 'Rubber Soul',
            year: 1965,
          });

          expect(res.status).to.equal(201);
          const [[albumEntries]] = await db.query(
            `SELECT * FROM Album WHERE name = 'Rubber Soul'`
          );

          expect(albumEntries.name).to.equal('Rubber Soul');
          expect(albumEntries.year).to.equal(1965);
          expect(albumEntries.artistId).to.equal(1);
        }
      });
    });
  });
});
