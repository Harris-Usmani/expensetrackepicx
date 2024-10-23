import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (data) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: data.text,
      amount: +data.amount,
    };

    addTransaction(newTransaction);
    reset();
  };

  return (
    <>
      <h3 className="border-b border-gray-300 pb-2 mb-10">Add new transaction</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-10">
        <div>
          <label className="block mb-2">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            {...register('text', { required: true })} 
            className="border border-gray-300 rounded py-2 px-3 w-full"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="amount" className="block mb-2">
            Amount: <br />
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            {...register('amount', { required: true })}
            className="border border-gray-300 rounded py-2 px-3 w-full"
          />
        </div>
        <button className="bg-purple-500 text-white py-2 px-4 rounded mt-4 w-full">Add transaction</button>
      </form>
    </>
  );
};
