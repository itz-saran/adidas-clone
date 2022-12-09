import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Advertisement from "../../components/Advertisement/Advertisement";
import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import News from "../../components/News/News";
import Popular from "../../components/Popular/Popular";
import NewsLetter from "../../components/SignUpAd/NewsLetter";
import Story from "../../components/Story/Story";
import { getHomeData } from "../../redux/homeSlice";

import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { carousels, category, isLoading } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div className="title-xl f-bold-pro">Loading...</div>
      ) : (
        <>
          <Header />
          <Advertisement
            title="YZY 700 MVN ANALOG"
            content="OCTOBER 6"
            yeezy
            buttons={[{ title: "LEARN MORE", to: "/" }]}
            white
          >
            <ImageContainer
              srcLg="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/YZY-700-MNVN-ANALOG-HP-D_tcm209-948132.jpg"
              srcMd="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/enIN/Images/YZY-700-MNVN-ANALOG-HP-T_tcm209-948133.jpg"
              srcSm="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/enIN/Images/YZY-700-MNVN-ANALOG-HP-T_tcm209-948133.jpg"
              srcBase="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/YZY-700-MNVN-ANALOG-HP-D_tcm209-948132.jpg"
            />
          </Advertisement>
          <Advertisement
            title="FLAT 50% OFF ON OUTLETS"
            content="+ SITEWISE 15% FOR MEMBERS"
            buttons={[
              { title: "SHOP MEN", to: "" },
              { title: "SHOP WOMEN", to: "", width: 1 },
              { title: "SHOP KIDS", to: "" },
            ]}
          >
            <ImageContainer
              srcLg="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/2880x1280_tcm209-948103.jpg"
              srcMd="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/enIN/Images/1600x1600_tcm209-948105.jpg"
              srcSm="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_600,w_600/enIN/Images/750x964_tcm209-948104.jpg"
              srcBase="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/2880x1280_tcm209-948103.jpg"
            />
          </Advertisement>
          <main className="main-container">
            <Popular />
            <Category content={category} />
            <NewArrivals newArrivals={carousels.arrivals} />
            <News news={carousels.news} />
          </main>
          <Story />
          <NewsLetter />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
