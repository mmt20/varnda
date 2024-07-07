import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';
import Swapper from './Pages/SwapperDetailes/SwapperDetailes';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import TermsPage from './Pages/TermsPage/TermsPage';


import FindHomePage from './Pages/FindHomePage/FindHomePage';
import SearchPage from './Pages/SearchPage/SearchPage';
import AdvicePage from './Pages/AdvicePage/AdvicePage';
import MixPage from './Pages/MixPage/MixPage';
import MarketPage from './Pages/MarketPage/MarketPage';
import RegionsOfEgyptPage from './Pages/RegionsOfEgyptPage/RegionsOfEgyptPage';
import EventsPage from './Pages/EventsPage/EventsPage';
import DetailesPage from './Pages/DetailesPage/DetailesPage';
import CompanyPage from './Pages/CompanyPage/CompanyPage';
import AreaPage from './Pages/AreaPage/AreaPage';
import CompanyDetailes from './Pages/CompanyDetailes/CompanyDetailes';
import MoreDeteliesPage from './Pages/MoreDeteliesPage/MoreDeteliesPage';
import FavPage from './Pages/FavPage/FavPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignupPage from './Pages/SignupPage/SignupPage';
import SubmitpropertyPage from './Pages/SubmitpropertyPage/SubmitpropertyPage';
import NewAdd from './Pages/NewAddPage/NewAdd';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/card/:id',
    element: <Swapper />,
  },
  {
    path: '/aboutUs',
    element: <AboutPage />,
  },
  {
    path: '/contactUs',
    element: <ContactPage />,
  },
  {
    path: '/terms',
    element: <TermsPage />,
  },

  {
    path: '/findHomePage',
    element: <FindHomePage />,
  },
  {
    path: '/searchPage',
    element: <SearchPage />,
  },
  {
    path: '/advicePage',
    element: <AdvicePage />,
  },
  {
    path: '/mixPage',
    element: <MixPage />,
  },
  {
    path: '/marketPage',
    element: <MarketPage />,
  },
  {
    path: '/regionsOfEgyptPage',
    element: <RegionsOfEgyptPage />,
  },
  {
    path: '/eventsPage',
    element: <EventsPage />,
  },
  {
    path: '/detailesPage/:id',
    element: <DetailesPage />,
  },
  {
    path: '/companyPage',
    element: <CompanyPage />,
  },
  {
    path: '/areaPage',
    element: <AreaPage />,
  },
  {
    path: '/companyDetailes/:id',
    element: <CompanyDetailes />,
  },
  {
    path: '/moreDeteliesPage/:id',
    element: <MoreDeteliesPage />,
  },
  {
    path: '/fav',
    element: <FavPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/submit-property',
    element: <SubmitpropertyPage />,
  },
  {
    path: '/add-apartments-duplexes',
    element: <NewAdd />,
  },
  {
    path: '*',
    element: <NotFoundPage />
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
