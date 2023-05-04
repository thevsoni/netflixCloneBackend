import express from 'express';
import { protect, admin } from '../middlewares/Auth.js'
// import { importMovies, getMovies, getMovieById, getTopRatedMovies, getRandomMovies } from '../Controllers/MoviesController.js';
import * as moviesController from '../Controllers/MoviesController.js';
// import moviesController from '../Controllers/MoviesController.js'; //cant write like this

const router = express.Router();

// ******* PUBLIC ROUTES *******
router.post('/import', moviesController.importMovies);
router.get('/', moviesController.getMovies);
router.get('/:id', moviesController.getMovieById);
router.get('/rated/top', moviesController.getTopRatedMovies);
router.get('/random/all', moviesController.getRandomMovies);


// ****** PRIVATE ROUTES *******
router.post('/:id/reviews', protect, moviesController.createMovieReview);


// ****** ADMIN ROUTES *********
router.put('/:id', protect, admin, moviesController.updateMovie);
router.delete('/:id', protect, admin, moviesController.deleteMovie);
router.delete('/', protect, admin, moviesController.deleteAllMovies);
router.post('/', protect, admin, moviesController.createMovie);


export default router;