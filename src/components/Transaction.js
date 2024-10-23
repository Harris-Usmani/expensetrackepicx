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

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={`flex justify-between bg-white shadow-md p-2 mb-2 ${transaction.amount < 0 ? 'border-l-4 border-red-500' : 'border-l-4 border-green-500'}`}>
      {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="bg-red-500 text-white text-lg rounded px-2 ml-4 opacity-0 transition-opacity duration-300 hover:opacity-100">x</button>
    </li>
  );
};
