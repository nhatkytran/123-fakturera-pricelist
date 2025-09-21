import { AppLoadingProvider, AppSearchProvider } from './shared/context';
import Layout from './features/layout';
import Pricelist from './features/pricelist';

/** App component. */
export default function App() {
  return (
    <AppLoadingProvider>
      <AppSearchProvider>
        <Layout>
          <Pricelist />
        </Layout>
      </AppSearchProvider>
    </AppLoadingProvider>
  );
}
