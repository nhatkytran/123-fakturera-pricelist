import { PRICE_LIST_ACTION_BUTTONS } from '@/features/pricelist/data';
import SearchInput from './components/SearchInput';
import ActionButton from './components/ActionButton';
import styles from './Header.module.css';

/** Header component. */
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <SearchInput name="article" placeholder="Search Article No..." />
        <SearchInput name="product" placeholder="Search Product ..." />
      </div>
      <div className={styles.actionsContainer}>
        {PRICE_LIST_ACTION_BUTTONS.map(({ title, Icon, color }, index) => (
          <ActionButton key={index} title={title} Icon={Icon} color={color} />
        ))}
      </div>
    </header>
  );
}
