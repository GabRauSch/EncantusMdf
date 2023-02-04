import { MainPage } from "./routes/MainPageRoutes";
import { HeaderPages } from "./routes/HeaderPageRoutes";
import { FooterPage } from "./routes/FooterPageRoutes";

function App() {
  return (
    <div>
      <header>
        <HeaderPages />
      </header>
      <body>
        <MainPage />
      </body>
      <footer>
        <FooterPage />
      </footer>
    </div>
  )
}

export default App;
