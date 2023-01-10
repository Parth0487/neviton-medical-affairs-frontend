import React, { lazy, Suspense, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Outlet, useLocation } from "react-router-dom";
import {
  Profile_1,
  Icon_Dashboard,
  Icon_Admin,
  Icon_Notification,
  Icon_Task,
  Icon_Template,
  Icon_Document,
  Icon_Reports,
} from "../Images";
import { LoaderIconNavMenu, LoaderProfileMenu } from "../Loading/Loading";
import NavHeader from "./NavHeader";

const ProfileMenu = lazy(() => import("./ProfileMenu"));
const IconNavMenu = lazy(() => import("./IconNavMenu"));
const ExpandIconNavMenu = lazy(() => import("./ExpandIconNavMenu"));

function Navigation() {
  const [expand, setExpand] = useState(true);
  const location = useLocation();

  const handleClick = () => {
    setExpand(!expand);
  };

  const handleExpand = () => {
    setExpand(true);
  };

  useEffect(() => {
    window.addEventListener("resize", handleExpand, true);
  }, []);

  useEffect(() => {
    handleExpand();
  }, [location.pathname]);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "block",
        position: "relative",
        backgroundColor: "#F3F5F9",
      }}
    >
      <Box
        sx={{
          zIndex: 1,
          border: 1,
          left: { xs: expand ? -250 : 0, sm: expand ? -250 : 0, md: 0 },
          width: 250,
          boxShadow: 2,
          height: "100%",
          position: "absolute",
          boxSizing: "border-box",
          borderColor: "grey.300",
          bgcolor: "common.white",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: { xs: 60, sm: 60, md: 74 },
              flexGrow: 0,
              flexShrink: 0,
            }}
          >
            <NavHeader onExpand={handleClick} />
          </Box>
          <Box
            sx={{
              width: "100%",
              flex: 1,
              overflow: "auto",
              "&::-webkit-scrollbar": {
                height: 10,
                width: 5,
              },
              "&::-webkit-scrollbar-track": {
                background: "rgb(151 167 195 / 30%)",
                mb: 3,
                mt: 3,
              },
              "&::-webkit-scrollbar-thumb": {
                bgcolor: "primary.main",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            <Suspense fallback={<LoaderIconNavMenu />}>
              <IconNavMenu
                name="Dashboard"
                icon={Icon_Dashboard}
                toLink="/app/"
              />
            </Suspense>
            <Suspense fallback={<LoaderIconNavMenu />}>
              <ExpandIconNavMenu
                activeLink="/app/admin/"
                name="Admin"
                icon={Icon_Admin}
              >
                <Suspense fallback={<LoaderIconNavMenu />}>
                  <IconNavMenu
                    name="Organization"
                    toLink="/app/admin/organization"
                  />
                </Suspense>
                <Suspense fallback={<LoaderIconNavMenu />}>
                  <IconNavMenu
                    name="Business Unit"
                    toLink="/app/admin/business-unit"
                  />
                </Suspense>
                <Suspense fallback={<LoaderIconNavMenu />}>
                  <IconNavMenu name="Location" toLink="/app/admin/location" />
                </Suspense>
                <Suspense fallback={<LoaderIconNavMenu />}>
                  <IconNavMenu name="Division" toLink="/app/admin/division" />
                </Suspense>
                <Suspense fallback={<LoaderIconNavMenu />}>
                  <IconNavMenu
                    name="Department"
                    toLink="/app/admin/department"
                  />
                </Suspense>
                <Suspense fallback={<LoaderIconNavMenu />}>
                  <IconNavMenu name="Role" toLink="/app/admin/role" />
                </Suspense>
                <Suspense fallback={<LoaderIconNavMenu />}>
                  <IconNavMenu name="Tag" toLink="/app/admin/tag" />
                </Suspense>
                <Suspense fallback={<LoaderIconNavMenu />}>
                  <IconNavMenu name="Keywords" toLink="/app/admin/keywords" />
                </Suspense>
                <Suspense fallback={<LoaderIconNavMenu />}>
                  <IconNavMenu
                    name="User Group"
                    toLink="/app/admin/user-group"
                  />
                </Suspense>
              </ExpandIconNavMenu>
            </Suspense>
            <Suspense fallback={<LoaderIconNavMenu />}>
              <IconNavMenu
                name="Notification"
                icon={Icon_Notification}
                toLink="/app/notification"
              />
            </Suspense>
            <Suspense fallback={<LoaderIconNavMenu />}>
              <IconNavMenu
                name="Workflow"
                icon={Icon_Notification}
                toLink="/app/workflow"
              />
            </Suspense>
            <Suspense fallback={<LoaderIconNavMenu />}>
              <IconNavMenu name="Task" icon={Icon_Task} toLink="/app/task" />
            </Suspense>
            <Suspense fallback={<LoaderIconNavMenu />}>
              <IconNavMenu
                name="Template"
                icon={Icon_Template}
                toLink="/app/template"
              />
            </Suspense>
            <Suspense fallback={<LoaderIconNavMenu />}>
              <IconNavMenu
                name="Documents"
                icon={Icon_Document}
                toLink="/app/document"
              />
            </Suspense>
            <Suspense fallback={<LoaderIconNavMenu />}>
              <IconNavMenu
                name="Reports"
                icon={Icon_Reports}
                toLink="/app/reports"
              />
            </Suspense>
          </Box>
          <Box sx={{ p: 2, boxSizing: "border-box", width: "100%" }}>
            <Suspense fallback={<LoaderProfileMenu />}>
              <ProfileMenu
                profileImg={Profile_1}
                name="Diane Ward"
                mail="dianaward@strides.com"
              />
            </Suspense>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "block",
          position: "absolute",
          top: { xs: 60, sm: 60, md: 0 },
          left: { xs: 0, sm: 0, md: 250 },
          width: {
            xs: "100%",
            sm: "100%",
            md: "calc(100% - 250px)",
          },
          height: {
            xs: "calc(100% - 60px)",
            sm: "calc(100% - 60px)",
            md: "100%",
          },
          overflowX: "hidden",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            height: 10,
            width: 5,
          },
          "&::-webkit-scrollbar-track": {
            background: "rgb(151 167 195 / 30%)",
            mb: 3,
            mt: 3,
          },
          "&::-webkit-scrollbar-thumb": {
            bgcolor: "primary.main",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Navigation;
