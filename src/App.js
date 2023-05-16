import React from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import '../src/scss/main.scss';
import AddNewPage from "./components/AppMain/AddNewPage";
import AdminPanel from "./components/AppMain/AdminPanel";
import UpdateData from "./components/AppMain/UpdateData/UpdateData";
//import UpdateForm from "./components/AppMain/UpdateData/UpdateForm";
import UserProvider from "./components/context/UserProvider";
import ArticleDelete from "./components/Database/Popup";
import LandingPage from "./components/LandingPage/index";
import NotFound from "./components/NotFound";
import Page from "./components/SinglePage/Page";

const App = () => (
    <UserProvider>
        {/* <HashRouter> */}
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<LandingPage />}></Route>
                <Route path={"admin"} element={<AdminPanel />}></Route>
                <Route path={"admin/addnew"} element={<AddNewPage />}></Route>
                <Route path={"admin/delete"} element={<ArticleDelete />}>
                    <Route path={":articleId"} element={<ArticleDelete />} />
                </Route>
                <Route path={"admin/edit"} element={<UpdateData />}>
                    <Route path={":articleId"} element={<UpdateData/>} />
                </Route>
                <Route path="*" element={<NotFound />} />
                <Route path={"page"} element={<Page/>}>
                    <Route path={":articleId/:articleUrl"} element={<Page/>} />
                    {/* <Route path={":articleUrl/:articleId"} element={<Page/>} /> */}
                </Route>
            </Routes>
        {/* </HashRouter> */}
        </BrowserRouter>
    </UserProvider>
)

export default App;
