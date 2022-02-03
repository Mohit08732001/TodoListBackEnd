const express=require('express');
const app=express();
const PORT=8000;

//set view engine
app.set('view engine','ejs');
app.set('views','./views');
// use express router
app.use('/',require('./routes'));

app.listen(PORT,function(err){
    if(err){
        console.log(`Error : ${err}`);
        return;
    }
        console.log(`Server running on port ${PORT}`);
});