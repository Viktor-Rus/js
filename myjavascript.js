let money = +prompt("Ваш бюджет на месяц?"),
    time= prompt("Введите дату в формате YYYY-MM-DD");

let a =prompt("Введите обязательную статью расходов в этом месяце");
let b =+prompt("Во сколько обойдется?");


let appDate = {
    money,
    time,
    expenses: {
        a,
        b
    },
    optionalExpenses: {},
    income: [],
    savings: false
    
};

let c = (money - b)/30;

alert(c);

