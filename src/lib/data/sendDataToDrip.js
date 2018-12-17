import fetch from 'isomorphic-unfetch';
export default async (data) => {
  const res = await fetch(`/api/v1/forms/drip`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    // @todo error handling
  }
};
