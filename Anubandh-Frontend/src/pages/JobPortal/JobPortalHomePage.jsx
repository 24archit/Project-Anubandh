import Banner from "../../components-Job-Portal/Banner";
import Heading from "../../components-Job-Portal/Heading";
import TypewriterComponent from "../../components-Job-Portal/TypewriterComponent";
import SearchForm from "../../components-Job-Portal/SearchForm";
function JobPortalPage() {
  return (
    <>
      <TypewriterComponent />
      <SearchForm />
      <Banner />
      <Heading />
    </>
  );
}

export default JobPortalPage;
