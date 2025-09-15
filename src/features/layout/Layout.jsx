import Header from './components/Header';
import styles from './Layout.module.css';

/**
 * Layout component.
 * @param {Object} props The props object.
 * @param {React.ReactNode} props.children The children elements.
 */
export default function Layout({ children }) {
  return (
    <main className={styles.main}>
      <Header />
      {children}
    </main>
  );
}
