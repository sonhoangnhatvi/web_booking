import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./Detail.css";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/UI/Button/Button";

// Hotel data
const hotel_data = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};

// Render Detail component
const Detail = () => {
  return (
    <div className="container">
      <div className="header_area">
        <div className="header_area_content">
          {/* Navbar component */}
          <Navbar></Navbar>
          {/* Header component */}
          <Header></Header>
        </div>
      </div>
      <div className="body_area">
        <div className="hotel_top">
          <h2>{hotel_data.name}</h2>
          <Button className="btnResOrBook">Reserve or Book Now !</Button>
        </div>
        <div className="hotel_address">
          <FontAwesomeIcon icon="fa-location-dot" />
          <p>{hotel_data.address}</p>
        </div>
        <p className="hotel_distance">{hotel_data.distance}</p>
        <p className="hotel_price">{hotel_data.price}</p>
        <ul className="hotel_photo_list">
          {hotel_data.photos.map((photo) => (
            <img className="hotel_photo" src={photo} alt="hotel_photo"></img>
          ))}
        </ul>
        <div className="hotel_bottom">
          <div className="hotel_bottom_description">
            <h3>{hotel_data.title}</h3>
            <p>{hotel_data.description}</p>
          </div>
          <div className="hotel_bottom_nine_nights">
            <h4>Perfect for a 9-night stay</h4>
            <p>
              Located in the real heart of Krakow, this is property has an
              excellent location score of 9.8!
            </p>
            <p className="hotel_bottom_nine_nights_price">
              <strong>${hotel_data.nine_night_price}</strong> (9 nights)
            </p>
            <div className="hotel_bottom_btn">
              <Button className="btnResOrBook">Reserve or Book Now !</Button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer component */}
      <Footer></Footer>
    </div>
  );
};

export default Detail;
