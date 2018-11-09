var venture1pps = 3;
var venture1UpgradeCost = 15;
var venture1ppsScale = 1.1;
var venture1UpgradeScale = 3;

var venture2pps = 1;
var venture2UpgradeCost = 35;
var venture2ppsScale = 1.4;
var venture2UpgradeScale = 5;

var venture3pps = 4;
var venture3UpgradeCost = 100;
var venture3ppsScale = 2;
var venture3UpgradeScale = 4;

var funds = 100;

/*
document.getElementById("venture1").innerHTML = "PROFIT/S: $" + venture1pps;
document.getElementById("venture1up").innerHTML = "UPGRADE: $" + venture1UpgradeCost;
document.getElementById("venture2").innerHTML = "PROFIT/S: $" +venture2pps;
document.getElementById("venture2up").innerHTML = "UPGRADE: $" + venture2UpgradeCost;
document.getElementById("venture3").innerHTML = "PROFIT/S: $" +venture3pps;
document.getElementById("venture3up").innerHTML = "UPGRADE: $" + venture3UpgradeCost;
*/

/*
    These are the functions run whenever the upgrade button is clicked in the specific
    venture. Further down the line these fucntions will pull information from that 
    specific venture class. 
*/
function venture1click(){
    if (funds >= venture1UpgradeCost){
        venture1pps = Math.ceil(venture1pps * venture1ppsScale);
        funds = funds - venture1UpgradeCost;
        venture1UpgradeCost = Math.ceil(venture1UpgradeCost * venture1UpgradeScale);
        document.getElementById("venture1").innerHTML = "PROFIT/S: $" +venture1pps;
        document.getElementById("venture1up").innerHTML = "UPGRADE: $" + venture1UpgradeCost;
    }
}

function venture2click(){
    if (funds >= venture2UpgradeCost){
        venture2pps = Math.ceil(venture2pps * venture2ppsScale);
        funds = funds - venture2UpgradeCost;
        venture2UpgradeCost = Math.ceil(venture2UpgradeCost * venture2UpgradeScale);
        document.getElementById("venture2").innerHTML = "PROFIT/S: $" +venture2pps;
        document.getElementById("venture2up").innerHTML = "UPGRADE: $" + venture2UpgradeCost;
    }
}

function venture3click(){
    if (funds >= venture3UpgradeCost){
        venture3pps = Math.ceil(venture3pps * venture3ppsScale);
        funds = funds - venture3UpgradeCost;
        venture3UpgradeCost = Math.ceil(venture3UpgradeCost * venture3UpgradeScale);
        document.getElementById("venture3").innerHTML = "PROFIT/S: $" +venture3pps;
        document.getElementById("venture3up").innerHTML = "UPGRADE: $" + venture3UpgradeCost;
    }
}
/*
    Calculate funds will be running in 0.1s intervals however, the funds will be calculated in 1s
    intervals. So to achieve this we multiply funds by 0.10 to account for the 0.1s update intervals.
    The funciton is updated so frequntly for visual appeal, any fast and the script will just stop
    running. 
*/
function calculateFunds(){
    funds = funds + Math.ceil((venture3pps + venture2pps + venture1pps)*0.10);
    //console.log(funds);
    document.getElementById("funds").innerHTML = "FUNDS: $" + funds;
}

setInterval(calculateFunds, 100);