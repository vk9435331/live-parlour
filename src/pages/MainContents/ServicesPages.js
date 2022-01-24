import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Carousel from 'react-multi-carousel';

const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const moreData = [
  {
    id: 1,
    //add random date
    createdAt: new Date().toDateString(),
    title: 'Green Iguana',
    image: 'https://picsum.photos/200/300?image=180',
    //add avatar random png
    avatar: 'https://i.pravatar.cc/100',
    descripson: ' A woman who cuts her hair is about to change her life.',
  },
  {
    id: 2,
    //add random date
    createdAt: new Date().toDateString(),
    title: 'side faded',
    image: 'https://picsum.photos/200/300',
    //add avatar random png
    avatar: 'https://i.pravatar.cc/200',
    descripson: 'Never underestimate the power of a good haircut.',
  },
  {
    id: 3,
    //add random date
    createdAt: new Date().toDateString(),
    title: 'side faded',
    image: 'https://picsum.photos/500/200',

    //add avatar random png
    avatar: 'https://i.pravatar.cc/300',
    descripson: 'I have a new hairstyle. It’s called “I tried',
  },
  {
    id: 4,
    //add random date
    createdAt: new Date().toDateString(),
    title: 'side faded',
    image: 'https://picsum.photos/800/700',
    //add avatar random png
    avatar: 'https://i.pravatar.cc/400',
    descripson:
      'The right hairstyle can make a plain woman beautiful & a beautiful woman unforgettable.',
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
export default function ServicesPages() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <center>
      <h2>Our Services </h2>

      <Carousel responsive={responsive} swipeable arrows={false}>
        {moreData.map((item, i) => (
          <div key={i}>
            <Card
              sx={{ maxWidth: 345 }}
              // style={{
              //   display: 'flex',
              //   flexDirection: 'column',
              //   justifyContent: 'center',
              // }}
            >
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: red[500] }} src={item.avatar} />}
                title={item.title}
                subheader={item.createdAt}
              />
              <CardMedia
                component='img'
                height='194'
                image={item.image}
                alt='Paella dish'
              />
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  {item.descripson}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label='add to favorites'>
                  <FavoriteIcon />
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                  <Typography paragraph>Know More:</Typography>

                  <Typography paragraph>{item.descripson}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        ))}
      </Carousel>
    </center>
  );
}
