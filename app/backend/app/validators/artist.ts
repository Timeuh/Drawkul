import vine from '@vinejs/vine'

/**
 * Validates the artist's creation action
 */
export const createArtistValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
  })
)