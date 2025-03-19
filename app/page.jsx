import AboutHome from "@/components/blocks/About/About-Home/AboutHome";
import Banner from "@/components/blocks/Banner/Banner";
import Services from "@/components/blocks/Services/Services";
import WorksHome from "@/components/blocks/Works/Works-Home/WorksHome";
import React from "react";

const Home = () => {
    return(
        <>
            <Banner />
            <AboutHome />
            <Services />
            <WorksHome />
        </>
    )
};

export default Home;