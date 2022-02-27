import styles from "src/styles/Home.module.css";
import Layout from "src/components/Layout";
import { useUserContext } from "../context/userContext";

export default function Home() {
  const { user, logOut } = useUserContext();
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to
          <a>Home Page</a>
        </h1>

        <p className={styles.description}>
          Get started by editing
          <code className={styles.code}>pages/index.js</code>
        </p>
        {/* <code className={styles.code}>{user}</code> */}
        {/* <code className={styles.code}>{count}</code> */}
        <div className="ui message success">
          <h3>You are now logged in as , {user.name}</h3>
          {!user.isGuestUser && (
            <button className="ui button blue" onClick={logOut}>
              LogOut
            </button>
          )}
        </div>
      </main>
    </Layout>
  );
}
