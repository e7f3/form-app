import { Provider } from "react-redux";
import DataProvider from "../context/DataContext";
import Layout from "../components/layouts/Layout.jsx";
import { store } from "../store/index.js";
import "../styles/style.scss";

// Кастомный app для поключения стилей, провайдеров контекста и redux

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </Provider>
  );
}
