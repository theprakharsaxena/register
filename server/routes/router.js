const express=require('express')
const route=express.Router()

const controller=require('../controller/controller')

// API
route.post('/api/v1/staff/add',controller.create);
route.get('/api/v1/staff',controller.find);
route.put('/api/v1/staff/update/:id',controller.update);
route.delete('/api/v1/staff/delete/:id',controller.delete);


module.exports=route;