const nodeEnv = process.env.NODE_ENV;

const config = {
  dev: {
    app: {
      port: 8000,
      SESSION_SECRET: "secret"
    },
    mongodb: {
      mongoURI: "mongodb+srv://anshikaaggarwal566:anshi566@cluster0-h03tc.mongodb.net/test?retryWrites=true&w=majority"
    }
   },
  prod: {
    app: {
      port: process.env.PORT,
      SESSION_SECRET: "secret"
    },
    mongodb: {
      mongoURI: "mongodb+srv://anshikaaggarwal566:anshi566@cluster0-h03tc.mongodb.net/test?retryWrites=true&w=majority"
    }
   }
};

export default config[nodeEnv]