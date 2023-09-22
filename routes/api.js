// Controller import
const indexAPI = require("../app/http/api/indexAPI");

const initRoute = (app)=>{

    // indexController ........................... Start .........................................
    // app.get("/api/add-state", indexAPI().addState) 
    // app.get("/api/add-district", indexAPI().addDistricts) 
    app.get("/api/all", indexAPI().viewAll) 
    app.get("/api/state", indexAPI().viewState) 
    app.get("/api/district", indexAPI().viewAllDistrict) 
    app.get("/api/district/:id", indexAPI().viewDistrict) 

}

module.exports = initRoute