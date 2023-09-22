const indexController = ()=>{
    return{
        home(req,res){
            res.render("index/home")
        },
    }
}




module.exports= indexController