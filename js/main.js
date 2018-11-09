

// ----- Global Variables ----------
funds = 0;
var portfolio = [];
// ---------------------------------
// ------ For testing new interface ---
// Start off with two ventures for now 
// to demo the interface and make sure everything
// is working right

portfolio.push(new Farmer());
portfolio.push(new Sports());

// ------ Upgrade Button Functions ----
function slot1(){
    if (portfolio.length >= 1){
        portfolio[0].upgrade();
    }
}

function slot2(){
    if (portfolio.length >= 2){
        portfolio[1].upgrade();
    }

}

function slot3(){
    if (portfolio.length >= 3){
        portfolio[2].upgrade();
    }

}

function slot4(){
    if (portfolio.length >= 4){
        portfolio[3].upgrade();
    }

}

function slot5(){
    if (portfolio.length >= 5){
        portfolio[4].upgrade();
    }

}
// ------------------------------------


function calculateFunds(){
    for (i = 0; i < portfolio.length; ++i){
        funds = funds + Math.ceil((portfolio[i].getPPS())*0.10);
    }
    // This is where it would update the value of funds
    //console.log(funds);
}

// Currently set a 100 ms interval for smooth updating
// funds are still being calculated at 1 second intervals
// this is why the funds are being multiplied by 0.10
setInterval(calculateFunds, 100); 

// Current venture classes are: 
// FoodService, Farmer, FoodCompany, Professional, Producer, Sports, 
// Branding, Fame, Franchise, 
/*
    The relevant class methods are upgrade() and getInfo():
     - upgrade(): upgrades the venture if there is enough money available
        in the funds, the upgrade cost will be visible in getInfo().
     - getInfo(): returns a string array with name, pps, current level, and upgrade cost
        in that order.
*/
// Needs to be imported like this: 
/*
      <script src="classI.js"></script>
      <script src="classV.js"></script>
      <script src="main.js"></script>
*/