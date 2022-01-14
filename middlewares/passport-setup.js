const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.secretOrKey,
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    console.log(jwt_payload.id);
    const user = await User.findById(jwt_payload.id);

    console.log(user);

    user ? done(false, user) : done(null, false);
  })
);

module.exports = isAuth = () =>
  passport.authenticate("jwt", { session: false });
