import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';

import Models from '../../../models';

const providers = [
  Providers.GitHub({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  }),
];

const adapter = Adapters.TypeORM.Adapter(process.env.MONGODB_URI, {
  models: {
    User: Models.User,
  },
});

const callbacks = {};

const options = {
  providers,
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks,
  adapter,
};

export default (req, res) => NextAuth(req, res, options);
