import React from 'react';
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
import SliderTwo from "../components/SliderTwo";
import GiveArea from "../components/GiveArea";
import MakeWorldArea from "../components/MakeWorldArea";
import ClientsLogo from "../components/ClientsLogo";
import DonateArea from "../components/DonateArea";
import MixerAreaThree from "../components/MixerAreaThree";
import CausesArea from "../components/CausesArea";
import CategoryArea from "../components/CategoryArea";
import GalleryCarousel from "../components/GalleryCarousel";
import Pricing from "../components/Pricing";
import EventsHome from "../components/EventsHome";
import VolunteerArea from "../components/VolunteerArea";
import CallToActionThree from "../components/CallToActionThree";

const HomePageTwo = () => {
    return (
        <Layout pageTitle="Oxpitan | Home 2">
            <NavTwo />
            <SliderTwo />
            <GiveArea />
            <MakeWorldArea />
            <ClientsLogo />
            <DonateArea />
            <MixerAreaThree />
            <CausesArea />
            <CategoryArea />
            <GalleryCarousel />
            <Pricing />
            <EventsHome />
            <VolunteerArea />
            <CallToActionThree />
            <Footer />
        </Layout>
    );
};

export default HomePageTwo;
