import {
    Route, Routes,
  } from "react-router-dom";
import { Jobs } from "../components/jobs";

export const ZippiaRoutes = () => {
    return (
        <Routes>
            <Route path='/test/jobs/' element={<Jobs/>} />
        </Routes>
    )
}