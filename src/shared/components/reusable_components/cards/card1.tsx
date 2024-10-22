import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Grid from '@mui/material/Grid2';
import { List, AutoSizer, ListRowRenderer } from 'react-virtualized';
import 'react-virtualized/styles.css'; 

interface CardData {
  id: number;
  name: string;
  email: string; 
  joinedOn: Date;
  commentCount: number;
}

interface card1Props {
  cardData: CardData[];
  loadMore: () => void; // Function to load more data passed via props
}

const Card1: React.FC<card1Props> = ({ cardData,loadMore }) => {
  const [hasMore, setHasMore] = useState(true);

  const fetchData = () => {
    if (cardData.length >= 100) {
      setHasMore(false); // End scroll if more than 300 items
    } else {
      loadMore(); // Call the loadMore function from props
    }
  };

  return (
    <>     
        {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
      <InfiniteScroll
        dataLength={cardData.length} // This is an important field to render the next data        
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // scrollableTarget="parentScrollableDiv"
      >
            {cardData.map((item: CardData) => (
            // <Grid size={{xs: 2, sm: 4, md: 4 ,lg:3 }} key={item.id} sx={{margin:1}}>
            //     <Item>
          <Card sx={{ maxWidth: 345, margin: 3 }} >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.id}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Name: {item.name}, Email: {item.email}, Joined: {item.joinedOn.toDateString()}, Comments: {item.commentCount}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
            //     </Item>
            // </Grid>
        ))}
        
      </InfiniteScroll>
        </Grid> */}
        {/* <div> */}
        <AutoSizer>
  {({ height, width }:any) => (
    <List
      width={1000}
      height={1000}
      rowHeight={200} // Approximate height of each Card
      rowCount={cardData.length} // Total number of items
      rowRenderer={({ index, key, style }:any) => {
        const item = cardData[index]; // Get the current item using index

        return (
          <div key={key} style={style}> {/* Ensure it uses the style prop for virtualization */}
            <Card sx={{ maxWidth: 345, margin: 3 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.id}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Name: {item.name}, Email: {item.email}, Joined: {item.joinedOn.toDateString()}, Comments: {item.commentCount}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      }}
    />
  )}
</AutoSizer>

        {/* </div> */}
    </>
  );
}

export default React.memo(Card1);
