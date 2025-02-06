import { Box, Divider, Typography } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <Box>
      <Divider sx={{ color: "#fff" }} />
      <Typography sx={{textAlign:"center", fontFamily:"Rubik", fontWeight:"600", background:"#000", color:"#fff", py:"10px"}}>Desenvolvido por Josuel Junior</Typography>
    </Box>
  );
};
