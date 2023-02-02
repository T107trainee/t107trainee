console.log();
let heading: string = '---------- Welcome to Bank Rate Calculator ----------';
console.log(heading);
console.log();
let heading1: string = 'please press Ctrl+C to exit any time';
console.log(heading1);
console.log();
enum ProfitType {
  monthly = 'monthly',
  quarterly = 'quarterly',
  Semiannually = 'semi-annually',
  annually = 'annually',
}

let accountnumber: string;
let accountholdername: string;
let accountbalance: number;
let monthlyprofitrate: number;
let quarterlyprofitrate: number;
let semiannualprofitrate: number;
let annualprofitrate: number;
let amountofprofit: number;
let totalamountwithprofit: number;
let ouputmessage: string;
let profitRate: number;
let profitType: ProfitType;

profitType = ProfitType.Semiannually;
profitRate = 0;

accountnumber = 'SB12345';
accountholdername = 'John Smith';
accountbalance = 4000000;

switch (profitType as ProfitType) {
  case ProfitType.monthly:
    profitRate = 4;
    break;
  case ProfitType.quarterly:
    profitRate = 6;
    break;
  case ProfitType.Semiannually:
    profitRate = 8;
    break;
  case ProfitType.annually:
    profitRate = 10;
    break;
}

let statement: string = `Please specify your account number? ... ${accountnumber}`;
let statement1: string = `Name on your bank account? ...  ${accountholdername}`;
let statement2: string = `Current amount in your bank account: ... ${accountbalance}`;
let statement3: string = `Please Select a Profit Type For amount appreciation: >> ${profitType}`;

console.log(statement);
console.log(statement1);
console.log(statement2);
console.log(statement3);
console.log();

let result: string = 'RESULT';
console.log(result);

let line: string = '------';
console.log(line);

amountofprofit = (accountbalance * profitRate) / 100;
totalamountwithprofit = accountbalance + amountofprofit;
ouputmessage = `${accountholdername} gets ${amountofprofit} with the interest rate of ${profitRate}% for  first six months (${profitType}).`;
let outputmessage1: string = `Total amount in bank becomes: ${totalamountwithprofit}`;
console.log(ouputmessage);
console.log(outputmessage1);
