import { Box, Typography, useTheme } from "@mui/material";

export const Home: React.FC = () => {
    const theme = useTheme();
    return (

        <Box sx={{ maxWidth:"100%", backgroundColor: theme.palette.primary.main}}>
           <Typography color="primary">
            teste
           </Typography>
           <Typography >
            teste
           </Typography>
           <Typography >
            teste
           </Typography>
           <Typography >
            teste
           </Typography>
           <Typography >
            teste
           </Typography>
           <Typography >
            teste
           </Typography>
           <Typography >
            teste
           </Typography>
        </Box>

    );
};