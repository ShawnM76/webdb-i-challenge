const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
  db.select('*')
    .from('accounts')
    .then(acc => {
      res.status(200).json(acc);
    })
    .catch(error => {
      res.json(error);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('accounts')
    .where({ id })
    .first()
    .then(acc => {
      res.status(200).json(acc);
    })
    .catch(error => {
      console.log(error);
      res.json(error);
    });
});

router.post('/', (req, res) => {
  const accountData = req.body;
  db('accounts')
    .insert(accountData, 'id')
    .then(([id]) => {
      db('accounts')
        .where({ id })
        .first()
        .then(acc => {
          res.status(200).json(acc);
        });
    })
    .catch(error => {
      console.log(error);
      res.json(error);
    });
});

router.put('/:id', (req, res) => {
  const changes = req.body;
  db('accounts')
    .where('id', req.params.id) // <== same as ({ id: req.params.id })
    .update(changes)
    .then(count => {
      res.status(200).json({ message: `updated ${count} record` });
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.delete('/:id', (req, res) => {
  db('accounts')
    .where({ id: req.params.id }) // <== same as ('id', req.params.id)
    .delete()
    .then(count => {
      res.status(200).json({ message: `deleted ${count} records` });
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
