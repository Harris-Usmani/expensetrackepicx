import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <div className="flex justify-between bg-white shadow-md p-5 mb-5">
      <div>
        <h4 className="uppercase">Income</h4>
        <p className="text-green-500">{moneyFormatter(income)}</p>
      </div>
      <div>
        <h4 className="uppercase">Expense</h4>
        <p className="text-red-500">{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
};
