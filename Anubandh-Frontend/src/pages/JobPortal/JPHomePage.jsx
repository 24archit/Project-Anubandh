import Banner from "../../components/Banner";
import TypewriterComponent from "../../components/TypewriterComponent";
import SearchForm from "../../components/SearchForm";
import NavBar from "../../components/Navbar";
function JobPortalPage() {
  return (
    <>
      <NavBar />
      <TypewriterComponent text="Your Next Career Move Starts Here,', 'With Your Alumni Connections." />
      <SearchForm />
      <Banner />
    </>
  );
}

export default JobPortalPage;
