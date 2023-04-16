import db from '../models/index';
let getHomePage =async (req,res) => {
    let data;
    try {
        data = await db.Users.findAll();
        //console.log(data[0]['dataValues'])
    }
    catch (error) {
       
        console.log(error);
    }
    return res.render('homePage.ejs',{data :data});
}
let getAboutPage = (req,res) => {
    return res.render('test/aboutPage.ejs');
}


//let homeController = {getHomePage}
//every object key need a value
export default {getHomePage,getAboutPage};