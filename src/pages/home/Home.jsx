import CityList from "../../components/City/CityList";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import HotelListType from "../../components/HotelType/HotelListType";
import "./home.css";
import HotelList from "../../components/Hotel/HotelList";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";

const Home = () => {
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
        {/* CityList component */}
        <CityList></CityList>
        {/* HotelListType component */}
        <HotelListType></HotelListType>
        {/* HotelList component */}
        <HotelList></HotelList>
      </div>
      {/* Contact component */}
      <Contact></Contact>
      {/* Footer component */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
