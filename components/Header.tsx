import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Header() {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div>
          <Link href="/" passHref role="button">
            <img
              src={`/header.jpg`}
              alt="Corner"
              width={135}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>



      <div className={styles.right}>
      <ConnectWallet />
      </div>
    </div>
  );
}