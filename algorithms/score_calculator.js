import * as FirestoreConnector from "../Paul/FirestoreConnector.js"

//create an array:
var example = [
    {"current_date":"11-01-2020 22:59","expiry_date":"31-01-2020","food_name":"Bread","food_weight":"100","store_id":"Safeway"},
    {"current_date":"11-01-2020 22:59","expiry_date":"31-01-2020","food_name":"Grain","food_weight":"40","store_id":"Save-On-Foods"},
    {"current_date":"11-01-2020 22:59","expiry_date":"31-01-2020","food_name":"Produce","food_weight":"46","store_id":"Save-On-Foods"},
    {"current_date":"11-01-2020 22:59","expiry_date":"31-01-2020","food_name":"Produce","food_weight":"501","store_id":"Costco"},
    {"current_date":"11-01-2020 22:59","expiry_date":"31-01-2020","food_name":"Produce","food_weight":"273","store_id":"Walmart"}

];

var scores = {};

// function datafy() {
    example.forEach(element => { //for each element in the input
        var isExist = false;
        for (var key in scores){ //check if it exists in local js object 'scores'
            if (key == element.store_id) {
                scores[key] += parseInt(element.food_weight, 10);
                alert(JSON.stringify(scores));
                isExist = true;
            }
        }
        if (!isExist){
            scores[element.store_id] = parseInt(element.food_weight, 10);
            alert(JSON.stringify(scores));
        }
    });
// }




// that contains store_id as key, and food_weight
// if key is found, add food_weight++
// else create new key, food_weight++



//TODO: iterate through database, for each item, get store_id and food_weight


