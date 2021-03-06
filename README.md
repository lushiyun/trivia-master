# Trivia Champion 

[![Alt text](https://img.youtube.com/vi/xWLy3BSjsgs/0.jpg)](https://www.youtube.com/watch?v=xWLy3BSjsgs)

This is a trivia practice app built for [Tandem](https://madeintandem.com/)'s Apprenticeship Program. Trivia data include a list of 21 questions, as-is, provided by Tandem.

The app has the following features:
- User authentication with Github Oauth.
- Ten non-repeated questions each round.
- Timed rounds with timer stopped during answer checking.
- Scoreboard ranking all users' submissions by score and time.

I used this project to learn and experiment with Next.js's serverless functions and stale-while-revalidate (SWR). So you will see different techniques used for fetching data. For example:

- Directly get data from the database, through Next.js's `getServerSideProps`, for the /trivia page.
- Exposing data through an API and fetch them on the client-side through SWR, using the `useScores` hook, for the /socre page.

I also used this project to learn MongoDB, so you will see different methods used for saving and retrieving data. For example:

- Directly getting trivia question data from MongoDB.
- Posting and getting score data through Mongoose.

Please note, I did not want to modify the data structure for the trivia questions sent by Tandem, so the questions are saved in the database as how they're structured originally. All the parsing is done on the client-side, to demonstrate JSON parsing skills required in the code challenge.

## Demonstration

Demo the project in action at [Trivia Champion](https://trivia-master.vercel.app)

Check out [Shiyun's portfolio](https://www.shiyunlu.com) for my other projects.

## Built With

- [Next.js](https://nextjs.org) - A React framework.
- [MongoDB](https://www.mongodb.com) - Document-based database.
- [Mongoose](https://mongoosejs.com) - MongoDB Object Document Mapping.
- [Chakra UI](https://chakra-ui.com/) - Styling component library.

## How to use

### Install and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

### Configuration:

Get and set up the following local environment variables:

- MONGODB_URI & MONGODB_DB: follow this [MongoDB Guide](https://docs.mongodb.com/guides/server/drivers/) on how to connect to MongoDB.
- GITHUB_CLIENT_ID & GITHUB_CLIENT_SECRET: follow this [GitHub Guide](https://docs.github.com/en/free-pro-team@latest/developers/apps/authorizing-oauth-apps) on how to authorize OAuth apps.
- NEXTAUTH_URL: this should be 'http://localhost:3000'.
- JWT_SECRET: generate your own.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/lushiyun/c8af9e2f2d6470468cfc37aa28f6edeb) for details on my code of conduct, and the process for submitting pull requests.

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/lushiyun/trip-planner-frontend/tags).

## Author

  - **Shiyun Lu** - *Developed the app* -
    [lushiyun](https://github.com/lushiyun)

## License

This project is licensed under the MIT License
