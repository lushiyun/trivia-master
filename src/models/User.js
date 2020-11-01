import Adapters from 'next-auth/adapters';

// Extend the built-in models using class inheritance
export default class User extends Adapters.TypeORM.Models.User.model {
  constructor(name, email, image, emailVerified) {
    super(name, email, image, emailVerified);
  }
}

export const UserSchema = {
  name: 'User',
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
    score: {
      type: 'int',
      nullable: true,
    },
    time: {
      type: 'int',
      nullable: true,
    },
  },
};
