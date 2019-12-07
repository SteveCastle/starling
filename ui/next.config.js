// next.config.js
require("dotenv").config();

exports.default = {
  env: {
    GRAPHQL_API: process.env.GRAPHQL_API
  }
};
