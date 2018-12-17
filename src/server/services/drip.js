const Validator = require('validatorjs');
const rules = {
  email: 'required|email|max:100'
};
const messages = {
  email: 'Must be a valid email address.',
  required: 'Field is required.'
};
const client = require('drip-nodejs')({
  token: process.env.DRIP_API_TOKEN,
  accountId: process.env.DRIP_ACCOUNT_ID
});
const handleSubmit = async (data) => {
  // @todo server-side form validation
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

  client
    .createUpdateSubscriber(payload)
    .then((res) => {
      process.env.NODE_ENV === 'development' &&
        console.log(res, {
          name,
          companyName,
          freelancerType,
          email
        });
    })
    .catch(console.error);
};

rules.exports = rules;
messages.exports = messages;
module.exports = handleSubmit;
