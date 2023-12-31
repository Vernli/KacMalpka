import RootLayout from './Layout/RootLayout';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import ProductsBox, {
  productBoxDetails,
} from './Components/Product/ProductsBox';

import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Sklepy from './Pages/Sklepy';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="sklepy" element={<Sklepy />} />
      <Route
        path="wodka"
        element={<ProductsBox from="wodka" loader={productBoxDetails} />}
      ></Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

{
  /* <Route path="about" element={<About />} />
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
</Route> */
}
