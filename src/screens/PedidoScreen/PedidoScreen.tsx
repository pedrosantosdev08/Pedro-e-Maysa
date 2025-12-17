import { useNavigate } from 'react-router-dom';
import './PedidoStyle.css'

export const PedidoScreen = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='pedido-screen'>
        <div className="container">
          <h1>Quer namorar comigo?</h1>
          <div className="botoes">
            <button id="botaosim" className="botao" onClick={()=> navigate("/conteudo")}>
              Sim
            </button>
            <button id="botaonao" className="botao">
              Não
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PedidoScreen;
