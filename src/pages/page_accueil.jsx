import MainLayout from "../layouts/MainLayout";
import HeroBanner from "../components/HeroBanner";
import Actualites from "../components/Actualites";

const PageAccueil = () => {
  return (
    <MainLayout>
      <HeroBanner />
      <Actualites />
    </MainLayout>
  );
};

export default PageAccueil;
