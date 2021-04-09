/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new Error('Not implemented');
  const regEx = /@\w\S+/i;
  const result = email.match(regEx)[0].slice(1);

  return result;
}

module.exports = getEmailDomain;
