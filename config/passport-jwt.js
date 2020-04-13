const passport=require('passport');
const JwtStrategy=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;


let opts =
{
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken,
    secretOrKey:'zcWSL8dB5WEn5k9Af5r7nHWGPOUCiARe',
    passReqToCallback:true
}


passport.use(new JwtStrategy(opts,function(jwtpayload,done)
{
    Docter.findById(jwtpayload._id,function(err,user)
    {
        if(err) {console.log("Error in finiding user from jwt");rerurn ;}

        if(user)
        {  console.log(user.name);
            return done(null,user);
        } else
        {
            return done(null,false);
        }
    });
}));




module.exports=passport;