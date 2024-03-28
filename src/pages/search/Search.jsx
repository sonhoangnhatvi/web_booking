import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./Search.css";
import Footer from "../../components/Footer/Footer";
import SearchList from "../../components/SearchList/SearchList";
import SearchPopup from "../../components/SearchPopup/SearchPopup";

// Search data source
const SEARCH_DATA = [
  {
    name: "Tower Street Apartments",
    distance: "500m",
    tag: "Free airport taxi",
    type: "Entire studio • 1 bathroom • 21m² 1 full bed",
    description: "Studio Apartment with Air conditioning",
    free_cancel: true,
    price: 112,
    rate: 8.9,
    rate_text: "Excellent",
    image_url: "./images/hotel_search_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    distance: "200m",
    tag: "Free Breakfast",
    type: "Entire studio • 2 bathroom • 100m² 2 full bed",
    description: "Studio Apartment",
    free_cancel: true,
    price: 140,
    rate: 9.3,
    rate_text: "Exceptional",
    image_url: "./images/hotel_search_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    distance: "100m",
    tag: "Free Parking",
    type: "1 bathroom • 51m² 2 full bed",
    description: "Hotel in Lisbon",
    free_cancel: false,
    price: 99,
    rate: 8.8,
    rate_text: "Excellent",
    image_url: "./images/hotel_search_3.jpg",
  },
];

// Render Search page
const Search = () => {
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
      <div className="search_body_area">
        {/* SearchPopup component */}
        <SearchPopup className="search-popup-area"></SearchPopup>
        {/* SearchList component */}
        <SearchList
          className="search-list-area"
          data={SEARCH_DATA}
        ></SearchList>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Search;
