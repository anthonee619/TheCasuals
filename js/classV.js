
class Venture extends Industry {
    constructor() {
        //this.name = name;
        super();
        this.cost = 10;
        this.na = "Alice's Amazing Yeast Shop";
        this.pps = 10;
        this.upgradeCost = 10;
        this.ppsUpgradeScale = 1.5;
        this.upgradeCostScale = 2.3;
        this.level = 1;
    }
    
    upgrade(){
        // Functon takes care of all the calculations
        // including recalculating PPS and Upgradecost
        
    }

    getPPS(){
        return this.pps;
    }

    getLevel(){
        return this.level;
    }
    getName(){
        return this.na;
    }
}

// Agriculture venture 1
// Work in the food industry (i.e. restaurant)
class FoodService extends Industry {
    constructor() {
        //this.name = name;
        super();
        this.cost = 10;
        this.na = "Alice's Amazing Yeast Shop";
        this.pps = 10;
        this.upgradeCost = 10;
        this.ppsUpgradeScale = 1.5;
        this.upgradeCostScale = 2.3;
        this.level = 1;
    }

    /* This function will calculate a new PPS and Upgrade Cost based on the scales
    that are declared in the constructor.
    Return 1 if successfully upgraded to next level. 
    Return 0 if not enough funds (or max level has been reached: not yet implemented).
    */
   upgrade(){
    if (funds >= this.upgradeCost){
        this.pps = Math.ceil(this.pps * this.ppsUpgradeScale);
        funds = funds - this.upgradeCost;
        this.upgradeCost = Math.ceil(this.upgradeCost * this.upgradeCostScale);
        //document.getElementById("venture2").innerHTML = "PROFIT/S: $" +venture2pps;
        //document.getElementById("venture2up").innerHTML = "UPGRADE: $" + venture2UpgradeCost;
        return 1;
    }
    return 0;
    }

    /* Returns the PPS, used for calculating total */
    getPPS(){
        return this.pps;
    }

    /* Returns a string array with name, pps, current level, and upgrade cost
    in that order */
    getInfo(){
        var infoString = [];
        infoString.push(this.na);
        infoString.push(this.pps);
        infoString.push(this.level);
        infoString.push(this.upgradeCost);
        return infoString;
    }
}

// Agriculture venture 2
// Grow own food (i.e. garden, farm)
class Farmer extends Industry {
    constructor() {
        //this.name = name;
        super();
        this.cost = 20;
        this.na = "Exoticz";
        this.pps = 10;
        this.upgradeCost = 20;
        this.ppsUpgradeScale = 1.5;
        this.upgradeCostScale = 2.3;
        this.level = 1;
    }

    /* This function will calculate a new PPS and Upgrade Cost based on the scales
    that are declared in the constructor.
    Return 1 if successfully upgraded to next level. 
    Return 0 if not enough funds (or max level has been reached: not yet implemented).
    */
   upgrade(){
    if (funds >= this.upgradeCost){
        this.pps = Math.ceil(this.pps * this.ppsUpgradeScale);
        funds = funds - this.upgradeCost;
        this.upgradeCost = Math.ceil(this.upgradeCost * this.upgradeCostScale);
        //document.getElementById("venture2").innerHTML = "PROFIT/S: $" +venture2pps;
        //document.getElementById("venture2up").innerHTML = "UPGRADE: $" + venture2UpgradeCost;
        return 1;
    }
    return 0;
    }

    /* Returns the PPS, used for calculating total */
    getPPS(){
        return this.pps;
    }

    /* Returns a string array with name, pps, current level, and upgrade cost
    in that order */
    getInfo(){
        var infoString = [];
        infoString.push(this.na);
        infoString.push(this.pps);
        infoString.push(this.level);
        infoString.push(this.upgradeCost);
        return infoString;
    }
}

// Agriculture venture 3
// Create own food company (i.e. Brewery)
class FoodCompany extends Industry {
    constructor() {
        //this.name = name;
        super();
        this.cost = 30;
        this.na = "Ronald McDonald's Beer";
        this.pps = 10;
        this.upgradeCost = 30;
        this.ppsUpgradeScale = 1.5;
        this.upgradeCostScale = 2.3;
        this.level = 1;
    }

