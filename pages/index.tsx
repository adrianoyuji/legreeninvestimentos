import Layout from "components/ui/Layout/index";
import Heading from "components/sections/Heading";
import Description from "components/sections/Description";
import Features from "components/sections/Features";
import Cases from "components/sections/Cases";
import SocialMedia from "components/sections/SocialMedias";
import Contact from "components/sections/Contact";

const IndexPage = () => (
  <Layout title="Le Green Investimentos">
    <Heading />
    <Description />
    <Features />
    <Cases />
    <SocialMedia />
    <Contact />
  </Layout>
);

export default IndexPage;
