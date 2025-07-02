import { ISalesAdapter } from '../core/interfaces/SalesAdapter';

export const SalesCPOSAdapter: ISalesAdapter = {
  async getInvoices() {
    return [];
  },
  async createInvoice(invoice) {
    console.log('Creating invoice in CPOS:', invoice);
    return;
  }
};