import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Index</h1>} />
        <Route path="/other" element={<h1>Other</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