    /* This function will calculate a new PPS and Upgrade Cost based on the scales
    that are declared in the constructor.
    Return 1 if successfully upgraded to next level. 
    Return 0 if not enough funds (or max level has been reached: not yet implemented).
    */
   upgrade(){
    if (funds >= this.upgradeCost){
        this.pps = Math.ceil(this.pps * this.ppsUpgradeScale);
        funds = funds - this.upgradeCost;
        this.upgradeCost = Math.ceil(this.upgradeCost * this.upgradeCostScale);
        //document.getElementById("venture2").innerHTML = "PROFIT/S: $" +venture2pps;
        //document.getElementById("venture2up").innerHTML = "UPGRADE: $" + venture2UpgradeCost;
        return 1;
    }
    return 0;
    }

    /* Returns the PPS, used for calculating total */
    getPPS(){
        return this.pps;
    }

    /* Returns a string array with name, pps, current level, and upgrade cost
    in that order */
    getInfo(){
        var infoString = [];
        infoString.push(this.na);
        infoString.push(this.pps);
        infoString.push(this.level);
        infoString.push(this.upgradeCost);
        return infoString;
    }
}

// Entertainment venture 1
// Become professional athlete/performer
class Professional extends Industry {
    constructor() {
        //this.name = name;
        super();
        this.cost = 10;
        this.na = "DoubleLift";
        this.pps = 10;
        this.upgradeCost = 10;
        this.ppsUpgradeScale = 1.5;
        this.upgradeCostScale = 2.3;
        this.level = 1;
    }

    /* This function will calculate a new PPS and Upgrade Cost based on the scales
    that are declared in the constructor.
    Return 1 if successfully upgraded to next level. 
    Return 0 if not enough funds (or max level has been reached: not yet implemented).
    */
   upgrade(){
    if (funds >= this.upgradeCost){
        this.pps = Math.ceil(this.pps * this.ppsUpgradeScale);
        funds = funds - this.upgradeCost;
        this.upgradeCost = Math.ceil(this.upgradeCost * this.upgradeCostScale);
        //document.getElementById("venture2").innerHTML = "PROFIT/S: $" +venture2pps;
        //document.getElementById("venture2up").innerHTML = "UPGRADE: $" + venture2UpgradeCost;
        return 1;
    }
    return 0;
    }

    /* Returns the PPS, used for calculating total */
    getPPS(){
        return this.pps;
    }

    /* Returns a string array with name, pps, current level, and upgrade cost
    in that order */
    getInfo(){
        var infoString = [];
        infoString.push(this.na);
        infoString.push(this.pps);
        infoString.push(this.level);
        infoString.push(this.upgradeCost);
        return infoString;
    }
}

// Entertainment venture 2
// Produce your own content
class Producer extends Industry {
    constructor() {
        //this.name = name;
        super();
        this.cost = 20;
        this.na = "Patrick Production";
        this.pps = 10;
        this.upgradeCost = 20;
        this.ppsUpgradeScale = 1.5;
        this.upgradeCostScale = 2.3;
        this.level = 1;
    }

    /* This function will calculate a new PPS and Upgrade Cost based on the scales
    that are declared in the constructor.
    Return 1 if successfully upgraded to next level. 
    Return 0 if not enough funds (or max level has been reached: not yet implemented).
    */
   upgrade(){
    if (funds >= this.upgradeCost){
        this.pps = Math.ceil(this.pps * this.ppsUpgradeScale);
        funds = funds - this.upgradeCost;
        this.upgradeCost = Math.ceil(this.upgradeCost * this.upgradeCostScale);
        return 1;
    }
    return 0;
    }

    /* Returns the PPS, used for calculating total */
    getPPS(){
        return this.pps;
    }

    /* Returns a string array with name, pps, current level, and upgrade cost
    in that order */
    getInfo(){
        var infoString = [];
        infoString.push(this.na);
        infoString.push(this.pps);
        infoString.push(this.level);
        infoString.push(this.upgradeCost);
        return infoString;
    }
}

// Entertainment venture 3
// Manage/own sports team
class Sports extends Industry {
    constructor() {
        //this.name = name;
        super();
        this.cost = 30;
        this.na = "Barcelona";
        this.pps = 10;
        this.upgradeCost = 30;
        this.ppsUpgradeScale = 1.5;
        this.upgradeCostScale = 2.3;
        this.level = 1;
    }

    /* This function will calculate a new PPS and Upgrade Cost based on the scales
    that are declared in the constructor.
    Return 1 if successfully upgraded to next level. 
    Return 0 if not enough funds (or max level has been reached: not yet implemented).
    */
   upgrade(){
    if (funds >= this.upgradeCost){
        this.pps = Math.ceil(this.pps * this.ppsUpgradeScale);
        funds = funds - this.upgradeCost;
        this.upgradeCost = Math.ceil(this.upgradeCost * this.upgradeCostScale);
        return 1;
    }
    return 0;
    }

