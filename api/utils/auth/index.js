const passport = require('passport');

const JwtStrategy = require('./strategies/jwt.strategy');
const GQLLocalStrategy= require('./strategies/local-gql.strategy');

passport.use(JwtStrategy);
passport.use(GQLLocalStrategy);