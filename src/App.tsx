// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginPage } from "./components/Auth/LoginPage";
import { AuthCodePage } from "./components/Auth/AuthCodePage";
import { ComponentWrapper } from "./ComponentWrapper";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ComponentWrapper>
              <AppWrapper />
            </ComponentWrapper>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth" element={<AuthCodePage />} />
      </Routes>
    </Router>
  );
}

export const AppWrapper = () => {
  return <div>APP</div>;
};
export default App;
