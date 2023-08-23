import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
        <StarsCanvas />
          <div className="bg-np-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
            <About />
            <Experience />
          <div className="relative z-0">
            <Contact />
            {/* <StarsCanvas /> */}
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
