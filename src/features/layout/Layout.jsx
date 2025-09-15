import Header from './components/Header';
import Content from './components/Content';
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
      <Content>{children}</Content>
    </main>
  );
}
