import { ContentProvider } from "./store/content-context.jsx";

import HomePage from "./pages/HomePage/HomePage.jsx";

function App() {
  return (
    <ContentProvider>
      <div className=" max-h-full min-h-screen bg-[#fafafa] dark:bg-[#171823]">
        <HomePage />
      </div>
    </ContentProvider>
  );
}

export default App;
