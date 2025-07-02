import { ISalesAdapter } from '../core/interfaces/SalesAdapter';

export const SalesPOSAdapter: ISalesAdapter = {
  async getInvoices() {
    return [];
  },
  async createInvoice(invoice) {
    console.log('Creating invoice in POS:', invoice);
    return;
  }
};