import { createSlice } from '@reduxjs/toolkit';
// Importa las funciones asíncronas (thunks) para manejar transacciones
import { fetchTransactions, createTransaction, deleteTransaction, updateTransaction } from './transactionThunks';

// Crea el slice de transacciones
const transactionSlice = createSlice({
  name: 'transactions', // Nombre del slice
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {}, // Aquí irían los reducers normales (no usados en este caso)
  extraReducers: (builder) => {
    builder
      // Cuando se inicia la carga de transacciones
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
      })
      // Cuando se obtienen las transacciones exitosamente
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload; // Actualiza la lista con los datos recibidos
      })
      // Si ocurre un error al obtener las transacciones
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Guarda el mensaje de error
      })
      // Cuando se crea una nueva transacción exitosamente
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.list.unshift(action.payload); // Agrega la nueva transacción al inicio de la lista
      })
      // Cuando se elimina una transacción exitosamente
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        // Filtra la lista para quitar la transacción eliminada
        state.list = state.list.filter(tx => tx._id !== action.payload._id);
      })
      //esto lo que hace es modificar la transaction
      .addCase(updateTransaction.fulfilled, (state, action) => {
        const index = state.list.findIndex(tx => tx._id === action.payload._id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
  },
});

// Exporta el reducer para usarlo en el store
export default transactionSlice.reducer;