import { Paper, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height:'100%',
    boxShadow: '10px 5px 10px #222',
    bgcolor: 'background.paper',
    p: 4,
    borderRadius : '5px'
  };
export default function Modall() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <div>
            <div >
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
                    <Paper elevation={0} sx={{ padding: '10px', display: 'flex', direction: 'row', justifyContent: 'flex-end' }}>
                        <HighlightOffIcon
                            onClick={() => {
                                setOpen(false);
                            }}
                        />
                    </Paper>
                    <Box>
                        <Paper elevation={3} sx={{p: 2, margin: '10px',boxShadow: '5px 5px 10px',mb:4}}>
                            <Typography variant="h4" >Analyse Frame</Typography>
                        </Paper>
                    </Box>
                    <Box>
                        <Paper elevation={3} sx={{ p: 2, margin: '10px', boxShadow: '5px 5px 10px' }}>
                            <Typography variant="h6">Segmentation Of The Frame</Typography>
                        </Paper>
                        <Paper elevation={3} sx={{ p: 2, margin: '10px', boxShadow: '5px 5px 10px' }}>
                            <Typography variant="h6">Heat Signature Of The Frame</Typography>
                        </Paper>
                        <Paper elevation={3} sx={{ p: 2, margin: '10px', boxShadow: '5px 5px 10px' }}>
                            <Typography variant="h6">Prediction Curve</Typography>
                        </Paper>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}


