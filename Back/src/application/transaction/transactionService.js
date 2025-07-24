const Transaction = require("../../domain/transaction/Transaction");
const Repo = require("../../infrastructure/transaction/transactionRepository");

module.exports = {
    CreateTransaction: async (data) => {
        const newTx = new Transaction(data);
        return await Repo.create(newTx);
    },
    updateTransaction: async(id, data) => {
        const updatedTx = await Repo.updateById(id, data);
        return updatedTx; 
    },
    getAllTransaction: async () => {
        return await Repo.findAll();
    },
    deleteTransaction: async (id) => {
        return await Repo.deleteById(id)
    }
}