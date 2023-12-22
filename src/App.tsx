import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import CharacterPage from "./pages/UserPage";
import HomePage from "./pages/HomePage/HomePage";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/:id" element={<CharacterPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
