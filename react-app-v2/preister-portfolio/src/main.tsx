import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Page from "./components/Page";
import TechPage from "./components/TechPage";
import ExperiencePage from "./components/ExperiencePage";
import EducationPage from "./components/EducationPage";
import ProjectPage from "./components/ProjectPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/tech"
          element={<Page title="Technologies" child={<TechPage />} />}
        />
        <Route
          path="/experience"
          element={<Page title="Experience" child={<ExperiencePage />} />}
        />
        <Route
          path="/education"
          element={<Page title="Education" child={<EducationPage />} />}
        />
        <Route
          path="/projects"
          element={<Page title="Projects" child={<ProjectPage />} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
