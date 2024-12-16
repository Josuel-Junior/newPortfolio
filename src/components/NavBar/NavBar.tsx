import { AppBar, Box, Typography, useMediaQuery, useTheme, Toolbar, Tabs, Tab } from "@mui/material"
import { useNavigate } from "react-router-dom";



export const NavBar: React.FC = () => {

    const navigate = useNavigate();
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    return (

        <AppBar
            elevation={0}
            sx={{
                background:
                    `${theme.palette.background.paper}`,
                display: "flex",
                justifyContent: "center",
                transition: "background 0.2s ease-in-out",
            }}
        >
            <Box sx={{ position: "absolute", marginLeft: "60px" }}

            >
                <Typography>Josuel Junior</Typography>
            </Box>
            {isMatch ? (
                <Box>

                </Box>
            ) : (
                <Toolbar>
                    <Tabs
                        sx={{ marginLeft: "auto" }}

                        indicatorColor="primary"
                        textColor="primary"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: "#296fcd",
                            },
                        }}
                    >
                        <Tab label="Home" onClick={() => navigate("/")} />
                        <Tab
                            label="currículo"
                            onClick={() => navigate("/")}
                        />
                        <Tab
                            label="Formação"
                            onClick={() => navigate("/")}
                        />
                        <Tab
                            label="Projetos"
                            onClick={() => navigate("/")}
                        />
                        <Tab
                            label="Contato"
                            onClick={() => navigate("/")}
                        />

                    </Tabs>

                </Toolbar>
            )}
        </AppBar>
    )
}