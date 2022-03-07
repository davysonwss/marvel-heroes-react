import { BrowserRouter } from "react-router-dom";
import RoutesFc from "./routes";

import GlobalStyle from "./styles/Global";

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesFc />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
