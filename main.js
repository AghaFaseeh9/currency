#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    unitedStatesDollar: 1.0,
    euro: 0.921527,
    britishPound: 0.790775,
    indianRupee: 83.271817,
    australianDollar: 1.514106,
    pakistanRupee: 277.56,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter the currency from which you want to exchange?",
        type: "list",
        choices: [
            "unitedStatesDollar",
            "euro",
            "britishPound",
            "indianRupee",
            "australianDollar",
            "pakistanRupee",
        ],
    },
    {
        name: "to",
        message: "Enter the currency to which you want to exchange?",
        type: "list",
        choices: [
            "unitedStatesDollar",
            "euro",
            "britishPound",
            "indianRupee",
            "australianDollar",
            "pakistanRupee",
        ],
    },
    {
        name: "amount",
        message: "Enter the amount you want to exchange?",
        type: "number",
    },
]);
let fromCurrency = currency[user_answer.from];
let toCurrency = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromCurrency;
let convertedAmount = baseAmount * toCurrency;
console.log(convertedAmount.toFixed());
