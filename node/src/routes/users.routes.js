const { Router, response } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

function myMiddleware(req, res, next){
    if(!req.body.isAdmin) {
        return res.json({ message: "user unauthorize"})
    } 
    next();
}

const usersController = new UsersController();

usersRoutes.post("/", myMiddleware, usersController.create);
usersRoutes.put("/:id", usersController.update)

module.exports = usersRoutes;