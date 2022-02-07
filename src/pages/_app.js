import "src/styles/globals.css";
import store from "src/redux/store";
import { Provider } from "react-redux";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <br />
        <Link href="/">
          <button>Home Page</button>
        </Link>
        <br />
        <br />
        <Link href="/profile">
          <button>Profile Page</button>
        </Link>
        <br />
        <br />
        <Link href="/login">
          <button>Login Page</button>
        </Link>

        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
