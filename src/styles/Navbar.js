import { styled, Typography, Box, Toolbar } from "@mui/material";

export const Logo = styled(Typography)`
  text-decoration: underline crimson;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: 700;
`;

export const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  border: "1px solid #e1e1e1",
  borderRadius: "0.5rem",
  alignItems: "center",
}));

export const NavbarContainer = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  margin: "1rem",
}));
