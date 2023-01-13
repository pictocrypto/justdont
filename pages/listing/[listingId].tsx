import {
  MediaRenderer,
  useMarketplace,
  useNetwork,
  useNetworkMismatch,
  useListing,
} from "@thirdweb-dev/react";
import { ChainId, ListingType, NATIVE_TOKENS } from "@thirdweb-dev/sdk";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

const ListingPage: NextPage = () => {
  // Next JS Router hook to redirect to other pages and to grab the query from the URL (listingId)
  const router = useRouter();

  // De-construct listingId out of the router.query.
  // This means that if the user visits /listing/0 then the listingId will be 0.
  // If the user visits /listing/1 then the listingId will be 1.
  const { listingId } = router.query as { listingId: string };

  // Hooks to detect user is on the right network and switch them if they are not
  const networkMismatch = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  // Initialize the marketplace contract
  const marketplace = useMarketplace(
    "0x447709Ee4A4beD9C6B3C8FBcc2f7f4C103568BE5" // Your marketplace contract address here
  );

  // Fetch the listing from the marketplace contract
  const { data: listing, isLoading: loadingListing } = useListing(
    marketplace,
    listingId
  );

  // Store the bid amount the user entered into the bidding textbox
  const [bidAmount, setBidAmount] = useState<string>("");

  if (loadingListing) {
    return <div className={styles.loadingOrError}>Loading...</div>;
  }

  if (!listing) {
    return <div className={styles.loadingOrError}>Listing not found</div>;
  }

  async function createBidOrOffer() {
    try {
      // Ensure user is on the correct network
      if (networkMismatch) {
        switchNetwork && switchNetwork(4);
        return;
      }

      // If the listing type is a direct listing, then we can create an offer.
      if (listing?.type === ListingType.Direct) {
        await marketplace?.direct.makeOffer(
          listingId, // The listingId of the listing we want to make an offer for
          1, // Quantity = 1
          NATIVE_TOKENS[ChainId.Polygon].wrapped.address, // Wrapped Ether address on Rinkeby
          bidAmount // The offer amount the user entered
        );
      }

      // If the listing type is an auction listing, then we can create a bid.
      if (listing?.type === ListingType.Auction) {
        await marketplace?.auction.makeBid(listingId, bidAmount);
      }

      alert(
        `${
          listing?.type === ListingType.Auction ? "Bid" : "Offer"
        } created successfully!`
      );
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  async function buyNft() {
    try {
      // Ensure user is on the correct network
      if (networkMismatch) {
        switchNetwork && switchNetwork(4);
        return;
      }

      // Simple one-liner for buying the NFT
      await marketplace?.buyoutListing(listingId, 1);
      alert("NFT bought successfully!");
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    
    <div className={styles.container} style={{}}>
        <div className={styles.listingContainer}>

          <div className={styles.leftListing}>
            <MediaRenderer
              src={listing.asset.image}
              className={styles.mainNftImage} />
          </div>

          

          <div className={styles.rightListing}>
            <h1>{listing.asset.name}</h1>
            <p>
              Owned by{" "}
              <b>
                {listing.sellerAddress?.slice(0, 6) +
                  "..." +
                  listing.sellerAddress?.slice(36, 40)}
              </b>
            </p>

            <h2>
              <b>{listing.buyoutCurrencyValuePerToken.displayValue}</b>{" "}
              {listing.buyoutCurrencyValuePerToken.symbol}
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
              }}
            >
              <button
                style={{ borderStyle: "none" }}
                className={styles.mainButton}
                onClick={buyNft}
              >
                Just Don't
              </button>

              
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >

                  

              </div>
            </div>
          </div>
        </div>

        <video id="video" autoPlay muted loop>
      <source src="https://dl.dropboxusercontent.com/s/s1h71b17wxqyco1/MatrixHD.mp4?dl=0" type="video/mp4"></source>
    </video>
    
      </div>
      
  );
};

export default ListingPage;
