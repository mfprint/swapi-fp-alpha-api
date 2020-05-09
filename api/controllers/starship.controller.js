const { Router } = require('express');
const starshipRoutes = require('../routes/starship.routes');

const starshipRouter = Router({ mergeParams: true });

starshipRouter.post('/add', starshipRoutes.addStarship);
starshipRouter.get('/list', starshipRoutes.getStarshipsList);
starshipRouter.get('/:starship/info', starshipRoutes.getStarshipInfo);
starshipRouter.patch('/:starship/update', starshipRoutes.updateStarship);
starshipRouter.delete('/:starship/remove', starshipRoutes.removeStarship);

module.exports = starshipRouter;