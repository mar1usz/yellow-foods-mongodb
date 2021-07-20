const { createProblemDetails } = require('./problem-details-factory');

exports.createProblem = ({
  detail = null,
  instance = null,
  status = null,
  title = null,
  type = null,
  extensions = null
} = {}) =>
  createProblemDetails({
    detail: detail,
    instance: instance,
    status: status,
    title: title,
    type: type,
    extensions: extensions
  });

exports.createValidationProblem = ({ errors = null } = {}) =>
  createProblemDetails({
    status: 400,
    title: 'One or more validation errors occurred.',
    type: 'https://tools.ietf.org/html/rfc7231#section-6.5.1',
    extensions: { errors: errors ?? {} }
  });

exports.createNotFound = () =>
  createProblemDetails({
    status: 404,
    title: 'Not Found',
    type: 'https://tools.ietf.org/html/rfc7231#section-6.5.4'
  });
