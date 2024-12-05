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
  },
  {
    price: "$1,920",
    image: "https://images.craigslist.org/00Y0Y_b6Kvycm1We_0jA0eK_600x450.jpg",
    title: "Cozy 1 BR apartment in Glendale with mountain views",
    details: "10 mins ago · 1br 800ft² · Glendale",
  },
  {
    price: "$2,350",
    image: "https://images.craigslist.org/00F0F_1KDF1QLLpY1_0vm0l2_600x450.jpg",
    title: "Luxury 2 BR condo with pool access in Pasadena",
    details: "12 mins ago · 2br 1200ft² · Pasadena",
  },
  {
    price: "$1,630",
    image: "https://images.craigslist.org/00V0V_lHAq1jzHvNt_0uY0kD_600x450.jpg",
    title: "Modern Studio near Downtown LA",
    details: "15 mins ago · Studio 450ft² · Downtown LA",
  },
  {
    price: "$2,750",
    image: "https://images.craigslist.org/00J0J_fcEePBLOun0_0g80aM_600x450.jpg",
    title: "Spacious 3 BR townhouse with garage in Burbank",
    details: "5 mins ago · 3br 1600ft² · Burbank",
  },
  {
    price: "$1,480",
    image: "https://images.craigslist.org/00a0a_eOGWfiwuOo4_0gw0co_600x450.jpg",
    title: "Bright Studio with hardwood floors in Santa Monica",
    details: "8 mins ago · Studio 500ft² · Santa Monica",
  },
  {
    price: "$3,100",
    image: "https://images.craigslist.org/00n0n_3EbdZllrihl_0jm0cM_600x450.jpg",
    title: "Penthouse apartment with ocean view in Malibu",
    details: "20 mins ago · 2br 1500ft² · Malibu",
  },
  {
    price: "$2,100",
    image: "https://images.craigslist.org/00V0V_9LdJ2V4LeJe_0q90hq_600x450.jpg",
    title: "Pet-friendly 2 BR with large balcony in Culver City",
    details: "18 mins ago · 2br 1100ft² · Culver City",
  },
  {
    price: "$1,950",
    image: "https://images.craigslist.org/00J0J_50Hk2qZKGWn_0jA0eK_600x450.jpg",
    title: "Charming 1 BR apartment with garden access in Hollywood",
    details: "22 mins ago · 1br 900ft² · Hollywood",
  },
  {
    price: "$1,700",
    image: "https://images.craigslist.org/01515_g4nHZVZHwSm_0jm0cU_600x450.jpg",
    title: "Quiet Studio in Koreatown with utilities included",
    details: "30 mins ago · Studio 400ft² · Koreatown",
  },
  {
    price: "$2,700",
    image: "https://images.craigslist.org/01515_6RMoNyTFKh2_0ak06Q_600x450.jpg",
    title: "Modern 2 BR in Westwood, close to UCLA",
    details: "25 mins ago · 2br 1300ft² · Westwood",
  },
  {
    price: "$1,850",
    image: "https://images.craigslist.org/01515_6RMoNyTFKh2_0ak06Q_600x450.jpg",
    title: "Stylish 1 BR with city views in Silver Lake",
    details: "40 mins ago · 1br 850ft² · Silver Lake",
  },
  {
    price: "$2,450",
    image: "https://images.craigslist.org/01010_cy02y70PjnP_0jA0eK_600x450.jpg",
    title: "Newly renovated 2 BR with gym access in Marina Del Rey",
    details: "35 mins ago · 2br 1150ft² · Marina Del Rey",
  },
];

const ProductCard = ({ price, image, title, details }) => {
  return (
    <div style={styles.card}>
      <div style={styles.price}>{price}</div>
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.title}>{title}</div>
      <div style={styles.details}>{details}</div>
    </div>
  );
};

const ProductList = () => {
  return (
    <div style={styles.container}>
      {products.map((product, index) => (
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
