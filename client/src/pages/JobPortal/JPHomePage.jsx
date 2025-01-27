import Banner from "../../components/Banner";
import TypewriterComponent from "../../components/TypewriterComponent";
import SearchForm from "../../components/SearchForm";
import NavBarJob from "../../components/NavbarJob";
function JobPortalPage() {
  return (
    <>
      <NavBarJob />
      <TypewriterComponent text="Your Next Career Move Starts Here, With Your Alumni Connections." />
      <SearchForm />
      <Banner />
    </>
  );
}

export default JobPortalPage;
