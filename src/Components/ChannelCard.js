import { Typography, Box, Card, CardContent, CardMedia} from '@mui/material';
import {Link} from 'react-router-dom'
import {CheckCircle} from "@mui/icons-material"

import {demoProfilePicture} from "../utils/constants"
import { width } from '@mui/system';


const ChannelCard = ({channelDetail, marginTop=0}) => {
    console.log(channelDetail);
  return (
    <Box sx= {{
        borderRadius : '20px',
        boxShadow : 'none' ,
        display: 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        width : { xs: '356px', md: '320px'},
        height : '326px',
        margin: 'auto',
        marginTop:{marginTop}
    }}>
        <Link to={`/channel/${channelDetail?.id?.channelId || channelDetail?.id}`} >
            <CardContent sx={{
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', textAlign: 'center',
                color : '#fff' 
            }}>
                <CardMedia
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
                    alt = {channelDetail?.snippet?.title}
                    sx = {{
                        borderRadius : '50%',
                        height : '180px', width : '180px',
                        mb:2, border: '1px solid #3e3e3e'
                    }}
                />
                
                <Typography variant='h6'>
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ fontSize:14, color: 'gray', ml: '5px'}} />
                </Typography>

                {
                    channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt( channelDetail?.statistics?.subscriberCount.toLocaleString())} Subscriber
                        </Typography>
                    )
                }

            </CardContent>
        </Link>

    </Box>
  )
}

export default ChannelCard;