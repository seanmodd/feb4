import "src/styles/globals.css";
import Link from "next/link";
import { Provider as ReduxProvider } from "react-redux";
import { userContext, UserContextProvider } from "src/context/userContext";
import { store } from "src/redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <UserContextProvider>
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
      </UserContextProvider>
    </ReduxProvider>
  );
}

export default MyApp;
