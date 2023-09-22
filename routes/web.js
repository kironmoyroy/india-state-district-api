// Controller import
const indexController = require("../app/http/controllers/indexController");

const initRoute = (app)=>{

    // indexController ........................... Start .........................................
    app.get("/", indexController().home) 

}

module.exports = initRoute