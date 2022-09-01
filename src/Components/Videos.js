import { Stack , Box} from "@mui/system";

import {VideoCard, ChannelCard} from "../Components"


const Videos = ({videos, direction='row'}) => {

  if (!videos?.length) return 'Loading...';

  return (
    <Stack  direction={direction} flexWrap="wrap"
        justifyContent='start' gap={2}
    >
        {videos.map( (item,idx) => (
            <Box key={idx}>
                {item.id.channelId && <ChannelCard channelDetail={item} /> }
                {item.id.videoId && <VideoCard video={item} /> }
            </Box>
        ) ) }

    </Stack>
  )
}

export default Videos;
