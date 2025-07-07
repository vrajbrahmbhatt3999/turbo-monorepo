export interface ISalesAdapter {
  getInvoices(): Promise<[]>;
  createInvoice(invoice: { name: string; price: number; quantity: number }): Promise<void>;
}
