import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Sports from './components/pages/Sports.jsx'
import UpcomingMovies from './components/pages/Upcoming.jsx'
import ErrorPage from './components/pages/ErrorPage.jsx'
import Header from './global/Header';
import Footer from './global/Footer';
import MovieDetail from './components/movieFilters/MovieDetail.jsx'
import SeatSelection from './components/movieFilters/SeatSelection.jsx'


const Applayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}


const appRouter = createBrowserRouter(
  [
    {
      element: <Applayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <App />
        },
        {
          path: "/upcoming-movies",
          element: <UpcomingMovies />
        },
        {
          path: "/sports",
          element: <Sports />
        },
        {
          path: "/movie/:id",
          element: <MovieDetail />
        },
        {
          path: "/seat-selection/:id",
          element: <SeatSelection />
        }
      ]
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}></RouterProvider>
)
