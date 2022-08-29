import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Logout } from "@mui/icons-material";
export default function Drawerr() {
  return (
    <>
      <Grid row={1} sx={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'end'}}>
        <Grid columns={12}>
            <Box sx={{py:2}}>
                <Button variant="contained" endIcon={<Logout sx={{fontSize:'15px !important'}}/>}>Logout</Button>
            </Box>
        </Grid>
      </Grid>
    </>
  );
}