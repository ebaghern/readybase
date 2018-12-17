const Validator = require('validatorjs');

const rules = {
  // name: 'required|max:100',
  email: 'required|email|max:100'
};

const messages = {
  email: 'Must be a valid email address.',
  required: 'Field is required.'
};

const dripClient = require('drip-nodejs')({
  token: process.env.DRIP_API_TOKEN,
  accountId: process.env.DRIP_ACCOUNT_ID
});

rules.exports = rules;
messages.exports = messages;

module.exports = async (data) => {
  await console.log({ data });
  /*
  @todo server form validation
  let validation = new Validator(data, rules, messages);
    if (validation.passes()) {

    } else {
      console.error(validation.errors.errors);
      return reject({
        success: false,
        errorMsg: 'error' // @todo: error handling
      });
    } */

  const { name, companyName, email, freelancerType } = await data;
  const payload = {
    subscribers: [
      {
        email,
        time_zone: 'America/Chicago',
        custom_fields: {
          name,
          companyName,
          freelancerType
        }
      }
    ]
  };

  dripClient
    .createUpdateSubscriber(payload)
    .then((res) => {
      process.env.NODE_ENV === 'development' &&
        console.log('drip response', {
          responseBody: res.body,
          fields: { name, companyName, freelancerType, email }
        });
      return resolve({
        success: true
      });
    })
    .catch((error) => {
      console.error(error);
      return reject({
        success: false
      });
    });
};
