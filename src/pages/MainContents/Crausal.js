import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const crausalData = [
  {
    id: 1,
    title:
      "The fade is a men’s haircut where the hair on the sides and back of your head gradually get shorter from top to bottom. The process of fading from one length to another is generally achieved using hair clippers. Because the fade comes in a variety of styles, it is important to tell your barber the type of fade haircut you want. You can choose a low, mid or high fade to determine where the cut is tapered. You can also decide how short to fade the cut by asking for a bald fade, which will blend your hair into your skin.",
    image:
      "https://www.menshairstylestoday.com/wp-content/uploads/2019/12/Types-of-Haircuts-For-Men.jpg",
    name: "fade",
  },
  {
    id: 2,
    title:
      "Also known as a taper, the taper fade is a clean-cut modern haircut that continues to be popular in barbershops. The main difference between the taper and fade is that the fade cut is blended into the skin while the taper leaves very short hair. The taper is an incredibly chic and classy look that any man can get to elevate his appearance",

    image:
      "https://www.menshairstylestoday.com/wp-content/uploads/2021/05/Fade-Haircut.jpg",
    name: "Taper Fade",
  },
  {
    id: 3,
    title:
      "The slicked back is a classic hairstyle often styled by business professional men and young stylish teenage guys. The slick back is a wet hairstyle meant to look well put-together, so you’ll want to use a high-hold high-shine product like a pomade or gel for your slick back. Men with fine and straight hair textures will find the most success with the slick back hairstyle. Slicked back hair remains one of the coolest modern men’s hairstyles to get right now.",
    image:
      "https://www.menshairstylestoday.com/wp-content/uploads/2021/05/Comb-Over.jpg",
    name: "Slicked Back",
  },
  {
    id: 3,
    title:
      "The low fade features a more even and gradual blend between the short hair around the ears and the longer hair near the crown than other taper or fade haircuts. The low fade is more subtle than some of the other fade options but no less stylish by any means. As with any fade, you’ll want regular cuts to maintain the clean look. The low fade pairs exceptionally well with some stubble or a short beard.",
    image:
      "https://www.menshairstylestoday.com/wp-content/uploads/2021/05/Low-Fade.jpg",
    name: "Low Fade",
  },
  {
    id: 4,
    title:
      "The undercut is a very popular modern haircut where the sides and back are clipped short or shaved. Traditionally, the undercut haircut features a full disconnect and is not faded, and the hair on top is left much longer. Some guys will ask their barber to taper the cut to create an undercut fade. The undercut can be combined with a range of men’s hairstyles to create a trendy look. The hair on top can be combed over, swept to the side, slicked back, brushed up, styled into a pompadour, or made to get a quiff. Ultimately, the undercut is one of the coolest “short on the sides, long on the top” haircuts you can have these days",
    image:
      "https://www.menshairstylestoday.com/wp-content/uploads/2021/05/Undercut.jpg",
    name: "Undercut",
  },
  {
    id: 5,
    title:
      "he quiff is another classic men’s hairstyle that is very similar to the pompadour. They both feature hair that is styled back and up away from the forehead with volume. The quiff differs from the pompadour by first brushing the hair forward before styling it up and back, and is typically a more casual and messy hairstyle for men. Coupled with a fade cut on the sides, the quiff haircut is versatile and trendy for guys with all hair types.",
    image:
      "https://www.menshairstylestoday.com/wp-content/uploads/2016/08/Quiff-Haircut.jpg",
    name: "Pompadour",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
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
const Crausal = () => {
  return (
    <div>
      <Carousel responsive={responsive} autoPlay infinite showDots arrows>
        {crausalData.map((item) => (
          <center key={item.id} style={{ margin: 50, padding: 10 }}>
            <h2>
              Hair Cut Name{" : "} {item.name}
            </h2>
            <img
              src={item.image}
              alt={item.title}
              height={650}
              width={750}
              style={{ borderRadius: "10px" }}
            />
            {/* //create a card */}
          </center>
        ))}
      </Carousel>
    </div>
  );
};

export default Crausal;
