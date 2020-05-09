const { Router } = require('express');
const startshipController = require('./controllers/starship.controller');

/*
 * Attach API to Express application
 * @params app: Express application
 */
module.exports.set = (app) => {
    const apiRouter = Router({ mergeParams: true });

    apiRouter.use('/starship', startshipController);

    app.use('/api', apiRouter);
}