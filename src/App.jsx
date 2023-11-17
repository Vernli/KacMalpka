import Belt from './Components/Belt';
import Carousels from './Components/Carousels';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';
import Navigation from './Components/Navigation';
import RootLayout from './Layout/RootLayout';
import Home from './Pages/Home';

import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      {/* <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
