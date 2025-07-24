import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions, deleteTransaction } from '../features/transactions/transactionThunks';

const TransactionList = ({ setEditingTx }) => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTransaction(id));
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Categoría</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {list.map((tx) => (
            <tr key={tx._id}>
              <td>{tx.description}</td>
              <td>${tx.amount}</td>
              <td>{tx.category}</td>
              <td>{tx.type}</td>
              <td>
                <button onClick={() => setEditingTx(tx)}>Editar</button>
                <button onClick={() => handleDelete(tx._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
