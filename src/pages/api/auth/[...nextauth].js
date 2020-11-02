import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const providers = [
  Providers.GitHub({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  }),
];

const options = {
  providers,
  database: process.env.MONGODB_URI,
};

export default (req, res) => NextAuth(req, res, options);
