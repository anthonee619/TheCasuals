

// ----- Global Variables ----------
funds = 20;
var portfolio = [];
var availableVentures = [new FoodService(), 
new Farmer(), new FoodCompany(), new Professional(),
new Producer(), new Sports(), new Branding(),
new Fame(), new Franchise()];
selectedVenture = 0; // First venture selected
// ---------------------------------
// ------ For testing new interface ---
// Start off with two ventures for now
// to demo the interface and make sure everything
// is working right

//portfolio.push(new Farmer());
//portfolio.push(new Sports());
// ------ Select a new venture ---------
/*
var a = document.getElementById("newVenture")
var frag = document.createDocumentFragment();
var temp = document.createElement("div");
temp.innerHTML = "<h2>Hello</h2>";

frag.appendChild(temp.firstChild);
a.appendChild(frag);
//a.innerHTML = "<h2>Hello</h2>";
*/

function revealInfo(){
    document.getElementById("ventureName").hidden = false;
    document.getElementById("industryName").hidden = false;
    document.getElementById("miscInfo").hidden = false;
    document.getElementById("upgradeButton").hidden = false;
    document.getElementById("upgradeCostInfo").hidden = false;
}

function hideInfo(){
    document.getElementById("ventureName").hidden = true;
    document.getElementById("industryName").hidden = true;
    document.getElementById("miscInfo").hidden = true;
    document.getElementById("upgradeButton").hidden = true;
    document.getElementById("upgradeCostInfo").hidden = true;
}


function displayAvailableVentures(){
    var a = document.getElementById("newVenture")
    document.getElementById("newVenture").hidden = false;
    hideInfo();
    var newHTML = "<h1>Businesses For Sale in Compton, CA</h1>";
    var name = "";
    var cost = 0;
    for (i = 0; i < availableVentures.length; i++){
        name = availableVentures[i].getInfo()[0];
        cost = availableVentures[i].getInfo()[4];
        newHTML += "<h3>"+name+"</h3>"
        newHTML += "<button type = \"button\" onclick = \"addVenture(" + i+")\">Purchase: "+cost+ "</button>"
    }
    a.innerHTML = newHTML;
}


function addVenture(index){
    // take selected venture and put it into the portfolio
    if (funds >= availableVentures[index].getInfo()[4]){
        funds = funds - availableVentures[index].getInfo()[4];
        portfolio.push(availableVentures[index]);
        availableVentures.splice(index,1);
        displayAvailableVentures();
        console.log(index);
        updateInfo();
    }
    // Maybe an error message should appear????
}
// -------------------------------------
// ------ Selector ---------------------
function changeSelect(newSelect){
    selectedVenture = newSelect;
    console.log(selectedVenture);
    updateInfo();
}

// ------ Upgrade Button Functions ----

function ventureUpgrade(){
    if (selectedVenture <= (portfolio.length-1) ){
        console.log("upgrade");
        portfolio[selectedVenture].upgrade();
    }
    updateInfo();
}
// ------------------------------------
// ------ Update Information ----------
function updateInfo(){
    console.log("updateInfo");
    if (selectedVenture > (portfolio.length -1)){
        //document.getElementById("ventureInfo").style.visibility = "hidden";
        displayAvailableVentures();
    }
    else {
        var a = document.getElementById("newVenture").hidden = true;
        revealInfo();
        $("#cp").text(portfolio[selectedVenture].getPPS());
        $("#upgrade").text(portfolio[selectedVenture].getInfo()[3]);
        $("#ventureName").text(portfolio[selectedVenture].getInfo()[0]);
    }
    console.log(document.getElementById("ventureInfo").hidden)
}
// function

//$("#ventureName").text("hello");


function calculateFunds(){
    for (i = 0; i < portfolio.length; ++i){
        funds = funds + Math.ceil((portfolio[i].getPPS())*0.10);
    }
    // This is where it would update the value of funds
    $("#funds").text(funds)
}

// Currently set a 100 ms interval for smooth updating
// funds are still being calculated at 1 second intervals
// this is why the funds are being multiplied by 0.10
updateInfo();
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
/*


<button type = "button" onclick="venture1click()"
                                id="venture1up"
                                class="btn btn-primary btn-lg">UPGRADE: $10</button>
                                */
