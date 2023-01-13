import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  MediaRenderer,
  useActiveListings,
  useMarketplace,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";


const Home: NextPage = () => {
  const router = useRouter();

  // Connect your marketplace smart contract here (replace this address)
  const marketplace = useMarketplace(
    "0x447709Ee4A4beD9C6B3C8FBcc2f7f4C103568BE5" // Your marketplace contract address here
  );

  const { data: listings, isLoading: loadingListings } =
    useActiveListings(marketplace);

  return (
    <><>
      {/* Content */}
      <div className={styles.container}>

      <video id="video" autoPlay muted loop>
       <source src="https://dl.dropboxusercontent.com/s/s1h71b17wxqyco1/MatrixHD.mp4?dl=0" type="video/mp4"></source>
       </video>

        {/* Top Section */}


        </div>
       
        <div className="main">
          {
            // If the listings are loading, show a loading message
            loadingListings ? (
              <div>Loading...</div>
            ) : (
              // Otherwise, show the listings
              <div className={styles.listingGrid}>
                {listings?.map((listing) => (
                  <div
                    key={listing.id}
                    className={styles.listingShortView}
                    onClick={() => router.push(`/listing/${listing.id}`)}
                  >
                    <MediaRenderer
                      src={listing.asset.image}
                      style={{
                        borderRadius: 16,
                        // Fit the image to the container
                        width: "100%",
                        height: "100%",
                      }} />

                    <h2 className={styles.nameContainer}>
                      <Link href={`/listing/${listing.id}`}>
                        <a className={styles.name}>{listing.asset.name}</a>
                      </Link>
                    </h2>


                    <p>
                      <b>{listing.buyoutCurrencyValuePerToken.displayValue}</b>{" "}
                      {listing.buyoutCurrencyValuePerToken.symbol}
                    </p>


                  </div>
                ))}
                
              </div>
            )}
            
            <hr className={styles.divider} />

            {/* Bottom Section */}

<div style={{ marginTop: 32, marginBottom: 32 }}>
  <Link href="https://guild.xyz/just-dont">
    <a className={styles.mainButton} style={{ textDecoration: "none" }}>
      Token Access
    </a>
  </Link>

  &emsp;


  <Link href="/info">
    <a className={styles.mainButton} style={{ textDecoration: "none" }}>
      Just Don't
    </a>
  </Link>


        </div>
      </div>
    </></>
  );
};

export default Home;
