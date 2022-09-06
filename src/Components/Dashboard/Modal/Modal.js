import { Grid, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Heatmap } from "../../Heatmap/Heatmap";
import heat from '../../Heatmap/HeatMap6.json'
import original from '../../../Images/originalImage.png'
import segment from '../../../Images/segmentImg.png'
import CurveGraph from "../../Graphs/CurveGraph";


export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    boxShadow: '10px 5px 10px #222',
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: '5px',
    overflow: 'auto',

};
export default function Modall() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const theme = useTheme()
    const md = useMediaQuery(theme.breakpoints.up('md'))
    const lg = useMediaQuery(theme.breakpoints.up('lg'))
    const xl = useMediaQuery(theme.breakpoints.up('xl'))

    let width = 900
    let height = 500

    if (!md && !lg && !xl) {
        width = 450
        height = 300
    }
    else if (md && !lg && !xl) {
        width = 380
        height = 300
    }
    else if (lg && !md && !xl) {
        width = 600
        height = 500
    }
    else if (!xl && lg && md) {
        width = 570
        height = 500
    }
    else if (xl && lg && md) {
        width = 800
        height = 500
    }
    let array = []
    for (let i = 0; i < 50; i++)
        array.push(
            Math.ceil(Math.random() * i * 10)

        );

    return (
        <div>
            <div>
                <Typography variant="p" onClick={handleOpen} >
                    Analyse Frame
                </Typography>
            </div>
            <Modal
                open={open}
                sx={{ padding: "20px", margin: "20px" }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Paper sx={{ p: 2, margin: '10px', boxShadow: '5px 5px 10px', mb: 2 }}>
                        <Paper elevation={3} sx={{ margin: '0 18px', borderRadius: '20px' }}>
                            <Paper sx={{ p: 3, width: '100%', borderRadius: '20px', display: 'flex', direction: 'row', justifyContent: 'space-between', backgroundColor: '' }}>
                                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Frame Analysis</Typography>
                                <HighlightOffIcon

                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                />
                            </Paper>
                        </Paper>
                        <Box>
                            <Box>
                                <Grid container spacing={2} sx={{ p: 2, mt: 1 }}>
                                    <Grid item sm={12} md={6} lg={6}>
                                        <Paper elevation={3} sx={{ p: 2, boxShadow: '5px 5px 10px', borderRadius: '20px', }}>
                                            <Box >
                                                <Typography variant="h5" sx={{ fontWeight: 'bold', px: 3, pt: 2 }} >Original Frame</Typography>
                                                <Box sx={{ pt: 2, pl: 1 }}>
                                                    <img src={original} alt='original frame' width={width} height={height} style={{ boxShadow: '3px 3px 6px', borderRadius: '20px', padding: '5px' }} />
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item sm={12} md={6} lg={6} >
                                        <Paper elevation={3} sx={{ p: 2, boxShadow: '5px 5px 10px', borderRadius: '20px' }}>
                                            <Box sx={{ borderRadius: '20px' }}>
                                                <Typography variant="h5" sx={{ fontWeight: 'bold', px: 3, pt: 2 }} >Heat Signature of The Frame</Typography>
                                                <Box sx={{ textAlign: 'center', pt: 2 }}>
                                                    <Heatmap data={heat} width={width} height={height} />
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <Grid container spacing={2} sx={{ p: 2 }}>
                                    <Grid item sm={12} md={6} lg={6}>
                                        <Paper elevation={3} sx={{ p: 2, boxShadow: '5px 5px 10px', borderRadius: '20px' }}>
                                            <Box sx={{ borderRadius: '20px' }}>
                                                <Typography variant="h5" sx={{ fontWeight: 'bold', px: 3, pt: 2 }} >Segmented Frame</Typography>
                                                <Box sx={{ pt: 2, pl: 1 }}>
                                                    <img src={segment} alt='original fram' width={width} height={height} style={{ boxShadow: '3px 3px 6px', borderRadius: '20px', padding: '5px' }} />
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item sm={12} md={6} lg={6} >
                                        <Paper elevation={3} sx={{ p: 2, boxShadow: '5px 5px 10px', borderRadius: '20px' }}>
                                            <Box sx={{ borderRadius: '20px' }}>
                                                <Typography variant="h5" sx={{ fontWeight: 'bold', px: 3, pt: 2 }} >Prediction Curve</Typography>
                                                <Box sx={{ textAlign: 'center', pt: 2 }}>
                                                    <CurveGraph data={array} height={height} width={width} />
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Modal>
        </div>
    );
}


