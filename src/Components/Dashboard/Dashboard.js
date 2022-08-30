import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, Grid, Paper } from "@mui/material";
import Drawerr from "./Drawer/Drawer";
import { MenuOpen } from "@mui/icons-material";
import Notifications from "./Notifications";


const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));
export default function Dashboard() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [file, setFile] = useState(null)
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleChange = (e) => {
        setFile({
            file: URL.createObjectURL(e.target.files[0])
        },
        )
    }
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar elevation={0} style={{ backgroundColor: 'white' }} position="fixed" open={open}>
                <Paper elevation={3} style={{ padding: '20px', display: 'flex', margin: '10px', boxShadow: '5px 5px 10px' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 1, ...(open && { display: "none" }) }}
                    >
                        <MenuOpen sx={{ fontSize: '30px !important' }} />
                    </IconButton>
                    <Typography variant="h5" noWrap sx={{ fontWeight: 'bolder', pt: 1, px: 3 }} component="div">
                        Flame Analytics Dashboard
                    </Typography>
                    <Box sx={{ marginLeft: 'auto' }}>
                        <Button variant="contained" component="label" sx={{ px: 5, mt: 1, mx: 2 }} >
                            Upload File
                            <input type="file" hidden accept="video/*,.mkv" onChange={handleChange} />
                        </Button>
                        {
                            file !== null ?
                                <Button variant='contained' sx={{ px: 4, mt: 1 }}>Analyse Frame</Button>
                                :
                                null
                        }
                    </Box>

                </Paper>
                {/* <Paper elevation={3} sx={{ margin:'10px',boxShadow:'5px 5px 10px' }}>
                    <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                        <Button variant="contained" component="label" sx={{ px: 4, mt: 1 }} >
                            Upload File
                            <input type="file" hidden accept="video/*,.mkv" onChange={handleChange} />
                        </Button>
                        <Button variant='contained' sx={{ px: 4, mt: 1 }}>Analyze Frame</Button>
                        <Button variant='contained' sx={{ px: 4, mt: 1 }}>Analyze Video</Button>
                    </Box>
                </Paper> */}
                {/* <Grid container>
                    <Grid item sm={12} md={6} lg={8}>
                        <Paper sx={{ p: 2, boxShadow: '5px 5px 10px', margin: '10px' }}>
                            {
                                file !== null ?
                                    <>
                                        <video width="100%" height="300" controls autoPlay>
                                            <source src={file.file} type="video/mp4" />
                                        </video>
                                    </>
                                    :
                                
                                        null
                                
                            }
                        </Paper>
                    </Grid>
                    <Grid item sm={4}>
                        <Paper sx={{ p: 2, boxShadow: '5px 5px 10px', margin: '10px' }}>
                            {
                                file !== null ?
                                    <>
                                        <Notifications />
                                    </>
                                    :
                                    <>
                                        <Typography variant="h6" sx={{ textAlign: 'center' }}>No Notifications</Typography>
                                    </>
                            }
                        </Paper>
                    </Grid>

                </Grid> */}
                <Grid container>
                    {
                        file !== null ?
                            <>
                                <Grid item sm={12} md={6} lg={8}>
                                    <Paper sx={{ p: 2, boxShadow: '5px 5px 10px', margin: '10px' }}>
                                        <video width="100%" height="363 " controls autoPlay>
                                            <source src={file.file} type="video/mp4" />
                                        </video>
                                    </Paper>
                                </Grid>
                                <Grid item sm={12} md={6} lg={4}>
                                    <Paper sx={{ p: 2, boxShadow: '5px 5px 10px', margin: '10px' }}>
                                        <Notifications />
                                    </Paper>
                                </Grid>
                            </>
                            :
                            null
                    }
                </Grid>

            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Drawerr />
            </Drawer>
        </Box>
    );
}