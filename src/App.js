import React, { lazy, Suspense } from "react";
import "@fontsource/poppins";
import theme from "./Theme/Theme";
import { Logo_Strides } from "./Layout/Images";
import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { LoaderPage, LoaderScreen } from "./Layout/Loading/Loading";

// Layout Import
const PageLogin = lazy(() => import("./Layout/Pages/Page_Login"));
const PageInner = lazy(() => import("./Layout/Pages/Page_Inner"));
const Navigation = lazy(() => import("./Layout/Navigation/Navigation"));

// Screens Import
const ForgotPassword = lazy(() => import("./Screens/Login/ForgotPassword"));
const NewWorkflow = lazy(() => import("./Screens/Workflow/NewWorkflow"));
const Organization = lazy(() => import("./Screens/Admin/Organization"));
const BusinessUnit = lazy(() => import("./Screens/Admin/BusinessUnit"));
const Department = lazy(() => import("./Screens/Admin/Department"));
const Workflow = lazy(() => import("./Screens/Workflow/Workflow"));
const LoginForm = lazy(() => import("./Screens/Login/LoginForm"));
const Notification = lazy(() => import("./Screens/Notification"));
const Location = lazy(() => import("./Screens/Admin/Location"));
const Division = lazy(() => import("./Screens/Admin/Division"));
const NewRole = lazy(() => import("./Screens/Admin/NewRole"));
const Dashboard = lazy(() => import("./Screens/Dashboard"));
const NotFound = lazy(() => import("./Screens/NotFound"));
const Role = lazy(() => import("./Screens/Admin/Role"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoaderScreen />}>
              <PageLogin FullLogo={Logo_Strides} />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<LoaderPage />}>
                <LoginForm />
              </Suspense>
            }
          />
          <Route
            path="forgot-password"
            element={
              <Suspense fallback={<LoaderPage />}>
                <ForgotPassword />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/app"
          element={
            <Suspense fallback={<LoaderScreen />}>
              <Navigation />
            </Suspense>
          }
        >
          <Route
            element={
              <Suspense fallback={<LoaderPage />}>
                <PageInner />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<LoaderPage />}>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route path="admin">
              <Route
                path="organization"
                element={
                  <Suspense fallback={<LoaderPage />}>
                    <Organization />
                  </Suspense>
                }
              />
              <Route
                path="business-unit"
                element={
                  <Suspense fallback={<LoaderPage />}>
                    <BusinessUnit />
                  </Suspense>
                }
              />
              <Route
                path="location"
                element={
                  <Suspense fallback={<LoaderPage />}>
                    <Location />
                  </Suspense>
                }
              />
              <Route
                path="division"
                element={
                  <Suspense fallback={<LoaderPage />}>
                    <Division />
                  </Suspense>
                }
              />
              <Route
                path="department"
                element={
                  <Suspense fallback={<LoaderPage />}>
                    <Department />
                  </Suspense>
                }
              />
              <Route
                path="role"
                element={
                  <Suspense fallback={<LoaderPage />}>
                    <Role />
                  </Suspense>
                }
              />
              <Route
                path="new-role"
                element={
                  <Suspense fallback={<LoaderPage />}>
                    <NewRole />
                  </Suspense>
                }
              />
            </Route>
            <Route
              path="notification"
              element={
                <Suspense fallback={<LoaderPage />}>
                  <Notification />
                </Suspense>
              }
            />
            <Route path="workflow">
              <Route
                index
                element={
                  <Suspense fallback={<LoaderPage />}>
                    <Workflow />
                  </Suspense>
                }
              />
              <Route
                path="new-workflow"
                element={
                  <Suspense fallback={<LoaderPage />}>
                    <NewWorkflow />
                  </Suspense>
                }
              />
            </Route>
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<LoaderScreen />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
