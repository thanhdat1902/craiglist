import React from "react";

const products = [
  {
    price: "$2,060",
    image: "https://images.craigslist.org/00707_jD7nGRCaHOi_0ew09G_600x450.jpg",
    title: "Pet friendly community in Covina. 1 BD / 1 BA",
    details: "13 mins ago · 1br 1200ft² · Covina",
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 1200,
    location: "Covina",
    furnished: true,
    isCatFriendly: true,
    isDogFriendly: true,
  },
  {
    price: "$1,785",
    image: "https://images.craigslist.org/00b0b_8TvGRD3sLdP_0d40hq_600x450.jpg",
    title: "Privacy and ventilation! Every apt includes...",
    details: "13 mins ago · 385ft² · Van Nuys - Sherman Oaks",
    bedrooms: 0,
    bathrooms: 1,
    squareFeet: 385,
    location: "Van Nuys - Sherman Oaks",
    furnished: false,
    isCatFriendly: true,
    isDogFriendly: true,
  },
  {
    price: "$1,572",
    image: "https://images.craigslist.org/00c0c_lEdtZILFTO6_0q70hq_600x450.jpg",
    title: "Rent an amazing Studio – Close to transit...",
    details: "14 mins ago · 385ft² · Van Nuys - Sherman Oaks",
    bedrooms: 0,
    bathrooms: 1,
    squareFeet: 385,
    location: "Van Nuys - Sherman Oaks",
    furnished: false,
    isCatFriendly: false,
    isDogFriendly: false,
  },
  {
    price: "$2,988",
    image: "https://images.craigslist.org/00C0C_1r23qwrilpP_07K0ak_600x450.jpg",
    title: "The lifestyle you've been dreaming of: Explore...",
    details: "14 mins ago · 2br 1306ft² · Woodland Hills",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1306,
    location: "Woodland Hills",
    furnished: true,
    isCatFriendly: true,
    isDogFriendly: true,
  },
  {
    price: "$2,115",
    image: "https://images.craigslist.org/00n0n_8cDYzuJmSSp_0jm0cT_600x450.jpg",
    title: "Check us out! We offer washers and dryers...",
    details: "14 mins ago · 1br 792ft² · Northridge",
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 792,
    location: "Northridge",
    furnished: true,
    isCatFriendly: true,
    isDogFriendly: true,
  },
  {
    price: "$1,987",
    image: "https://images.craigslist.org/00S0S_bJc8gK1n0I5_0uY0kI_600x450.jpg",
    title: "Fabulous 618 sq ft JR 1 bed, 1 bath in south...",
    details: "14 mins ago · 1br 648ft² · Studio City",
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 648,
    location: "Studio City",
    furnished: false,
    isCatFriendly: true,
    isDogFriendly: true,
  },
];

const ProductCard = ({ price, image, title, details, bedrooms, furnished }) => {
  return (
    <div style={styles.card}>
      <div style={styles.price}>{price}</div>
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.title}>{title}</div>
      <div style={styles.details}>{details}</div>
      <div>Bedrooms: {bedrooms}</div>
      <div>{furnished ? "Furnished" : ""}</div>
      <div></div>
    </div>
  );
};

const ProductList = ({
  isOneBedroom,
  isTwoBedroom,
  isFurnished,
  isPetFriendly,
}) => {
  return (
    <div style={styles.container}>
      {products
        .filter((product) => {
          if (!isOneBedroom && !isTwoBedroom && !isFurnished && !isPetFriendly)
            return true;
          return (
            (isOneBedroom && product.bedrooms === 1) ||
            (isTwoBedroom && product.bedrooms === 2) ||
            (isFurnished && product.furnished) ||
            (isPetFriendly && (product.isCatFriendly || product.isDogFriendly))
          );
        })
        .map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    justifyContent: "space-center",
    flexWrap: "wrap",
    marginTop: "60px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    width: "400px",
    textAlign: "center",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "green",
    marginBottom: "5px",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "4px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "500",
    margin: "10px 0",
    color: "#0000EE",
    textDecoration: "none",
    cursor: "pointer",
  },
  details: {
    fontSize: "14px",
    color: "#555",
  },
};

export default ProductList;
