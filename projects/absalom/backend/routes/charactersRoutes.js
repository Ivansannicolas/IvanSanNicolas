const { Router } = require('express');
const charactersController = require('../controllers/charactersController');
const charactersByFilterController = require('../controllers/charactersByFilterController');

function charactersRouter(Character) {
  const router = Router();
  const characters = charactersController(Character);
  const charactersFilter = charactersByFilterController(Character);

  router.route('/')
    .get(characters.getMethod)
    .patch(characters.patchMethod);

  router.route('/filter')
    .get(charactersFilter.getMethod);

  return router;
}

module.exports = charactersRouter;
