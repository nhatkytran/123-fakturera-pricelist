import { FaCirclePlus } from 'react-icons/fa6';
import { IoPrintSharp, IoToggleSharp } from 'react-icons/io5';

import SearchInput from './components/SearchInput';
import styles from './Pricelist.module.css';

const PRICE_LIST_BUTTON_ACTIONS = [
  { title: 'New Product', Icon: FaCirclePlus, color: '#2bce49' },
  { title: 'Print List', Icon: IoPrintSharp, color: '#86eaea' },
  { title: 'Advanced mode', Icon: IoToggleSharp, color: '#4dadf2' },
];

/** Pricelist component. */
export default function Pricelist() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.searchContainer}>
          <SearchInput placeholder="Search Article No..." />
          <SearchInput placeholder="Search Product ..." />
        </div>
        <div className={styles.actionsContainer}>
          {PRICE_LIST_BUTTON_ACTIONS.map(({ title, Icon, color }, index) => (
            <button key={index} className={styles.actionButton}>
              <span className={styles.actionButtonText}>{title}</span>
              <Icon size={16} color={color} />
            </button>
          ))}
        </div>
      </header>
    </>
  );
}
