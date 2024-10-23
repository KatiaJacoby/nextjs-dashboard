import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import "./cards.css";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  return (
    <>
      {/* NOTE: Uncomment this code in Chapter 9 */}

      {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> */}
    </>
  );
}

export function Card({
  title,
  value,
  type,
  link,
}: {
  title: string;
  value: number | string;
  type: 'dev' | 'pm';
  link:'link'
}) {


  return (
    <div className="box">
      <img src={link} className = "boxImage" ></img>
      <p className="boxText">{title}</p>
      <p className = "boxDescription">{value}</p>
    </div>
  );
}
