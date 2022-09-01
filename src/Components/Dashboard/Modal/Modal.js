import { Paper, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { style } from "./MainModal";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
export default function Modall() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <div>
            <div >
                <Button variant="contained" onClick={handleOpen} sx={{ py: 1, mx: 2 }} >
                    Analyse Frame
                </Button>
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


