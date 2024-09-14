import Navbar from "../component/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { PageRoute, PageRouteComponent } from "./routing/PageRouting";
import Footer from "../component/Footer";
import ContainerContent from "../component/ContainerContent";

const RouteProvider = () => {
  return (
    <>
      <Navbar />
      <ContainerContent>
        <Routes>
          {PageRouteComponent.RouteSetting.map((routeSetting: PageRoute) => (
            <Route path={routeSetting.path} element={routeSetting.component} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ContainerContent>
      <Footer />
    </>
  );
};

export default RouteProvider;
