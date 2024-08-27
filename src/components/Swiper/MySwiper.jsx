import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import toyota from "../../assets/media/models/toyota.jpg";
import honda from "../../assets/media/models/honda.jpg";
import bmw from "../../assets/media/models/bmw.jpg";
import hyundai from "../../assets/media/models/hyundai.jpg";
import nissan from "../../assets/media/models/nissan.jpg";
import benz from "../../assets/media/models/benz.jpg";
import kia from "../../assets/media/models/kia.jpg";
import ford from "../../assets/media/models/ford.jpg";
import other from "../../assets/media/models/other.jpg";
import CarCards from "../Swiper/CarCards";
import useFetch from "../../hooks/useFetch";


const MySwiper = () => {
  const { data, loading } = useFetch(
    "http://localhost:8800/api/carslist/countByModel"
  );

  const images = [
    toyota,
    honda,
    hyundai,
    nissan,
    benz,
    bmw,
    kia,
    ford,
    other,
  ];

  return (
    <div className="swiperContainer">
      {loading ? (
        "Loading, please wait..."
      ) : (
        <Swiper>
          {data &&
            images.map((img, i) => (
              <SwiperSlide key={i}>
                <CarCards 
                  imageUrl={img} 
                  cardText={`${data[i]?.count}`} 
                  cardType={data[i]?.model} 
                />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

export default MySwiper;
