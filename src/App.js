import React from 'react';
import Navigation from "./components/Navigation";
import WelcomeHero from "./components/welcome-hero";
import WelcomeHero2 from "./components/WelcomeHero-2";
import ContentSection from "./components/contentSection";
import ContentSectionContact from "./components/contentSectionContact";
import ImageGallery from "./components/ImageGallery";
import FooterComp from "./components/footer";

const WelcomeHero2Body= "We are MTX. A company by professionals for professionals with a goal to realise your dream build. \n From Budget to high-end PCs and the service of all electronics. We've got you covered."
const GamingRigsSubHeading= "Live on the bleeding edge of performance with MTX PCs.";
const gamingBodyText="Looking for a gaming pc? You've come to the right place. We at MTX provide the highest quality gaming rigs based on your budget by carefully selecting each component based on the games that you play. Start dominating the gaming scene while not crushing your wallet with MTX.";
const workstationBodyText= "We at MTX create master crafted elegant systems for your productivity and accelerate your workflows. Render times and Previewing getting frustrating ? Our workstations crunch through those numbers and layers with ease and all while looking good doing it. Got a tight budget ? We'll make it worthwhile anyway.";
const workstationHeading= "You're a Professional.\n You're an Artist.\n Your work is Art.";
const serviceTitle= "Live your world, live your Moments \n Leave the rest to us";
const serviceBodyText= "We offer repairs, upgrades, cable management and cleaning services for desktops, consoles(PS4/Xbox) and mobile phones! PC running slow? We'll get it running and looking like new in no time at all ! ";

const contactBodyText="+91 8766432451 \n +91 7972450746 \n +91 8788018570 \n";
const contactTitle="Contact \n Us";

// window.addEventListener('resize', ()=> {console.log(window.innerWidth)});



function App() {

  
 
  
  return (
    <div className="AppContainer">
        <Navigation></Navigation>
    <WelcomeHero title="Welcome To MTX"></WelcomeHero>
    <WelcomeHero2 name="WelcomeHero-2" title="Dare to be Bold" bodyText={WelcomeHero2Body}></WelcomeHero2>
    <ContentSection id="Gaming" clName="contentSectionGaming" title="Custom Gaming Rigs" imgURL="images/cooler-gaming.jpg" subHeading={GamingRigsSubHeading} bodyText={gamingBodyText}></ContentSection>
    <ImageGallery />
    <ContentSection id="Workstation" clName="contentSectionWorkStation" title={workstationHeading} imgURL="images/workstation.jpg" subHeading="Custom Workstations" bodyText={workstationBodyText}></ContentSection>
    <ContentSection id="Services" clName="contentSectionService" title={serviceTitle} imgURL="" subHeading="Cleaning, Service and more" bodyText={serviceBodyText}></ContentSection>
    <ContentSectionContact id="Contact" clName="contentSectionContact" title={contactTitle} imgURL="images/logoBlack.png" subHeading="" bodyText={contactBodyText} emailID="cruzinfotek@gmail.com"></ContentSectionContact>
    <FooterComp />
    </div>
  
  );
}

export default App;
