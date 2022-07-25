import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AboutPage,
  DevelopersPage,
  EkoSystemPage,
  EntreprenuersPage,
  HomePage,
  IcoPage,
  KosysTokenPage,
  LearnPage,
  LightPaperPage,
  ProductsPage,
  UseKosysPage,
  WhitePaperPage,
} from "./pages";
import { PATH } from "./consts";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={PATH.About} element={<AboutPage />} />
        <Route path={PATH.Developers} element={<DevelopersPage />} />
        <Route path={PATH.EkoSystem} element={<EkoSystemPage />} />
        <Route path={PATH.Entreprenuers} element={<EntreprenuersPage />} />
        <Route path={PATH.Home} element={<HomePage />} />
        <Route path={PATH.Ico} element={<IcoPage />} />
        <Route path={PATH.KosysToken} element={<KosysTokenPage />} />
        <Route path={PATH.Learn} element={<LearnPage />} />
        <Route path={PATH.LightPaper} element={<LightPaperPage />} />
        <Route path={PATH.Products} element={<ProductsPage />} />
        <Route path={PATH.UseKosys} element={<UseKosysPage />} />
        <Route path={PATH.WhitePaper} element={<WhitePaperPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
