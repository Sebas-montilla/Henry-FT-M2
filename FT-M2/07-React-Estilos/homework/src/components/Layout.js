import lightning from "../assets/lightning.jpg";
import styles from "../modules css/Layout.module.css";
import Card from "./Card";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <img
        style={{
          height: "100vh",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: -2,
        }}
        src={lightning}
        alt=""
      />
      <div
        style={{
          height: "100vh",
          width: "100%",
          background: "linear-gradient(180deg, rgba(102,51,135,0.2) 0%, rgba(0,0,0,0.8) 87%)",
          position: "absolute",
          zIndex: -1,
        }}
      />
      {children}
    </div>
  );
}

export default Layout;
