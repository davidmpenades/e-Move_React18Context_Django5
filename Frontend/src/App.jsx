import React, { Suspense } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import MyFooter from "./component/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SpinnerLoading from "./component/SpinnerLoading/SpinnerLoading";
import { StationsContextProvider } from "./context/StationsContext";
import { BikesContextProvider } from "./context/BikesContext";
import { SlotsContextProvider } from "./context/SlotsContext";
import { IncidentsContextProvider } from "./context/IncidentsContext";
import { NotificationsContextProvider } from "./context/NotificationsContext";
import { AuthContextProvider } from "./context/AuthContext";
// guard
import AuthGuard from "./services/Guards/AuthGuard";
import AdminGuard from "./services/Guards/AdminGuard";

function App() {
  const Home = React.lazy(() => import("./pages/Home/Home"));
  const Dashboard = React.lazy(() => import("./pages/admin/Dashboard"));
  const StationsList = React.lazy(() =>
    import("./pages/admin/Station/StationsList")
  );
  const Plan = React.lazy(() => import("./pages/Plan/Plan"));
  const Contact = React.lazy(() => import("./pages/Contact/Contact"));
  const Rent = React.lazy(() => import("./pages/Rent/Rent"));
  const StationDetail = React.lazy(() =>
    import("./pages/Client/Station/StationDetail")
  );
  const SlotCard = React.lazy(() => import("./component/Rent/SlotCard"));
  const Login = React.lazy(() => import("./pages/Login/Login"));
  const Profile = React.lazy(() => import("./pages/Client/Profile/Profile"));

  return (
    <div className="App">
      <Suspense fallback={<SpinnerLoading />}>
        <BrowserRouter>
          <StationsContextProvider>
            <BikesContextProvider>
              <SlotsContextProvider>
                <AuthContextProvider>
                  <IncidentsContextProvider>
                    <NotificationsContextProvider>
                      <Header />
                      <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                      />
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route element={<AdminGuard />}>
                          <Route path="/dashboard" element={<Dashboard />} />
                          <Route
                            path="/dashboard/stationsList"
                            element={<StationsList />}
                          />
                        </Route>
                        <Route path="/plan" element={<Plan />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/rent" element={<Rent />} />
                        <Route
                          path="/StationDetail"
                          element={<StationDetail />}
                        />
                        <Route path="/SlotCard" element={<SlotCard />} />
                        <Route path="/Login" element={<Login />} />
                        <Route element={<AuthGuard />}>
                          <Route path="/profile" element={<Profile />} />
                        </Route>
                      </Routes>                      
                      <MyFooter />
                    </NotificationsContextProvider>
                  </IncidentsContextProvider>
                </AuthContextProvider>
              </SlotsContextProvider>
            </BikesContextProvider>
          </StationsContextProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