    /* Returns the PPS, used for calculating total */
    getPPS(){
        return this.pps;
    }

    /* Returns a string array with name, pps, current level, and upgrade cost
    in that order */
    getInfo(){
        var infoString = [];
        infoString.push(this.na);
        infoString.push(this.pps);
        infoString.push(this.level);
        infoString.push(this.upgradeCost);
        return infoString;
    }
}

// Retail venture 1
// Create your own Brand
class Branding extends Industry {
    constructor() {
        //this.name = name;
        super();
        this.cost = 10;
        this.na = "Supreme...";
        this.pps = 10;
        this.upgradeCost = 10;
        this.ppsUpgradeScale = 1.5;
        this.upgradeCostScale = 2.3;
        this.level = 1;
    }

    /* This function will calculate a new PPS and Upgrade Cost based on the scales
    that are declared in the constructor.
    Return 1 if successfully upgraded to next level. 
    Return 0 if not enough funds (or max level has been reached: not yet implemented).
    */
   upgrade(){
    if (funds >= this.upgradeCost){
        this.pps = Math.ceil(this.pps * this.ppsUpgradeScale);
        funds = funds - this.upgradeCost;
        this.upgradeCost = Math.ceil(this.upgradeCost * this.upgradeCostScale);
        return 1;
    }
    return 0;
    }

    /* Returns the PPS, used for calculating total */
    getPPS(){
        return this.pps;
    }

    /* Returns a string array with name, pps, current level, and upgrade cost
    in that order */
    getInfo(){
        var infoString = [];
        infoString.push(this.na);
        infoString.push(this.pps);
        infoString.push(this.level);
        infoString.push(this.upgradeCost);
        return infoString;
    }
}

// Retail venture 2
// Become a famous 
class Fame extends Industry {
    constructor() {
        //this.name = name;
        super();
        this.cost = 20;
        this.na = "Pokemon Trainer";
        this.pps = 10;
        this.upgradeCost = 20;
        this.ppsUpgradeScale = 3;
        this.upgradeCostScale = 2.3;
        this.level = 1;
    }
    /* This function will calculate a new PPS and Upgrade Cost based on the scales
    that are declared in the constructor.
    Return 1 if successfully upgraded to next level. 
    Return 0 if not enough funds (or max level has been reached: not yet implemented).
    */
   upgrade(){
    if (funds >= this.upgradeCost){
        this.pps = Math.ceil(this.pps * this.ppsUpgradeScale);
        funds = funds - this.upgradeCost;
        this.upgradeCost = Math.ceil(this.upgradeCost * this.upgradeCostScale);
        return 1;
    }
    return 0;
    }

    /* Returns the PPS, used for calculating total */
    getPPS(){
        return this.pps;
    }

    /* Returns a string array with name, pps, current level, and upgrade cost
    in that order */
    getInfo(){
        var infoString = [];
        infoString.push(this.na);
        infoString.push(this.pps);
        infoString.push(this.level);
        infoString.push(this.upgradeCost);
        return infoString;
    }

}

// Retail venture 3
// Franchising
class Franchise extends Industry {
    constructor() {
        //this.name = name;
        super();
        this.cost = 30;
        this.na = "Bob's Best Buysss";
        this.pps = 10;
        this.upgradeCost = 30;
        this.ppsUpgradeScale = 1.5;
        this.upgradeCostScale = 2.3;
        this.level = 1;
    }

    /* This function will calculate a new PPS and Upgrade Cost based on the scales
    that are declared in the constructor.
    Return 1 if successfully upgraded to next level. 
    Return 0 if not enough funds (or max level has been reached: not yet implemented).
    */
    upgrade(){
        if (funds >= this.upgradeCost){
            this.pps = Math.ceil(this.pps * this.ppsUpgradeScale);
            funds = funds - this.upgradeCost;
            this.upgradeCost = Math.ceil(this.upgradeCost * this.upgradeCostScale);
            return 1;
        }
        return 0;
    }

    /* Returns the PPS, used for calculating total */
    getPPS(){
        return this.pps;
    }

    /* Returns a string array with name, pps, current level, and upgrade cost
    in that order */
    getInfo(){
        var infoString = [];
        infoString.push(this.na);
        infoString.push(this.pps);
        infoString.push(this.level);
        infoString.push(this.upgradeCost);
        return infoString;
    }
    
}

    