import { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

const App = () => {
  const [editingTx, setEditingTx] = useState(null);

  return (
    <div className="app">
      <h1>Gestor de Gastos Personales</h1>
      <div className="dashboard">
        <TransactionForm editingTx={editingTx} setEditingTx={setEditingTx} />
        <TransactionList setEditingTx={setEditingTx} />
      </div>
    </div>
  );
};

export default App;