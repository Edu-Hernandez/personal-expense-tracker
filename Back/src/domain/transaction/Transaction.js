class Transaction {
    constructor({amount, description, category, type, date}) {
        if (!amount || !type) throw new Error("Amount and type are required");

        this.amount = amount;
        this.description = description;
        this.category = category;
        this.type = type;
        this.date = date || new Date;
        
    }
}

module.exports = Transaction;