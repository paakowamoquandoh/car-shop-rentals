import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "./swiper.css";
import toyota from "../../assets/media/models/toyota.jpg";
import honda from "../../assets/media/models/honda.jpg";
import bmw from "../../assets/media/models/bmw.jpg";
import hyundai from "../../assets/media/models/hyundai.jpg";
import nissan from "../../assets/media/models/nissan.jpg";
import benz from "../../assets/media/models/benz.jpg";
// import vw from "../../assets/media/models/vw.jpg";
import kia from "../../assets/media/models/kia.jpg";
import ford from "../../assets/media/models/ford.jpg";
import other from "../../assets/media/models/other.jpg";
import CarCards from "../Swiper/CarCards";
import useFetch from "../../hooks/useFetch";


const MySwiper = () => {
  const { data, loading, error } = useFetch(
    'http://localhost:8800/api/carslist/countByModel'
  );

  if (loading) {
    return <p>Loading, please wait...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }
  return (
    <div className="swiperContainer">
      <Swiper>
        <SwiperSlide>
          <CarCards imageUrl={toyota} cardText="you" cardType="me" />
        </SwiperSlide>
        <SwiperSlide>
        <CarCards imageUrl={honda} cardText="Honda Models"  />
        </SwiperSlide>
        <SwiperSlide>
        <CarCards imageUrl={hyundai} cardText="Hyundai Models"  />
        </SwiperSlide>
        <SwiperSlide>
        <CarCards imageUrl={nissan} cardText="Nissan Models"  />
        </SwiperSlide>
        <SwiperSlide>
        <CarCards imageUrl={benz} cardText="Benz Models"  />
        </SwiperSlide>
        <SwiperSlide>
        <CarCards imageUrl={bmw} cardText="BMW Models"  />
        </SwiperSlide>
        <SwiperSlide>
        <CarCards imageUrl={ford} cardText="FORD Models"  />
        </SwiperSlide>
        <SwiperSlide>
        <CarCards imageUrl={kia} cardText="KIA Models"  />
        </SwiperSlide>
        <SwiperSlide>
        <CarCards imageUrl={other} cardText="Other Models"  />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiper;
