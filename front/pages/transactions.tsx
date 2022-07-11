import { useEffect, useState } from "react";
import { transactionsStore } from "./../rx_store/store";
import { TransactionsHistory } from "./../rx_store/transaction_history.interface";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    transactionsStore.subscribe(setTransactions);
    transactionsStore.init();
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND}/staking`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        const final = actualData as unknown as TransactionsHistory[];
        transactionsStore.sendMessage(final);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              event
            </th>
            <th scope="col" className="px-6 py-3">
              amount (wei)
            </th>
            <th scope="col" className="px-6 py-3">
              address
            </th>
            <th scope="col" className="px-6 py-3">
              tx_id
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((val: TransactionsHistory, key) => {
            return (
              <tr
                key={key}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{val.event}</td>
                <td className="px-6 py-4">{val.amount}</td>
                <td className="px-6 py-4">{val.address}</td>
                <td className="px-6 py-4">{val.tx_id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
