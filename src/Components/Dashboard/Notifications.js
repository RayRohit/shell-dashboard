import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import { Alert, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function Notifications() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])
    const sortedPosts = data.sort((a, b) => { return (b.id - a.id) })
    return (
        <>
            <Paper elevation={3} sx={{ my: 1, display: 'flex' }}>
                <Typography variant='h5' sx={{ fontWeight: 'bolder', p: 2, position: 'sticky', top: 0 }}>Notifications</Typography>
                {/* <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Fire" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl> */}
            </Paper>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 500,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 290,
                    '& ul': { padding: 0 },
                }}
                subheader={<li />}
            >
                <Box>
                    {
                        sortedPosts.map((item) => {
                            return (
                                <Alert color='error' sx={{ my: 2 }}>
                                    <Typography variant='h6'>{item.id}</Typography>
                                    <Typography variant='h6'>{item.status}</Typography>
                                </Alert>
                            )
                        })
                    }
                    {/* <Alert severity="success" color="error" sx={{ my: 2 }} >
                        This is a success alert — check it out!
                    </Alert> */}
                    {/* <Alert severity="success" color="success" sx={{ my: 2 }} >
                        This is a success alert — check it out!
                    </Alert>
                    <Alert severity="success" color="warning" sx={{ my: 2 }} >
                        This is a success alert — check it out!
                    </Alert>
                    <Alert severity="success" color="info" sx={{ my: 2 }} >
                        This is a success alert — check it out!
                    </Alert>
                    <Alert severity="success" color="info" sx={{ my: 2 }} >
                        This is a success alert — check it out!
                    </Alert>
                    <Alert severity="success" color="info" sx={{ my: 2 }} >
                        This is a success alert — check it out!
                    </Alert>
                    <Alert severity="success" color="info" sx={{ my: 2 }} >
                        This is a success alert — check it out!
                    </Alert>
                    <Alert severity="success" color="info" sx={{ my: 2 }} >
                        This is a success alert — check it out!
                    </Alert>
                    <Alert severity="success" color="info" sx={{ my: 2 }} >
                        This is a success alert — check it out!
                    </Alert>
                    <Alert severity="success" color="info" sx={{ my: 2 }} >
                        This is a success alert — check it out!
                    </Alert>
                    <Alert severity="success" color="info" sx={{ my: 2 }} >
                        This is a success alert — check it out!
                    </Alert>
                    <Alert severity="success" color="info" sx={{ my: 2 }} >
                        This is a success alert — check it out!
                    </Alert> */}

                </Box>
            </List>
        </>
    );
}
