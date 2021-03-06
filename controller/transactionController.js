const Transaction = require('../models/transactions');

exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.create(req.body);
        return res.status(200).json({
            success: true,
            data: transaction
        })
    } catch (err) {
        if (err.name === "ValidationError") {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

exports.deleteTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);

        if (transaction) {
            return res.status(200).json({
                success: true,
                data: transaction
            })
        } else {
            return res.status(404).json({
                success: false,
                error: 'No Transaction Found'
            });
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}