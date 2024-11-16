export default function LatestInvoices({ data }: { data: { id: string; amount: number; status: string }[] }) {
  return (
    <div className="latest-invoices">
      <h2>Latest Invoices</h2>
      <ul>
        {data.map((invoice) => (
          <li key={invoice.id}>
            {invoice.id} - ${invoice.amount} ({invoice.status})
          </li>
        ))}
      </ul>
    </div>
  );
}

