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
            <source src="https://dl.dropboxusercontent.com/s/s1h71b17wxqyco1/MatrixHD.mp4?dl=0" type="video/mp4"></source>
          </video>
          <div className={styles.collectionContainer}>
            <h1 className={styles.ourCollection}>
              Just Don't <br></br> Book Club 
              
              <p></p>
              
              
              
            </h1>
            <br></br>

            <p className={styles.explain}><b>
            Whatever you want to say, just don't. If you think this is ever going to make your life better, just don't
            </b></p>
            

                <Link href="/listing/0">
                  <a className={styles.mainButton} style={{ textDecoration: "none" }}>
                     Just Don't
                  </a>
                </Link>


         </div>
            
          </div>
       


     
    );
  };
  
  export default info;
  