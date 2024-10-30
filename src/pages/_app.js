import { Provider } from "react-redux";
import basicAuth from "basic-auth";

import NavBar from "../components/organisms/NavBar";
import Footer from "../components/organisms/Footer";
import store from "../utils/store";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <div className="wrapper">
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
    </>
  );
}
