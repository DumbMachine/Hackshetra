import express from 'express';
const router = express.Router();
import ResponseTemplate from '../global/templates/response';
import Users from "../models/Users";

router.get('/:userId',(req,res)=>{
	Users.find({"userId":req.params.userId})
	.then(user => res.status(200).json(ResponseTemplate.success('User Found', user)))
        .catch(err => res.status(404).json(ResponseTemplate.error(404, "User Not Found", err)));
});

export default router;