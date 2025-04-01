import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import  Products  from "@/sections/Products";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials"
import { Footer } from "@/sections/Footer"

export default function Home(){
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Products />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}