import { useState, useEffect } from "react";
import {useParams } from "react-router-dom"
import { FetchFromAPI } from "../utils/FetchFromAPI";

import { Stack , Box} from "@mui/system";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";



const ChannelDetail = () => {

    const {id} = useParams();
    const [channelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState([])

    useEffect(() => {
      FetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setChannelDetail(data?.items[0])
      });

      FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        setVideos(data?.items)
      })

    },[id])

    return (
        <Box minHeight='95vh' >
          <Box>
            <div style={{
              height:'300px',
              background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
              zIndex: 10,
            }} />
            <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
          </Box>

          <Box display='flex' p={2}>
            <Box  sx={{
              mr : {sm:'100px'},
            }} />
            <Videos  videos={videos}/>
          </Box>


        </Box>
    )
  }
export default ChannelDetail ;