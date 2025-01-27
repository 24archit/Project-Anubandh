import DonationComponent from "../components/DonationComponent";
import WallOfDonors from "../components/WallOfDonors";
import TypewriterComponent from "../components/TypewriterComponent";
import NavBar from "../components/Navbar";
import Heading from "../components/Heading";
import "../styles/DonationPage.css";
export default function HomePage() {
  return (
    <>
      <NavBar />
      <TypewriterComponent text="Empower Future Leaders, Your Generosity Fuels Change." />

      <WallOfDonors />
      <div className="donation-page-header"> 
        <Heading heading="Active Donations Needing Your Support" />
        <button>Add a Donation Request</button>
      </div>
      <div className="donors-grid">
        <DonationComponent />
        <DonationComponent />
        {/* <DonationComponent />
      <DonationComponent />
      <DonationComponent />
      <DonationComponent />
      <DonationComponent />
      <DonationComponent /> */}
      </div>
    </>
  );
}
