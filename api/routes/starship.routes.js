const { Router } = require('express');
const starshipControllers = require('../controllers/starship.controllers');

const starshipRouter = Router({ mergeParams: true });

starshipRouter.post('/add', starshipControllers.addStarship);
starshipRouter.get('/list', starshipControllers.getStarshipsList);
starshipRouter.get('/verify-mod/:model', starshipControllers.verifyModification);
starshipRouter.get('/:starship', starshipControllers.getStarshipInfo);
starshipRouter.patch('/:starship', starshipControllers.updateStarship);
starshipRouter.delete('/:starship', starshipControllers.removeStarship);

module.exports = starshipRouter;