import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const imageLists = [
  {
    id: 1,
    descripson: 'loream ipsum loream ipsume',
    //random title
    title: 'Green Iguana',
    //random image
    image: 'https://picsum.photos/200/300?image=180',
  },
  {
    id: 2,
    descripson: 'loream ipsum loream ipsume',
    title: 'side faded',
    // add picsum iamge
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    descripson: 'loream ipsum loream ipsume',
    title: 'side faded',
    // add picsum iamge
    image: 'https://picsum.photos/500/200',
  },
  {
    id: 4,
    descripson: 'loream ipsum loream ipsume',
    title: 'side faded',
    // add picsum iamge
    image: 'https://picsum.photos/800/700',
  },
  {
    id: 5,
    descripson: 'loream ipsum loream ipsume',
    title: 'my new style',
    // hair style
    image: 'https://picsum.photos/200/300?image=10',
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const OurCustomer = () => {
  return (
    <center>
      <Carousel responsive={responsive} swipeable arrows={false}>
        {imageLists.map(item => (
          <Card
            key={item.id}
            sx={{ maxWidth: 345 }}
            style={{ flexDirection: 'row' }}
          >
            <CardMedia
              image={item.image}
              title={item.title}
              style={{ height: 200 }}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {item.title}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {item.descripson}
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size='small' color='primary'>
                Share
              </Button>
              <Button size='small' color='primary'>
                Learn More
              </Button>
            </CardActions> */}
          </Card>
        ))}
      </Carousel>
    </center>
  );
};

export default OurCustomer;
