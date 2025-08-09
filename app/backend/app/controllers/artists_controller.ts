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
    console.log(request.body());
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