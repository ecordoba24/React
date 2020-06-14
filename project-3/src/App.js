import React, { useState, useEffect, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Surprise from "./Surprise.js";
const Surprise = React.lazy(() => import("./Surprise"));

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <div>
      <button onClick={(env) => setShowSurprise(true)}>Mostrar Sorpresa</button>
      {showSurprise && (
        <Suspense fallback={<p>cargando...</p>}>
          <Surprise />
        </Suspense>
      )}
    </div>
  );
}

export default App;
