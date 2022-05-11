import { Box, Button, styled } from "@mui/material";

export const BannerContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: #b5e8d5;
  background-image: url("https://static.wixstatic.com/media/baac51_863daade1baf47a8995907cb1f24d57c.png/v1/fill/w_1519,h_780,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/baac51_863daade1baf47a8995907cb1f24d57c.png");
  position: relative;
`;

export const BannerImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "80vh",
  objectFit: "contain",
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  color: "#333",
  marginTop: "20vh",

  "& > h1": {
    fontSize: "10rem",
    margin: "1rem",
    textShadow: "4px 4px 2px rgba(150, 150, 150, 1);",
  },

  "& > h3": {
    fontSize: "2rem",
  },
}));

export const ShopNowButton = styled(Button)`
  color: black;
  width: 25%;
  padding: 0.5rem 3rem;
  border: 0px;
  background: #ffffff;
  outline: none;
  font-weight: 700;
  font-size: 1rem;

  &:hover {
    color: white;
    background: black;
    border: 0px;
  }
`;
