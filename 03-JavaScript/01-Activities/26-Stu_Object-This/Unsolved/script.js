ddssss; //
// TODO: What does 'this' refer to?d
console.log(this);

// TODO: What does 'this' refer to?
function helloThis() {
  console.log("Inside this function, this is " + this);
}

// TODO: What will this log?
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};
ssss;
// TODO: What will this log?
var investor = {
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();