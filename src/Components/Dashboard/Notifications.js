import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import { Alert, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Modall from './Modal/Modal';

export default function Notifications() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])
    const sortedPosts = data.sort((a, b) => { return (b.id - a.id) })

    const obj = [
        {
            title: 'Fire',
            FrameNo: 1,
            ImagePath: 'Image-1'
        },
        {
            title: 'Non-Fire',
            FrameNo: 2,
            ImagePath: 'Image-2'
        },
        {
            title: 'Fire',
            FrameNo: 3,
            ImagePath: 'Image-3'
        },
        {
            title: 'Fire',
            FrameNo: 4,
            ImagePath: 'Image-4'
        },
        {
            title: 'Non-Fire',
            FrameNo: 5,
            ImagePath: 'Image-5'
        }
    ]


    return (
        <>
            <Paper elevation={3} sx={{ my: 1, display: 'flex' }}>
                <Typography variant='h5' sx={{ fontWeight: 'bolder', p: 2, position: 'sticky', top: 0 }}>Notifications</Typography>
            </Paper>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 500,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 290,
                    cursor:'pointer',
                    '& ul': { padding: 0 },
                }}
                subheader={<li />}
            >
                <Box>
                    {
                        obj.map((item) => {
                            return (
                                <>
                                    <Modall title={item.title} ImageData={item} />
                                </>
                            )
                        })
                    }
                </Box>
            </List>
        </>
    );
}
