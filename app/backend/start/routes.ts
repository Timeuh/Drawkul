/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ArtistsController from '#controllers/artists_controller';

router.resource('artists', ArtistsController).apiOnly();
