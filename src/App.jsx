import { ContentProvider } from "./store/content-context.jsx";

import HomePage from "./pages/HomePage/HomePage.jsx";

function App() {
  const imageBg =
    "before:absolute before:top-0 before:left-0 before:h-[300px] before:w-full  dark:before:bg-gradient-to-r dark:before:from-sky-800 dark:before:to-fuchsia-800  before:bg-gradient-to-r before:from-sky-500/70 before:to-fuchsia-500/70";

  return (
    <ContentProvider>
      <div
        className={`max-h-full min-h-screen bg-[#fafafa] dark:bg-[#171823] ${imageBg}`}
      >
        <HomePage />
      </div>
    </ContentProvider>
  );
}

export default App;
