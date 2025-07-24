import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getTransactions,
  createTransaction as apiCreateTransaction,
  deleteTransaction as apiDeleteTransaction,
  updateTransaction as apiUpdateTransaction,
} from '../../services/api';

export const fetchTransactions = createAsyncThunk('transactions/fetchAll', async () => {
  const response = await getTransactions();
  return response.data;
});

export const createTransaction = createAsyncThunk('transactions/create', async (data) => {
  const response = await apiCreateTransaction(data);
  return response.data;
});

export const deleteTransaction = createAsyncThunk('transactions/delete', async (id) => {
  const response = await apiDeleteTransaction(id);
  return response.data;
});

export const updateTransaction = createAsyncThunk('transaction/update', async ({id, data}) => {
  const response = await apiUpdateTransaction(id, data);
  return response.data;
})
