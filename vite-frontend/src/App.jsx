import { Outlet } from "react-router-dom";
// MODULES
import Header from './components/HeaderComponent/Header'
import Footer from './components/FooterComponent/Footer'
import Attributions from './components/AttributionsComponent/Attributions'
import AuthDiagram from './components/AuthDiagramComponent/AuthDiagram'


function App() {

  return (
    <>
      <Header />
      <main className="wrapper">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App

{/* <BrowserRouter>
          <Switch>
            <Route>
              <JWTForm />
            </Route>
            <Route path='/attributions'>
              <Attributions />
            </Route>
            <Route path='/authdiagram'>
              <AuthDiagram />
            </Route>
          </Switch>
        </BrowserRouter> */}