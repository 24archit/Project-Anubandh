import Banner from "../../components/Banner";
import Heading from "../../components-Job-Portal/Heading";
import TypewriterComponent from "../../components/TypewriterComponent";
import SearchForm from "../../components/SearchForm";
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
