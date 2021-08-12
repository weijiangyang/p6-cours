const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
exports.signup = (req,res) => {
    bcrypt.hash(req.body.password,10)
    .then(hash => {
        const user = new User({
            email:req.body.email,
            password:hash
        });
        user.save()
        .then(() => res.status(201).json({message:"user cree!"}))
        .catch(err => res.status(400).json({err}))

        
    })
    .catch(err => res.status(400).json({err}));
    
};



exports.login = (req,res) => {
    User.findOne({email:req.body.email})
    .then(user => {
        if(!user){
            return res.status(401).json({message:'utilisateur non trouve!'})
        }
        bcrypt.compare(req.body.password,user.password)
        .then(valid =>{
            if(!valid){
                return res.status(401).json({message:"mot de pass incorrect!"});
            }
            res.status(200).json({
                userId: user._id,
                token:jwt.sign(
                    {userId:user._id},
                    'RANDOM_TOKEN_SECRET',
                    {expiresIn:'24'}

                )
            })
        }
            
        )
        .catch(err => res.status(500).json({err}))
    })
    .catch(err => res.status(500).json({err}))


}
