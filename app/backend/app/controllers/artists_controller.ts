import sendErrorResponse from '#utils/functions/errorResponse';
import { successResponse } from '#utils/functions/successResponse';
import { prisma } from '#utils/prisma/client';
import { Artist, ArtistCreationPayload } from '#utils/types/artist';
import { createArtistValidator, updateArtistValidator } from '#validators/artist';
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
      return successResponse<Artist>(creation, 'Artist created successfully');
    } catch (error) {
      // log the error on the server
      console.error('Error creating artist:', error);

      // return the error response
      return sendErrorResponse(error);
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
    // validate received data
    const payload: ArtistCreationPayload = await request.validateUsing(updateArtistValidator);

    try {
      // update artist in database
      const update: Artist = await prisma.artist.update({
        where: { id: Number(params.id) },
        data: payload
      });

      // return success response
      return successResponse<Artist>(update, 'Artist updated successfully');
    } catch (error) {
      // log the error on the server
      console.error('Error updating artist:', error);

      // return the error response
      return sendErrorResponse(error);
    }
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    console.log(params.id);
  }
}