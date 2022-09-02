import { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom'
import { FetchFromAPI } from '../utils/FetchFromAPI';

import {Box, Stack, Typography} from "@mui/material"
import ReactPlayer from 'react-player';
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import Videos from './Videos';


const VideoDetail = () => {

  const {id} = useParams();
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    FetchFromAPI(`videos?id=${id}&part=snippet,statistics`)
    .then( (data) => {
      setVideoDetail(data.items[0])
    } )

    FetchFromAPI(`search?relatedToVideoId=${id}&part=snippet&type=video`)
    .then( (data) => {
      console.log(data?.items);
      setVideos(data?.items)
    })
  }, [id])

  if(!videoDetail?.snippet) return "Loding...";

  const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetail ;
  
    return (
      <Box minHeight='95vh'>
        <Stack  direction={{ xs: 'column', md: 'row'} }>
          <Box flex={1}>
            <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
              <ReactPlayer url={`https//wwww.youtube.com/watch?v=${id}`} controls className='react-player' />
              <Typography color='#fff' variant='h5' fontWeight='bold' p={2} >
                {title}
              </Typography>

              <Stack direction='row' justifyContent='space-between' 
                sx = {{ color: '#fff'}} px={2} py={1}
              >
                <Link to={`/channel/${channelId}`}>
                  <Typography variant={{sm: "subtitle1",md: "h6"}} color='#fff'>
                    {channelTitle}
                    <CheckCircleIcon sx={{ fontSize:12, color: 'gray', ml: '5px'}} />
                  </Typography>
                </Link>

                <Stack direction='row' gap="20px" alignItems='center' >
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                      {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                      {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>

          <Box px={2} py={{md:1, xs:5}} justifyContent='center' alignItems='center'  > 
            <Videos videos={videos} direction="column"/>
          </Box>
        </Stack>
      </Box>
    )
  }
export default VideoDetail ;