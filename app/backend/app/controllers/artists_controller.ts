import { successfulCreationResponse } from '#utils/functions/successfulCreationResponse';
import { prisma } from '#utils/prisma/client';
import { Artist, ArtistCreationPayload } from '#utils/types/artist';
import { createArtistValidator } from '#validators/artist';
import type { HttpContext } from '@adonisjs/core/http'

export default class ArtistsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    // validate received data
    const payload: ArtistCreationPayload = await request.validateUsing(createArtistValidator);

    try {
      // create artist in database
      const creation: Artist = await prisma.artist.create({
        data: payload
      });

      // return success response
      return successfulCreationResponse<Artist>(creation, 'Artist');
    } catch (error) {
      // log the error on the server
      console.error('Error creating artist:', error);

      // return the error response
      return {
        status: 'error',
        message: `Failed to create artist, ${payload.name} already exists !`
      }
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    console.log(params.id);
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    console.log(params.id);
    console.log(request.body());
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    console.log(params.id);
  }
}