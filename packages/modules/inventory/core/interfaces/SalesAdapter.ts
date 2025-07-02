export interface ISalesAdapter {
  getInvoices(): Promise<[]>;
  createInvoice(invoice: object[]): Promise<void>;
}
