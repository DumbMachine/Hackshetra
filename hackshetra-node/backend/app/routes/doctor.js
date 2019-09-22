import express from 'express';
var router = express.Router();
import ResponseTemplate from '../global/templates/response';
import Doctors from "../models/Doctors";


router.post('/register',(req, res)=>{
	var name=req.body.name;
	var email=req.body.email;
	var description=req.body.doctorname;
	var password=req.body.password;

     console.log("doctor registering");

    	 const newDoctor = new Doctors({
             name: req.body.name,
             email :req.body.email,
          description :req.body.description,
          password :req.body.password
    });
    newDoctor.save()
        .then(doctor => res.status(200).json(ResponseTemplate.success('User Registered', doctor)))
        .catch(err => res.status(400).json(ResponseTemplate.error(400, "User could not be Registered", err)));
    });



router.post('/login',(req,res)=>{
    Doctors.findOne({"name":req.body.name,"password":req.body.password})
    .then(doctor => {
        if(doctor)
            res.status(200).json(ResponseTemplate.success('User Found', doctor));
        else
            throw "doctor not found";
    })
        .catch(err => res.status(404).json(ResponseTemplate.error(404, "User Not Found", err)));
});








module.exports = router;