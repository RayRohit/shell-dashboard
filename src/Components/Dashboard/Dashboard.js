import React, { useEffect, useRef, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, Grid, Paper, useMediaQuery } from "@mui/material";
import Drawerr from "./Drawer/Drawer";
import { MenuOpen } from "@mui/icons-material";
import Notifications from "./Notifications";
import { useNavigate } from "react-router-dom";
import Modall from "./Modal/Modal";


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
    const mdBreak = useMediaQuery(theme.breakpoints.up('lg'));
    const [open, setOpen] = React.useState(false);
    const [file, setFile] = useState(null)
    const videoRef = useRef();
    const handleDrawerOpen = () => {
        setOpen(true)
    }
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
        videoRef.current?.load();
    }
    useEffect(() => {
        if (mdBreak) setOpen(mdBreak)
    }, [mdBreak])
    useEffect(() => {
        setFile(file)
    }, [file])
    const navigate = useNavigate()


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
                        {mdBreak ? 'Flame Analytics Dashboard' : null}
                    </Typography>
                    <Box sx={{ marginLeft: 'auto', display: 'flex' }}>
                        <Button variant="contained" component="label" >
                            Upload File
                            <input type="file" hidden accept="video/*,.mkv" onChange={handleChange} />
                        </Button>
                        {
                            file !== null ?
                                    <Modall />
                                /* <Button variant='contained' sx={{ px: 4, mt: 1 }} >Analyse Frame</Button> */
                                :
                                null
                        }
                    </Box>

                </Paper>
                <Grid container>
                    {
                        file !== null ?
                            <>
                                <Grid item sm={12} md={6} lg={8}>
                                    <Paper sx={{ p: 2, boxShadow: '5px 5px 10px', margin: '10px' }}>
                                        <>{console.log(file)}
                                            <video width="100%" height="363 " ref={videoRef} controls autoPlay>
                                                <source src={file} type="video/mp4" />
                                            </video>
                                        </>
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
                <Box>
                    {
                        file !== null ?
                            <>
                                <Paper elevation={3} sx={{ p: 2, margin: '10px',boxShadow: '5px 5px 10px' }}>
                                    <Typography variant="h6">Segmentation Video</Typography>
                                </Paper>
                                <Paper elevation={3} sx={{ p: 2, margin: '10px',boxShadow: '5px 5px 10px' }}>
                                    <Typography variant="h6">Heat Signature Video</Typography>
                                </Paper>
                                <Paper elevation={3} sx={{ p: 2, margin: '10px',boxShadow: '5px 5px 10px' }}>
                                    <Typography variant="h6">Notification Summary</Typography>
                                </Paper>
                            </>
                            :
                            <>
                                null
                            </>
                    }
                </Box>
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