import React from "react";
import {
  BannerContainer,
  BannerImage,
  ShopNowButton,
  Wrapper,
} from "../../styles/Banner";

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <BannerImage
          src="https://dejota.shop/wp-content/uploads/revslider/big-summer-sale/woman_transparent.png"
          alt="hero"
        />
        <Wrapper>
          <h1>SUMMER SALE</h1>
          <h3>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF ON NEW ARRIVALS.</h3>
          <ShopNowButton
            variant="outlined"
            sx={{ color: "black", border: "2px solid black" }}
          >
            SHOP NOW
          </ShopNowButton>
        </Wrapper>
      </BannerContainer>
    </>
  );
};

export default Banner;
