import DonationComponent from "../components/DonationComponent";
import WallOfDonors from "../components/WallOfDonors";
import TypewriterComponent from "../components/TypewriterComponent";
import NavBar from "../components/Navbar";
export default function HomePage() {
  return (
    <>
      <NavBar/>
      <TypewriterComponent text="Empower Future Leaders, Your Generosity Fuels Change."/>
      <WallOfDonors />
      <DonationComponent />
      <DonationComponent />
      <DonationComponent />
      <DonationComponent />
      <DonationComponent />
      <DonationComponent />
      <DonationComponent />
      <DonationComponent />
    </>
  );
}
