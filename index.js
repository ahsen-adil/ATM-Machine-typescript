#! /usr/bin/env node
import inquirer from "inquirer";
let myBlance = 10000;
const myPin = 1234;
console.log("pin is 1234 ");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select option",
            choices: ["withdraw", "check blance", "fastCash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter your amount"
            }
        ]);
        // =, -=, +=
        if (myBlance >= amountAns.amount) {
            console.log(myBlance -= amountAns.amount);
            console.log(`"your remaining blance is " ${myBlance}`);
        }
        else {
            console.log("insufficiant blance");
        }
    }
    else if (operationAns.operation === "check blance") {
        console.log(`"your balance is: "${myBlance} `);
    }
    else if (operationAns.operation === "fastCash") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amounts",
                type: "list",
                message: "select your amount",
                choices: [500, 1000, 5000, 10000]
            }
        ]);
        // =, -=, +=
        myBlance -= amountAnswer.amounts;
        console.log(`"your blance is "${myBlance}`);
    }
}
else {
    console.log("incurrect pin number");
}
