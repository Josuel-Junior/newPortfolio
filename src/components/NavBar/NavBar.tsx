import { AppBar, useTheme } from "@mui/material"

export const NavBar: React.FC = () => {

    const theme = useTheme();

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

        </AppBar>
    )
}