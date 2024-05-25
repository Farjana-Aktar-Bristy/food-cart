const express=require('express');
const CrudController = require('../controller/Crudcontroller');

const router=express.Router();

router.post('/create',CrudController.create);
router.get('/read',CrudController.read);
router.get('/getFood/:foodId',CrudController.getFoodById);
router.put('/updateFood/:foodId',CrudController.update);
router.delete('/delete/:foodId',CrudController.delete);





module.exports=router;