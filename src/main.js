import Vue from 'vue';
/*global
    console
    document
    window
*/
/**
 * start design
 * array.includes() method
 *
 * if (array.includes(exp)) {
 *     go red
 * } else {
 *     go orange
 * }
 */

var Vue;
var twoIds = [];
var compare = [];
var getId = function (ele) {
    "use strict";
    return document.getElementById(ele);
};
var good = function () {
    "use strict";
    getId(twoIds[0]).style.backgroundColor = "#00ff00";
    getId(twoIds[1]).style.backgroundColor = "#00ff00";
    getId("yes-or-no").style.backgroundColor = "#00ff00";
    console.log("here");
    getId("yes-or-no").textContent = "yes, these foods do combine";
};
var noGood = function () {
    "use strict";
    getId(twoIds[0]).parentElement.parentElement.style.backgroundColor = "red";
    getId(twoIds[1]).parentElement.parentElement.style.backgroundColor = "red";
    getId("yes-or-no").style.backgroundColor = "red";
    getId("yes-or-no").textContent = "This food list is best eaten by itself. Give them space from other foods";
    twoIds.shift();
    compare.shift();
    console.log(twoIds);
    return;
};
var caution = function () {
    "use strict";
    getId(twoIds[0]).parentElement.parentElement.style.backgroundColor = "orange";
    getId(twoIds[1]).parentElement.parentElement.style.backgroundColor = "orange";
    getId("yes-or-no").style.backgroundColor = "orange";
    getId("yes-or-no").textContent = "Careful how you combine these foods. Refine the list further";
    twoIds.shift();
    compare.shift();
    console.log(twoIds);
    return;
};
var getClass = function (cla) {
    "use strict";
    return document.getElementsByClassName(cla);
};
var rmEv = function (e, a) {
    "use strict";
    return document.removeEventListener(e, a, false);
};
var info = function () {
    "use strict";
    return console.log("see me");
};
var rule2 = function () {
    "use strict";
    if ((twoIds[0] === "meats" && twoIds[1] === "no-starchy-veg") || (twoIds[0] === "no-starchy-veg" && twoIds[1] === "meats")) {
        good();
        return;
    } else if ((twoIds[0] === "fish" && twoIds[1] === "no-starchy-veg") || (twoIds[0] === "no-starchy-veg" && twoIds[1] === "fish")) {
        good();
        return;
    } else if ((twoIds[0] === "poultry" && twoIds[1] === "no-starchy-veg") || (twoIds[0] === "no-starchy-veg" && twoIds[1] === "poultry")) {
        good();
        return;
    }
    caution();
};
// if equal no good
var rule1 = function () {
    "use strict";
    console.log(compare[0], compare[1]);
    if (compare[0] === compare[1]) {
        noGood();
        return;
    }
    rule2();
};
var action = function (e) {
    "use strict";
    var getEl = e.target.tagName;
    var getCl = e.target.className;
    console.log(getCl);
    var y = e.target.id;
    console.log(y);
    if (getEl !== "LI") {
        return;
    }
    getId(y).style.backgroundColor = "#fff000";
    getId(y).parentElement.parentElement.style.backgroundColor = "#CCCCFF";
    twoIds.push(y);
    compare.push(getCl);
    // compare.push(y);
    console.log(twoIds, compare);
    if (y === "dairy"
            || y === "water"
            || y === "nuts"
            || y === "liquids"
            || y === "sugars"
            || y === "sweet-fruit"
            || y === "acid-fruit"
            || y === "rest-fruit") {
        twoIds.push(y);
        noGood();
        // window.location.reload();
        return;
    }
    if (twoIds.length === 2) {
        rule1();
    }
    return;
};
var addEv = function (e, a) {
    "use strict";
    return document.addEventListener(e, a, false);
};
var listeners = function () {
    "use strict";
    addEv("click", action);
    addEv("mouseover", info);
};
var app = new Vue({
    el: "#app",
    data: {
        left: false,
        right: false,
        info: "Food Group Selections",
        infoColor: "",
        dairy: [
            {
                dairyId: 1,
                name: "butter",
                nutrient: "fat",
                dairyRed: "on"
            },
            {
                dairyId: 2,
                name: "cheese",
                nutrient: "fat"
            },
            {
                dairyId: 2,
                name: "cottage cheese",
                nutrient: "protein"
            },
            {
                dairyId: 3,
                name: "cream",
                nutrient: "fat"
            },
            {
                dairyId: 4,
                name: "milk",
                nutrient: "protein"
            },
            {
                dairyId: 5,
                name: "yogurt",
                nutrient: "protein"
            },
            {
                dairyId: 6,
                name: "whey",
                nutrient: "protein"
            },
            {
                dairyId: 6,
                name: "sour cream",
                nutrient: "fat"
            },
            {
                dairyId: 6,
                name: "butter milk",
                nutrient: "protein"
            }
        ],
        nuts: [
            {
                nutId: 1,
                name: "acorn",
                nutrient: "protein"
            },
            {
                nutId: 2,
                name: "almond",
                nutrient: "protein"
            },
            {
                nutId: 3,
                name: "brazil",
                nutrient: "fat"
            },
            {
                nutId: 4,
                name: "cashew",
                nutrient: "fat"
            },
            {
                nutId: 5,
                name: "coconut",
                nutrient: "fat"
            },
            {
                nutId: 6,
                name: "macadamia",
                nutrient: "fat"
            },
            {
                nutId: 7,
                name: "peanut",
                nutrient: "fat"
            },
            {
                nutId: 8,
                name: "pecan",
                nutrient: "fat"
            },
            {
                nutId: 9,
                name: "pine",
                nutrient: "fat"
            },
            {
                nutId: 10,
                name: "pistachio",
                nutrient: "fat"
            },
            {
                nutId: 11,
                name: "walnut",
                nutrient: "fat"
            }
        ],
        seeds: [
            {
                seedsId: 1,
                name: "caroway",
                nutrient: "protein"
            },
            {
                seedsId: 2,
                name: "chia",
                nutrient: "fat"
            },
            {
                seedsId: 3,
                name: "flax",
                nutrient: "fat"
            },
            {
                seedsId: 4,
                name: "hemp",
                nutrient: "protein"
            },
            {
                seedsId: 5,
                name: "poppy",
                nutrient: "protein"
            },
            {
                seedsId: 6,
                name: "pumpkin",
                nutrient: "protein"
            },
            {
                seedsId: 7,
                name: "sesame",
                nutrient: "protein"
            },
            {
                seedsId: 8,
                name: "squash",
                nutrient: "protein"
            },
            {
                seedsId: 9,
                name: "sunflower",
                nutrient: "protein"
            }
        ],
        sweetFruit: [
            {
                sweetFruitId: 1,
                name: "bananas",
                nutrient: "carbs"
            },
            {
                sweetFruitId: 2,
                name: "dates",
                nutrient: "carbs"
            },
            {
                sweetFruitId: 2,
                name: "figs",
                nutrient: "carbs"
            },
            {
                sweetFruitId: 2,
                name: "grapes",
                nutrient: "carbs"
            },
            {
                sweetFruitId: 2,
                name: "raisin",
                nutrient: "carbs"
            },
            {
                sweetFruitId: 2,
                name: "jackfruit",
                nutrient: "carbs"
            },
            {
                sweetFruitId: 2,
                name: "persimmoms",
                nutrient: "carbs"
            }
        ],
        acidFruit: [
            {
                acidFruitId: 1,
                name: "cranberry",
                nutrient: "carbs"
            },
            {
                acidFruitId: 2,
                name: "grapefruit",
                nutrient: "carbs"
            },
            {
                acidFruitId: 2,
                name: "lemons",
                nutrient: "carbs"
            },
            {
                sweetFruitId: 2,
                name: "lime",
                nutrient: "carbs"
            },
            {
                sweetFruitId: 2,
                name: "oranges",
                nutrient: "carbs"
            },
            {
                sweetFruitId: 2,
                name: "pineapple",
                nutrient: "carbs"
            },
            {
                sweetFruitId: 2,
                name: "pomegranate",
                nutrient: "carbs"
            },
            {
                sweetFruitId: 2,
                name: "strawberry",
                nutrient: "carbs"
            },
            {
                sweetFruitId: 2,
                name: "tangerine",
                nutrient: "carbs"
            },
            {
                sweetFruitId: 2,
                name: "tomato",
                nutrient: "carbs"
            }
        ],
        semiAcidFruit: [
            {
                semiAcidFruitId: 1,
                name: "apple",
                nutrient: "carbs"
            },
            {
                semiAcidFruitId: 2,
                name: "distilled water",
                nutrient: "neutral"
            },
            {
                semiAcidFruitId: 2,
                name: "mineral water",
                nutrient: "neutral"
            }
        ],
        restFruit: [
            {
                fruitId: 1,
                name: "apple",
                nutrient: "carbs"
            },
            {
                fruitId: 2,
                name: "apricot",
                nutrient: "carbs"
            },
            {
                fruitId: 5,
                name: "blackberry",
                nutrient: "carbs"
            },
            {
                fruitId: 6,
                name: "cherry",
                nutrient: "carbs"
            },
            {
                fruitId: 1,
                name: "date",
                nutrient: "carbs"
            },
            {
                fruitId: 1,
                name: "guava",
                nutrient: "guava"
            },
            {
                fruitId: 1,
                name: "mango",
                nutrient: "carbs"
            },
            {
                fruitId: 2,
                name: "mulberry",
                nutrient: "carbs"
            },
            {
                fruitId: 2,
                name: "papaya",
                nutrient: "carbs"
            },
            {
                fruitId: 1,
                name: "peach",
                nutrient: "carbs"
            },
            {
                fruitId: 1,
                name: "pear",
                nutrient: "carbs"
            },
            {
                fruitId: 1,
                name: "plumb",
                nutrient: "carbs"
            },
            {
                fruitId: 1,
                name: "prune",
                nutrient: "carbs"
            },
            {
                fruitId: 1,
                name: "raspberry",
                nutrient: "carbs"
            }
        ],
        herbs: [
            {
                herbsId: 1,
                name: "sage",
                nutrient: "carbs"
            },
            {
                herbsId: 2,
                name: "basil",
                nutrient: "carbs"
            },
            {
                herbsId: 1,
                name: "coriander",
                nutrient: "carbs"
            },
            {
                herbsId: 2,
                name: "saffron",
                nutrient: "carbs"
            },
            {
                herbsId: 1,
                name: "oregano",
                nutrient: "carbs"
            },
            {
                herbsId: 2,
                name: "parsley",
                nutrient: "carbs"
            },
            {
                herbsId: 1,
                name: "rosemary",
                nutrient: "carbs"
            },
            {
                herbsId: 2,
                name: "dill",
                nutrient: "carbs"
            },
            {
                herbsId: 1,
                name: "thyme",
                nutrient: "carbs"
            },
            {
                herbsId: 2,
                name: "fennel",
                nutrient: "carbs"
            },
            {
                herbsId: 1,
                name: "cumin",
                nutrient: "carbs"
            },
            {
                herbsId: 2,
                name: "bay leaf",
                nutrient: "carbs"
            },
            {
                herbsId: 1,
                name: "mint",
                nutrient: "carbs"
            },
            {
                herbsId: 2,
                name: "tarragon",
                nutrient: "carbs"
            },
            {
                herbsId: 1,
                name: "chives",
                nutrient: "carbs"
            },
            {
                herbsId: 2,
                name: "marjoram",
                nutrient: "carbs"
            },
            {
                herbsId: 1,
                name: "peppermint",
                nutrient: "carbs"
            },
            {
                herbsId: 2,
                name: "lemongrass",
                nutrient: "carbs"
            },
            {
                herbsId: 1,
                name: "sage",
                nutrient: "carbs"
            }
        ],
        sugar: [
            {
                sugarId: 1,
                name: "sugar",
                nutrient: "sugar",
                sugar: "100 %"
            },
            {
                sugarId: 2,
                name: "honey",
                nutrient: "sugar",
                sugar: "100 %"
            },
            {
                sugarId: 4,
                name: "maple syrup",
                nutrient: "sugar",
                sugar: "93 %"
            },
            {
                sugarId: 7,
                name: "corn syurp",
                nutrient: "sugar",
                sugar: "100 %"
            }
        ],
        water: [
            {
                waterId: 1,
                name: "water",
                nutrient: "none"
            },
            {
                waterId: 2,
                name: "distilled water",
                nutrient: "none"
            },
            {
                waterId: 2,
                name: "mineral water",
                nutrient: "none"
            }
        ],
        melon: [
            {
                melonId: 1,
                name: "cantaloupe",
                nutrient: "carb"
            },
            {
                melonId: 2,
                name: "honeydew",
                nutrient: "carb"
            },
            {
                nelonId: 2,
                name: "watermelon",
                nutrient: "carb"
            }
        ],
        meats: [
            {
                meatsId: 1,
                name: "beef",
                nutrient: "protein"
            },
            {
                meatsId: 2,
                name: "pork",
                nutrient: "protein"
            },
            {
                meatsId: 2,
                name: "bison",
                nutrient: "protein"
            },
            {
                meatsId: 2,
                name: "rabbit",
                nutrient: "protein"
            },
            {
                meatsId: 2,
                name: "deer",
                nutrient: "protein"
            },
            {
                meatsId: 2,
                name: "elk",
                nutrient: "protein"
            },
            {
                meatsId: 2,
                name: "sheep",
                nutrient: "protein"
            },
            {
                meatsId: 2,
                name: "veal",
                nutrient: "protein"
            }
        ],
        fish: [
            {
                fishId: 1,
                name: "cod",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "salmon",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "catfish",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "sardine",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "tuna",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "herring",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "mackerrel",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "swordfish",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "trout",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "anchovy",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "tilapia",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "halibut",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "grouper",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "haddock",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "barraimundi",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "snapper",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "eel",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "pike",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "croppie",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "bass",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "oysters",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "clams",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "shrimp",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "tuna",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "octopus",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "mussel",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "scallops",
                nutrient: "protein"
            },
            {
                fishId: 2,
                name: "caviar",
                nutrient: "protein"
            }
        ],
        poultry: [
            {
                poultryId: 1,
                name: "chicken",
                nutrient: "protein"
            },
            {
                poultaryId: 2,
                name: "pheasant",
                nutrient: "protein"
            },
            {
                poultaryId: 2,
                name: "duck",
                nutrient: "protein"
            },
            {
                poultryId: 2,
                name: "turkey",
                nutrient: "protein"
            },
            {
                poultryId: 2,
                name: "quail",
                nutrient: "protein"
            },
            {
                poultryId: 2,
                name: "goose",
                nutrient: "protein"
            },
            {
                poultryId: 2,
                name: "partridge",
                nutrient: "protein"
            },
            {
                poultryId: 2,
                name: "guinea fowl",
                nutrient: "protein"
            },
            {
                poultryId: 2,
                name: "eggs",
                nutrient: "protein"
            }
        ],
        liquids: [
            {
                liquidId: 1,
                name: "beer",
                nutrient: "carbs"
            },
            {
                liquidId: 2,
                name: "orange juice",
                nutrient: "acid"
            },
            {
                liquidId: 2,
                name: "cocao",
                nutrient: "carbs"
            },
            {
                liquidId: 2,
                name: "tea",
                nutrient: "neutral"
            },
            {
                liquidId: 2,
                name: "coffee",
                nutrient: "acid"
            },
            {
                liquidId: 2,
                name: "wine",
                nutrient: "protein"
            },
            {
                liquidId: 2,
                name: "liquor",
                nutrient: "carbs"
            },
            {
                liquidId: 2,
                name: "soda",
                nutrient: "carbs"
            },
            {
                liquidId: 2,
                name: "v-8 juice",
                nutrient: "carbs"
            },
            {
                liquidId: 2,
                name: "veg juice",
                nutrient: "carbs"
            },
            {
                liquidId: 2,
                name: "lemonade",
                nutrient: "acid"
            },
            {
                liquidId: 6,
                name: "vinegar",
                nutrient: "acid"
            }
        ],
        spices: [
            {
                spicesId: 1,
                name: "nutmeg",
                nutrient: "neutral"
            },
            {
                spicesId: 2,
                name: "ginger",
                nutrient: "neutral"
            },
            {
                spicesId: 2,
                name: "clove",
                nutrient: "neutral"
            },
            {
                spicesId: 2,
                name: "horseradish",
                nutrient: "neutral"
            },
            {
                spicesId: 2,
                name: "liquorice",
                nutrient: "neutral"
            },
            {
                spicesId: 2,
                name: "caraway",
                nutrient: "neutral"
            },
            {
                spicesId: 2,
                name: "celery",
                nutrient: "neutral"
            },
            {
                spicesId: 2,
                name: "horseradish",
                nutrient: "neutral"
            }
        ],
        grains: [
            {
                grainsId: 1,
                name: "corn",
                nutrient: "carbs"
            },
            {
                grainsId: 2,
                name: "barley",
                nutrient: "neutral"
            },
            {
                grainsId: 2,
                name: "quinola",
                nutrient: "carbs"
            },
            {
                grainsId: 2,
                name: "oats",
                nutrient: "carbs"
            },
            {
                grainsId: 2,
                name: "millet",
                nutrient: "carbs"
            },
            {
                grainsId: 2,
                name: "buckwheat",
                nutrient: "carbs"
            },
            {
                grainsId: 2,
                name: "rice",
                nutrient: "carbs"
            },
            {
                grainsId: 2,
                name: "rye",
                nutrient: "carbs"
            },
            {
                grainsId: 2,
                name: "flour",
                nutrient: "carbs"
            },
            {
                grainsId: 2,
                name: "wheat",
                nutrient: "carbs"
            },
            {
                grainsId: 2,
                name: "grout",
                nutrient: "carbs"
            },
            {
                grainsId: 2,
                name: "bulgur",
                nutrient: "carbs"
            },
            {
                grainsId: 2,
                name: "spelt",
                nutrient: "carbs"
            }
        ],
        starchy: [
            {
                starchyId: 1,
                name: "acorn squash",
                nutrient: "carbs"
            },
            {
                starchyId: 2,
                name: "green beans",
                nutrient: "carbs"
            },
            {
                starchyId: 2,
                name: "beets",
                nutrient: "carbs"
            },
            {
                starchyId: 1,
                name: "butternut squash",
                nutrient: "carbs"
            },
            {
                starchyId: 2,
                name: "corn",
                nutrient: "carbs"
            },
            {
                starchyId: 2,
                name: "green peas",
                nutrient: "carbs"
            },
            {
                starchyId: 1,
                name: "lima beans",
                nutrient: "carbs"
            },
            {
                starchyId: 2,
                name: "parsnips",
                nutrient: "carbs"
            },
            {
                starchyId: 2,
                name: "potatos",
                nutrient: "carbs"
            },
            {
                starchyId: 1,
                name: "pumpkin",
                nutrient: "carbs"
            },
            {
                starchyId: 2,
                name: "sweet potatoes",
                nutrient: "carbs"
            },
            {
                starchyId: 2,
                name: "yams",
                nutrient: "carbs"
            },
            {
                starchyId: 1,
                name: "carrots",
                nutrient: "carbs"
            }
        ],
        noStarch: [
            {
                vegetablesId: 1,
                name: "brocolli",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "alfalfa sprouts",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "artichoke",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "asparagas",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "bamboo shoots",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "bok choy",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "brussels sprouts",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "cabbage",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "cauliflower",
                nutrient: ["protein", "sugars"]
            },
            {
                vegetablesId: 2,
                name: "celery",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "cucumber",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "eggplant",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "garlic",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "green onions",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "leeks",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "lettuce",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "mushroom",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "okra",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "onions",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "red pepper",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "jalapeno",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "radish",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "rhubarb",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "spinach",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "swiss chard",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "tomatos",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "turnips",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "watercress",
                nutrient: "neutral"
            },
            {
                vegetablesId: 2,
                name: "zucchini",
                nutrient: "neutral"
            }
        ],
        fatty: [
            {
                fattyId: 1,
                name: "vegetable oil",
                nutrient: "fat"
            },
            {
                fattyId: 2,
                name: "avocado",
                nutrient: "fat"
            },
            {
                fattyId: 7,
                name: "coconut",
                nutrient: "fat"
            },
            {
                fattyId: 7,
                name: "olives",
                nutrient: "fat"
            },
            {
                fattyId: 2,
                name: "soybean oil",
                nutrient: "fat"
            },
            {
                fattyId: 2,
                name: "corn oil",
                nutrient: "fat"
            }
        ],
        protein: [
            {
                proteinId: 1,
                name: "beans",
                nutrient: "protein"
            },
            {
                proteinId: 2,
                name: "chickpeas",
                nutrient: "protein"
            },
            {
                proteinId: 2,
                name: "sweet peas",
                nutrient: "protein"
            },
            {
                proteinId: 2,
                name: "lintils",
                nutrient: "protein"
            },
            {
                proteinId: 2,
                name: "edamame",
                nutrient: "protein"
            },
            {
                proteinId: 2,
                name: "garbanzo beans",
                nutrient: "protein"
            },
            {
                proteinId: 2,
                name: "fava beans",
                nutrient: "protein"
            }
        ],
        expLeft: [],
        expRight: [],
        list: ["dairy", "Nuts", "SweetFruit", "AcidFruit", "SemiAcidFruit", "RestFruit", "Sugars", "Water", "Melon", "Liquids"],
        activeColor: "",
        clickColor: "",
        on: false
    },
    methods: {
        chg: function (exp, event) {
            "use strict";
            console.log(event.target.textContent);
            console.log(event.target);

            if (this.left === false && this.right === false) {

                if (this.list.includes(event.target.textContent)) {
                    this.expLeft = exp;
                    this.left = true;
                    this.activeColor = "yellow";
                    event.target.style.backgroundColor = "red";
                    this.infoColor = "red";
                    this.info = "These food items are best eaten by themselves. Give them space from other food.";
                    this.right = true;
                    return;

                } else {
                    this.expLeft = exp;
                    console.log(Object.keys(exp[1]));
                    this.left = true;
                    // this.on = true;
                    this.activeColor = "yellow";
                    event.target.style.backgroundColor = "orange";
                    return;
                }

            } else if (this.left === true && this.right === false) {

                if (this.list.includes(event.target.textContent)) {
                    this.expRight = exp;
                    this.right = true;
                    this.activeColor = "yellow";
                    event.target.style.backgroundColor = "red";
                    this.infoColor = "red";
                    this.info = "Do not eat these foods at the same time.";
                    this.right = true;
                    return;

                } else {
                    event.target.style.backgroundColor = "orange";
                    this.expRight = exp;
                    this.right = true;
                    this.info = "These food items maybe combined. Click on the two items for detail rule.";
                    this.infoColor = "orange";

                    if ((this.expRight === this.fish && this.expLeft === this.meats) || (this.expRight === this.meats && this.expLeft === this.fish)) {
                        this.info = "Fish and meat do not combine.  Do not eat these food groups at the sametime.";
                        this.infoColor = "red";
                        event.target.style.backgroundColor = "red";

                    } else if ((this.expRight === this.fish && this.expLeft === this.poultry) || (this.expRight === this.poultry && this.expLeft === this.fish)) {
                        this.info = "Fish and poultry do not combine.  Do not eat these food groups at the sametime.";
                        this.infoColor = "red";
                        event.target.style.backgroundColor = "red";

                    } else if ((this.expRight === this.meats && this.expLeft === this.poultry) || (this.expRight === this.poultry && this.expLeft === this.meats)) {
                        this.info = "Meat and poultry do not combine.  Do not eat these food groups at the sametime.";
                        this.infoColor = "red";
                        event.target.style.backgroundColor = "red";

                    } else if ((this.expRight === this.meats && this.expLeft === this.noStarch) || (this.expRight === this.noStarch && this.expLeft === this.meats)) {
                        this.info = "Meat and no Starch vegtables can work together. Click on two items for a detail rule";
                        this.infoColor = "#00ff00";
                        event.target.style.backgroundColor = "#00ff00";

                    } else if ((this.expRight === this.fish && this.expLeft === this.noStarch) || (this.expRight === this.noStarch && this.expLeft === this.fish)) {
                        this.info = "Fish and no Starch vegtables can work together. Click on two items for a detail rule";
                        this.infoColor = "#00ff00";
                        event.target.style.backgroundColor = "#00ff00";

                    } else if ((this.expRight === this.poultry && this.expLeft === this.noStarch) || (this.expRight === this.noStarch && this.expLeft === this.poultry)) {
                        this.info = "Poultry and no Starch vegtables can work together. Click on two items for a detail rule";
                        this.infoColor = "#00ff00";
                        event.target.style.backgroundColor = "#00ff00";
                    }

                    return;
                }
            } else {
                return;
            }
        },
        getMe: function (item) {
            "use strict";
            console.log(Object.keys(item));
            console.log(item.name, item.nutrient);
            event.target.style.backgroundColor = "orange";
            return;
        }
    }
});

function to(evt) {
    "use strict";
    location.reload();
    window.scrollTo(0, 0);
}
var listeners = function () {
    getId("top").addEventListener("click", to, false);
};
window.onload = listeners;


