import Header from './components/Header';
import Content from './components/Content';
import styles from './Pricelist.module.css';

/** Pricelist component. */
export default function Pricelist() {
  return (
    <section className={styles.pricelist}>
      <Header />
      <Content />
    </section>
  );
}
