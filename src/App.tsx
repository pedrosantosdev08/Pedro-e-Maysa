import { Route, Routes } from "react-router-dom";
import PedidoScreen from "./screens/PedidoScreen/PedidoScreen";
import ConteudoScreen from "./screens/ConteudoScreen/ConteudoScreen";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PedidoScreen />} />
      <Route path="/conteudo" element={<ConteudoScreen />} />
    </Routes>
  );
}

export default App;
