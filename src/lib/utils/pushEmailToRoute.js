import Router from 'next/router';
export default (route, email) => Router.push(`/${route}?email=${email}`);
