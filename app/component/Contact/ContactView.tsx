"use client";
import { ContactForm } from "./ContactForm";
import styles from "./ContactView.module.css";
import useWindowWidth from "@/app/hooks/MediaWidthHooks";

const ContactView = () => {
  const windowWidth = useWindowWidth();

  return (
    <div
      className={`flex-auto m-5 ${styles.contact}`}
      style={{
        marginLeft: windowWidth < 1270 ? "90px" : "260px",

        overflowY: "hidden",
        width: "min-content",
        height: "min-content",
      }}
    >
      <span className={styles.textContactDark}>Add New Contact</span>
      <div style={{ height: windowWidth < 770 ? "auto" : "100vh" }}>
        <ContactForm />
      </div>
    </div>
  );
};
export default ContactView;
