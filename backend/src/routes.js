const express = require('express');

const artistController = require('./controllers/artistController')
const donationController = require('./controllers/donationController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.get('/artists', artistController.GetArtists);
routes.get('/donations', donationController.GetDonations);
routes.get('/artistDonations', profileController.GetArtistsDonations);

routes.post('/createArtist', artistController.CreateArtist);
routes.post('/createDonation', donationController.CreateDonation);
routes.post('/session', sessionController.Login);

routes.delete('/deleteArtist', artistController.DeleteArtist);
routes.delete('/deleteDonation/:id', donationController.DeleteDonation);

module.exports = routes;