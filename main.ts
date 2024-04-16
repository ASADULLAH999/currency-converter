#!/usr/bin/env/node


import inquirer from "inquirer";


let currency: any = {
  USD: 1,
  EUR: 0.84,
  IND: 65.32,
  PKR: 280,
  JPY: 127.96,
};

const answer = await inquirer.prompt([
  {
    name: "from",
    message: "enter from currency",
    type: "list",
    choices: ["USD", "EUR", "IND", "PKR", "JPY"],
  },
  {
    name: "to",
    message: "enter to currency",
    type: "list",
    choices: ["USD", "EUR", "IND", "PKR", "JPY"],
  },
  {
    name: "amount",
    message: "enter your amount",
    type: "number",
  },
]);
let fromamount = currency[answer.from];
let toamount = currency[answer.to];
let amount = answer.amount;
let basamount = amount / fromamount;
let convertamount = basamount * toamount;
console.log(convertamount);
