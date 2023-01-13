import {
  useMarketplace,
  useNetwork,
  useNetworkMismatch,
} from "@thirdweb-dev/react";
import { NATIVE_TOKEN_ADDRESS, TransactionResult } from "@thirdweb-dev/sdk";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Link from "next/link";


const info: NextPage = () => {
  // Next JS Router hook to redirect to other pages
  const router = useRouter();
  const networkMismatch = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  return (

    <div className={styles.container}>
    <video id="video" autoPlay muted loop>
      <source src="https://dl.dropboxusercontent.com/s/vkwzb5nmn70sfxp/Luxury.mp4?dl=0" type="video/mp4"></source>
    </video>
    <div className={styles.collectionContainer}>
      <h1 className={styles.ourCollection}>
      <p>

<iframe width="500" height="700" src="https://app.unlock-protocol.com/checkout?paywallConfig=%7B%22locks%22%3A%7B%220xd5ee7b55f13ba49970de51f7db2c11623e80e327%22%3A%7B%22network%22%3A137%7D%2C%220xe49c6b6584a70e2cbc6eb4eb43145db67ebac962%22%3A%7B%22network%22%3A137%2C%22name%22%3A%22ACCESS+SILVER%22%7D%2C%220x815aff7915b5d5a978244a03e3efff7eddbefc40%22%3A%7B%22network%22%3A137%2C%22name%22%3A%22ACCESS+BRONZE%22%7D%2C%220x03f99ac23772671a6b0cf7462535ce2bc99e8657%22%3A%7B%22network%22%3A137%2C%22name%22%3A%2214%3A24+Membership+DEMO%22%2C%22captcha%22%3Afalse%2C%22password%22%3Afalse%2C%22emailRequired%22%3Afalse%2C%22maxRecipients%22%3Anull%2C%22dataBuilder%22%3A%22%22%2C%22skipRecipient%22%3Afalse%7D%7D%2C%22pessimistic%22%3Atrue%2C%22skipRecipient%22%3Atrue%2C%22title%22%3A%22Discord+Group+Memberships%22%2C%22icon%22%3A%22https%3A%2F%2Fexternal-content.duckduckgo.com%2Fiu%2F%3Fu%3Dhttps%253A%252F%252Fcdn.imgbin.com%252F19%252F11%252F5%252Fimgbin-discord-android-computer-icons-discord-sBuMaQEjRRtJJFnGUdL0fQcbr.jpg%26f%3D1%26nofb%3D1%26ipt%3D87f4d11b49a560e34be993834ed6fd7a23c4df4b457054128b919400fefdb410%26ipo%3Dimages%22%2C%22persistentCheckout%22%3Atrue%2C%22referrer%22%3A%22%22%2C%22messageToSign%22%3A%22%22%2C%22hideSoldOut%22%3Afalse%7D"></iframe>

</p>

&emsp;


<Link href="https://guild.xyz/partyplayers">
  <a className={styles.mainButton} style={{ textDecoration: "none" }}>
    Discord Access
  </a>
</Link>

&emsp;

<Link href="https://app.unlock-protocol.com/keychain">
  <a className={styles.mainButton} style={{ textDecoration: "none" }}>
    Renew / Cancel
  </a>
</Link>

<br></br>

     </h1></div></div>
  )
}

export default info;