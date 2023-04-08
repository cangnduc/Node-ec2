let getHomePage = (req,res) => {
    return res.render('homePage.ejs');
}
let getAboutPage = (req,res) => {
    return res.render('test/aboutPage.ejs');
}


//let homeController = {getHomePage}
//every object key need a value
export default {getHomePage,getAboutPage};