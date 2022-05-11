import { Box, styled, Typography } from "@mui/material";

export const LineItem = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 1rem;
`;

export const ProductInfo = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ProductQty = styled(Box)`
  width: 50px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const ProductTotal = styled(Typography)`
  flex: 0.5;
  text-align: end;
  margin-right: 2rem;
`;

export const QtyContainer = styled(Box)`
  display: flex;
  gap: 0.25rem;
  flex-direction: column;
  align-items: center;
  height: 25px;
`;
