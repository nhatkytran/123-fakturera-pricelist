import Header from './components/Header';
import Sidebar from './components/Sidebar';
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
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <Sidebar />
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </main>
  );
}
