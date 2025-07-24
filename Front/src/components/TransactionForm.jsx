import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTransaction, updateTransaction } from '../features/transactions/transactionThunks';

const TransactionForm = ({ editingTx, setEditingTx }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ amount: '', description: '', category: '', type: 'expense' });

  useEffect(() => {
    if (editingTx) {
      setForm({
        amount: editingTx.amount,
        description: editingTx.description,
        category: editingTx.category,
        type: editingTx.type,
      });
    }
  }, [editingTx]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTx) {
      dispatch(updateTransaction({ id: editingTx._id, data: form }));
    } else {
      dispatch(createTransaction(form));
    }
    setForm({ amount: '', description: '', category: '', type: 'expense' });
    setEditingTx(null); // salir del modo edición
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="amount" placeholder="Monto" value={form.amount} onChange={handleChange} required />
      <input name="description" placeholder="Descripción" value={form.description} onChange={handleChange} />
      <input name="category" placeholder="Categoría" value={form.category} onChange={handleChange} />
      <select name="type" value={form.type} onChange={handleChange}>
        <option value="expense">Gasto</option>
        <option value="income">Ingreso</option>
      </select>
      <button type="submit">{editingTx ? 'Actualizar' : 'Agregar'}</button>
      {editingTx && <button type="button" onClick={() => setEditingTx(null)}>Cancelar</button>}
    </form>
  );
};

export default TransactionForm;
