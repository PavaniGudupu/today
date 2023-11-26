const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get("/", function(req, res){
    today = new Date();
    currentDay = today.getDay();
    var day = "";
    switch (currentDay){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = "Friday";
            break;
        case 6: 
        day = "Saturday";
        break;
        default:
            console.log("Error, Its invalid!!");

    }

    res.render("index", {actual_day: day});
});

app.listen(3000, function(){
    console.log("Server running...")
})