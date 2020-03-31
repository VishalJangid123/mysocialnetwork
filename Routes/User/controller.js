const model = require('./model');
const jwt = require('jsonwebtoken');
const config = require('../../Config');

module.exports ={
    login : (req,res) => {
        model.findOne({ email: req.body.email}, (err,user)=> {
            if(err) {
                res.status(500).send({auth: false, msg : err})
                return
            }
            user.comparePassword(req.body.password, (err,isMatch)=>{
                if(err) throw err;
                if(isMatch){
                    let token = jwt.sign({id:user._id}, config.secret, {expiresIn:86400});
                    res.status(200).send({auth: true, msg:'Login Sucess', token});
                    return;
                }else{
                    res.status(500).send({auth: false, msg:'Password did not match'});
                
                }
            })
        })
        
    },
    register:(req,res) => {
        let newUser = new model({
            firstname: req.body.firstname,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password,
        })

        newUser.save()
        .then((result) =>{
            console.log(result);
          let token = jwt.sign({id:result._id}, config.secret, {expiresIn:86400});
            res.status(200).send({auth: true, token});
                    
        })
        .catch((err)=>{
            res.status(500).send({auth: false, err});
        })
        
        
    }
}