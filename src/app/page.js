import Navigation from "@/components/landingPage/navigation/navigation";
import HeroSection from "@/components/landingPage/hero/hero";
import AboutSection from "@/components/landingPage/about/about";
import SocialProofSection from "@/components/landingPage/socialProof/socialProof";
import MenuSection from "@/components/landingPage/menu/menu";
import GallerySection from "@/components/landingPage/gallery/gallery";
import ActivitiesSection from "@/components/landingPage/activities/activities";
import Footer from "@/components/landingPage/footer/footer";
import AdvancedAbout from "@/components/landingPage/advancedAbout/about"
import AdvancedGallery from "@/components/landingPage/advancedGallery/gallery"
import GalleryScroller from '@/components/landingPage/galleryScroller/galleryScroller'

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* <Navigation /> */}
      {/* <HeroSection /> */}
      {/* <AdvancedAbout /> */}
      {/* <AboutSection /> */}
      {/* <SocialProofSection /> */}
      {/* <MenuSection /> */}
      <GalleryScroller />
      {/* <AdvancedGallery /> */}
      {/* <GallerySection /> */}
      {/* <ActivitiesSection /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default Index;