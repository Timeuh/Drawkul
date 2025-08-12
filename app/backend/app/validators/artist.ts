import vine from '@vinejs/vine'

/**
 * Validates the artist's creation action
 */
export const createArtistValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
  })
)

/**
 * Validates the artist's update action
 */
export const updateArtistValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
  })
)