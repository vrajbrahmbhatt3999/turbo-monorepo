import { ISalesAdapter } from '../core/interfaces/SalesAdapter';

export const posHttpAdapter: ISalesAdapter = {
  async getInvoices() {
    return [];
  },
  async createInvoice(invoice: { name: string; price: number; quantity: number }) {
    // Step 1: Fetch the current document
    fetch('http://192.168.1.121:5984/store1db/store1:IT1306202511', {
      method: 'GET',
      headers: {
        Authorization: 'Basic ' + btoa('Admin:Admin123'),
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((doc) => {
        // Step 2: Modify fields dynamically using form state
        const updatedDoc = {
          ...doc,
          name: invoice.name,
          price: invoice.price,
          quantity: invoice.quantity,
        };
        console.log('updatedDoc', updatedDoc);
        // Step 3: Send updated document back
        return fetch(`http://192.168.1.121:5984/store1db/${doc._id}`, {
          method: 'PUT',
          headers: {
            Authorization: 'Basic ' + btoa('Admin:Admin123'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedDoc),
        });
      })
      .then((res) => res.json())
      .then((data) => console.log('Update successful:', data))
      .catch((err) => console.error('Update failed:', err));
    return;
  }
};