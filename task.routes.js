const{TaskController}= require("./controller/task.controller");
const router = require("express").Router();


router.get("/", TaskController.getAll);






r