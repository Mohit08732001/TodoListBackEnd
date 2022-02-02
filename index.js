const express=require('express');
const app=express();
const PORT=8000;

// use express router
app.use('/',require('./routes'));

app.listen(PORT,function(err){
    if(err){
        console.log(`Error : ${err}`);
        return;
    }
        console.log(`Server running on port ${PORT}`);
});