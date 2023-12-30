const Invoice = require('../../models/shop/invoice.model');
const logger = require('../../utils/logger');

class InvoiceService {
    async getAll(
        pageNum = 1,
        pageSize = 10,
        sort = {},
        filter = {}
    ) {

        pageNum = Number.isInteger(pageNum) && pageNum > 0 ? pageNum : 1;
        pageSize = Number.isInteger(pageSize) && pageSize > 0 ? pageSize : 10;

        try {
            const invoices = await Invoice.find(filter)
                .sort(sort)
                .skip((pageNum - 1) * pageSize)
                .limit(pageSize);

            const totalInvoices = await Invoice.countDocuments({});

            return {
                invoices,
                total: totalInvoices
            };
        } catch (err) {
            logger.error(err)
            throw err;
        }
    }
}

module.exports = new InvoiceService();