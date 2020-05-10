const { Router } = require('express');
const starshipRoutes = require('./routes/starship.routes');

/*
 * Attach API to Express application
 * @params app: Express application
 */
module.exports.set = (app) => {
    const apiRouter = Router({ mergeParams: true });

    apiRouter.use('/starship', starshipRoutes);

    app.use('/api', apiRouter);
}