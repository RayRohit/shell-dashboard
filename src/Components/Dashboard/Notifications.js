import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Alert, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function Notifications() {
    const[data,setData] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[])
    const sortedPosts = data.sort((a,b)=>{return(b.id - a.id)})
    const AlertData = [
        {
            id: 1,
            status: 'true'
        },
        {
            id: 2,
            status: 'false'
        },
        {
            id: 3,
            status: 'true'
        },
        {
            id: 4,
            status: 'false'
        },
        {
            id: 5,
            status: 'true'
        },
        {
            id: 6,
            status: 'false'
        },
    ]
    const sortedData = AlertData.sort((a,b)=>{
        return(b.id - a.id)
    })
    console.log(sortedData)
    return (
        <>
            <Paper elevation={3} sx={{ my: 1 }}>
                <Typography variant='h5' sx={{ fontWeight: 'bolder', p: 2, position: 'sticky', top: 0 }}>Notifications</Typography>
            </Paper>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 480,
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