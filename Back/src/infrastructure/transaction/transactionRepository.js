const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    amount: Number,
    description: String,
    category: String,
    type:{type:String, enum:['income', 'expense']},
    date: {type: Date, default: Date.now},
});

const TransactionModel = mongoose.model('Transaction', transactionSchema);


module.exports = {

    // Crear una transacción
    create: async (data) => await TransactionModel.create(data),

    //Actualizar un registro de las transacciones
    updateById: async (id, data) => await TransactionModel.findByIdAndUpdate(id, data, {new: true}),

    // Buscar todas las transacciones, ordenadas por fecha (más reciente primero)
    findAll: async () => await TransactionModel.find().sort({ date: -1}),

    // Eliminar una transacción por ID
    deleteById: async (id) => await TransactionModel.findByIdAndDelete(id),
}