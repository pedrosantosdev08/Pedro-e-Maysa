import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { Historia } from "../../components/Historia";
import "./ConteudoStyle.css";

export const ConteudoScreen = () => {
  return (
    <>
      <div className="conteudo-screen">
        <Header />
        <Historia />
        <Footer />
      </div>
    </>
  );
};

export default ConteudoScreen;
