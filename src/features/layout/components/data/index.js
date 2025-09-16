import { FaFileInvoiceDollar, FaUser, FaIdCard } from 'react-icons/fa';
import { FaCloudArrowUp } from 'react-icons/fa6';
import { FiSettings } from 'react-icons/fi';
import { IoMdJournal, IoIosPricetags, IoMdCloseCircle } from 'react-icons/io';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { RiDiscountPercentLine } from 'react-icons/ri';
import { MdInventory2, MdLogout } from 'react-icons/md';

/** Menu items. */
export const MENU_ITEMS = [
  { text: 'Invoices', status: 'normal', Icon: FaFileInvoiceDollar, iconColor: '#40ece1' },
  { text: 'Customers', status: 'normal', Icon: FaUser, iconColor: '#29f2bc' },
  { text: 'My Business', status: 'normal', Icon: FiSettings, iconColor: '#3ab7f6' },
  { text: 'Invoice Journal', status: 'normal', Icon: IoMdJournal, iconColor: '#50d8fd' },
  { text: 'Price List', status: 'active', Icon: IoIosPricetags, iconColor: '#FD9A2B' },
  { text: 'Multiple Invoicing', status: 'normal', Icon: IoDocumentTextSharp, iconColor: '#44e4f0' },
  { text: 'Unpaid Invoices', status: 'normal', Icon: IoMdCloseCircle, iconColor: '#F24B8F' },
  { text: 'Offer', status: 'normal', Icon: RiDiscountPercentLine, iconColor: '#f6b40d' },
  { text: 'Inventory Control', status: 'inactive', Icon: MdInventory2, iconColor: '#67c3e2' },
  { text: 'Member Invoicing', status: 'inactive', Icon: FaIdCard, iconColor: '#199CFD' },
  { text: 'Import/Export', status: 'normal', Icon: FaCloudArrowUp, iconColor: '#5b97e7' },
  { text: 'Log out', status: 'normal', Icon: MdLogout, iconColor: '#0bcf9a' },
];
