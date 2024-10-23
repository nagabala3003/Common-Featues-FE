import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "@mui/material/Grid2";
import { List, AutoSizer, ListRowRenderer } from "react-virtualized";
import "react-virtualized/styles.css";
import Grid2 from "@mui/material/Grid2";

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

const Card1: React.FC<card1Props> = ({ cardData, loadMore }) => {
  const [hasMore, setHasMore] = useState(true);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.screen.availWidth,
        height: window.screen.availHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchData = () => {
    if (cardData.length >= 100) {
      setHasMore(false); // End scroll if more than 300 items
    } else {
      loadMore(); // Call the loadMore function from props
    }
  };

  useEffect(() => {
    getCardsPerRow(dimensions.width);
  }, [dimensions]);

  const getCardsPerRow = (width: any) => {
    if (width < 600) return 1; // Small screens (1 card)
    if (width < 960) return 3; // Medium screens (3 cards)
    return 4; // Large screens (4 cards or more)
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
        {({ height, width }: any) => {
          const cardsPerRow = getCardsPerRow(dimensions.width); // Number of cards per row
          const cardWidth = width / cardsPerRow; // Calculate card width
          const cardHeight = 250; // Set an approximate card height
          const rowHeight = cardHeight; // Adjust based on card content
          const rowCount = Math.ceil(cardData.length / cardsPerRow); // Calculate total rows

          return (
            <List
              width={dimensions.width}
              height={dimensions.height}
              rowHeight={rowHeight}
              rowCount={rowCount}
              rowRenderer={({ index, key, style }: any) => {
                // Calculate the items for the current row
                const items = cardData.slice(
                  index * cardsPerRow,
                  index * cardsPerRow + cardsPerRow
                );

                return (
                  <>
                    <div
                      key={index}
                      style={{
                        ...style,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {items.map((item: any) => (
                        <Card
                          key={item.id}
                          sx={{ width: cardWidth - 20, margin: "10px 10px" }}
                        >
                          {" "}
                          {/* Adjust for margin */}
                          <CardActionArea>
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                {item.id}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ color: "text.secondary" }}
                              >
                                Name: {item.name}, Email: {item.email}, Joined:{" "}
                                {item.joinedOn.toDateString()}, Comments:{" "}
                                {item.commentCount}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Button size="small" color="primary">
                              Share
                            </Button>
                          </CardActions>
                        </Card>
                      ))}
                    </div>
                  </>
                );
              }}
            />
          );
        }}
      </AutoSizer>

      {/* </div> */}
    </>
  );
};

export default React.memo(Card1);
