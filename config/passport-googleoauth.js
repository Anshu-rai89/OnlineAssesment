const passport=require('passport');
const googleStartegy=require('passport-google-oauth').OAuth2Strategy;
const crypto=require('crypto');
const User=require('../model/user');





// tell passport to use google strategy 

passport.use(new googleStartegy({
    clientID:'1234'   ,                      // use your own clinet id
    clientSecret:'1234',                      // use yourown token
    callbackURL:''
},

function(accessToken, refreshToken, profile,done)
{
        User.findOne({email:profile.emails[0].value}).exec(function(err,user)
        {
            if(err){console.log('error in google stategy ',err);return}

            console.log(profile);


            // if user is there in our sysytem  sign in
            if(user)
            {
                return done(null,user);
            } 
            
            // if user is not there in our system create them **signup
            else
            {   
                User.create(
                    {
                        name:profile.displayName,
                        email:profile.emails[0].value,
                        // using crpto to generate random password
                        password:crypto.randomBytes(20).toString('hex')
                    },function(err,user)
                    {
                        if(err){ console.log("error in creating user for google auth",err);return;}

                        return done(null,user);
                    }
                )
            }
        });
}
));


module.exports=passport;