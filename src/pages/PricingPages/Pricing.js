import React from "react";
import { makeStyles } from "@mui/styles";

const Pricing = () => {
  const classes = useStyles();
  // create data for pricing page with images and prices
  const data = [
    {
      title: "Latest Model",
      //symbol of rupee
      price: "₹ 500",
      //hair cutting qoutes
      description:
        "The second you switch up your hair, you’ll want to share a snap with all of your Instagram followers. After you take the perfect pic, why not use one of the quotes below as your caption?",
      buttonText: "Get Start",
      buttonVariant: "outlined",
      //hair cutting image from urls
      image:
        "https://1.bp.blogspot.com/-8WjozTBj-pM/YNVf7r-7dQI/AAAAAAAALvY/ja0z6mVw5p0LVHukHDsFSukMza6Ph4ckwCLcBGAsYHQ/s954/Boy%2BHair%2BStyle%2BImages%2B%252811%2529.jpg",
    },
    {
      title: "Bollywood Style",
      price: "₹ 1,000",
      description:
        "As we all know hair decides our looks and personality. So, here we have come up with Hairstyle selfie Quotes for Instagram. Today’s world has changed, competition in fashion is increasing day-by-day! People always try to stay up-to-date in fashion. Every one of us loves to change our hairstyles every now and then..",
      buttonText: "Get Start",
      buttonVariant: "contained",
      image:
        "https://v1.nitrocdn.com/dMpdmqaVNyoDKnlvjKpSdCgrqQLGwfuY/assets/static/optimized/rev-91bf246/wp-content/uploads/2021/07/High-Tight-Mens-Hair-Style.jpg",
    },
    {
      title: "Recommended Runnings Now",
      price: "₹ 2,000",
      description:
        "Whether you prefer to wear it straight, up, down, curly, or even shave it off, how we wear our hair is personal. For some, it’s merely a style. For others, their locks represent their inner self. We celebrate your tresses with the collection of insightful hair captions below.",
      buttonText: "Get Start",
      buttonVariant: "contained",
      image:
        "https://i.pinimg.com/736x/93/63/fc/9363fca2a4da801f3062a9609f130459.jpg",
    },
  ];
  return (
    <div className={classes.container}>
      {/* map through data and render each item */}
      {data.map((item, index) => (
        <div className={classes.pricingCard} key={index}>
          <div className={classes.pricingCardHeader}>
            <h3>{item.title}</h3>
            <h1>{item.price}</h1>
            {/* //add image */}
            <img src={item.image} alt="pricing" className={classes.img} />
            <p className={classes.description}>{item.description}</p>
            <div className={classes.pricingCardButton}>
              <button className={classes.button}>{item.buttonText}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    //disable copy paste
    "-webkit-touch-callout": "none",
    "-webkit-user-select": "none",
    "-khtml-user-select": "none",
  },
  pricingCard: {
    width: "400px",
    height: "700px",
    margin: "10px",
    padding: 0,
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    //add background color for each card
    "&:nth-child(1)": {
      backgroundColor: "blue",
      color: "#fff",
    },
    "&:nth-child(2)": {
      backgroundColor: "green",
      color: "#fff",
    },
    "&:nth-child(3)": {
      backgroundColor: "fuchsia",
      color: "#fff",
    },
    "&:hover": {
      boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
    },
  },
  pricingCardHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    height: "50px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: "1.2rem",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#000",
      color: "#fff",
    },
  },
  pricingCardButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    // margin: '10px',
    padding: "5px",
    width: "50%",
    height: "50%",
    objectFit: "cover",
    borderRadius: "15px",
  },
  description: {
    fontSize: "1.2rem",
    // fontWeight: 'bold',
    color: "#fff",
    margin: "10px",
    padding: "10px",
    fontFamily: "sans-serif",
  },
});
export default Pricing;
