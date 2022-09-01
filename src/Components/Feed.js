import {useState, useEffect} from "react";
import {Box, Stack, Typography} from "@mui/material"
import {Sidebar, Videos} from '../Components'

import { FetchFromAPI } from "../utils/FetchFromAPI";

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([])

    useEffect(() => {
        FetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then( (data) => {
            setVideos(data.items)
        })
    },[selectedCategory])


    return ( 
        <Stack sx={{
            flexDirection: {sx:'column', md: 'row'},
        }}>
            {/* box for sidebar */}
            <Box  sx={{ height:{sx:'auto',md:'92vh'}, 
                    borderRight: '1px solid #3d3d3d' ,
                    px: {sx:0, md:2}
                }} 
            >
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Typography className="copyright" variant="body2"     // typography is heading type thing
                    sx={{ color: '#fff', mt: 1.5}}
                >
                    Copyright 2022 Youtube Clone
                </Typography>

            </Box>


            {/* box for videos */}

            <Box p={2} sx= {{ overflowY:'auto', height:'90vh', flex:2 }} >
                <Typography variant="h4" fontWeight='bold' mb={2} sx={{color:'white'}}>
                    {selectedCategory} <span style={{color: '#F31503'}}>Videos</span>
                </Typography>

                <Videos videos={videos} />
            </Box>


        </Stack>
     );
}

export default Feed ;