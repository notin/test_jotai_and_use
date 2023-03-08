// @ts-ignore
import { experimental_use as use, Suspense, useState, useEffect } from "react";
import Names from "./components/Names";
import useCachedFetch from "./hooks/useCachedFetch";

function App() {
  const [initialized, setInitialized] = useState(false);
  // @ts-ignore
  async function init() {
    const ids = await useCachedFetch("/ids.json");
    // @ts-ignore
    await Promise.all(ids.data.map((id) => useCachedFetch(`/${id}.json`)));
    setInitialized(true);
  }
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App">
      {initialized && (
        <Suspense>
          <Names />
        </Suspense>
      )}
    </div>
  );
}

export default App;
