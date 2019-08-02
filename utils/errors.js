const defineError = require('define-error')

/*
 * Define an error class.
 * @example
 * const createError = require('app/lib/create-error')
 * const UserNotFound = createError('USER_NOT_FOUND', 404, 'User not found')
 * const InvalidEmail = createError('INVALID_EMAIL', 400)
 *
 * throw new UserNotFound()
 *   // Error { code: 'USER_NOT_FOUND', statusCode: 404, message: 'User not found' }
 *
 * throw new InvalidEmail('Email "fofo@123" is invalid.')
 *   // Error { code: 'INVALID_EMAIL', statusCode: 404, message: 'Email "fofo@123" is invalid.' }
 */
function createError (code, statusCode, defaultMessage) {
  const Ctor = defineError(code, function initError (instanceMessage) {
    if (!instanceMessage && defaultMessage) {
      this.message = defaultMessage
    }
    this.statusCode = statusCode || 500
    this.code = code
  })
  return function (message) {
    return new Ctor(message)
  }
}

const NotAuthenticatedError = createError(
  'NOT_AUTHENTICATED',
  403,
  'Please sign in to continue.'
)

module.exports = {
  NotAuthenticatedError
}
