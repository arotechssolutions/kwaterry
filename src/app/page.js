import Navigation from "@/components/landingPage/navigation/navigation";
import HeroSection from "@/components/landingPage/hero/hero";
import SocialProof from "@/components/landingPage/socialProof/socialProof";
import MenuSection from "@/components/landingPage/menu/menu";
import GallerySection from "@/components/landingPage/gallery/gallery";
import ActivitiesSection from "@/components/landingPage/activities/activities";
import Footer from "@/components/landingPage/footer/footer";
import About from "@/components/landingPage/about/about"

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <About />
      <SocialProof />
      <MenuSection />
      {/* <GallerySection /> */}
      <ActivitiesSection />
      <Footer />
    </main>
  );
};

export default Index;