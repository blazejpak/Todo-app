import { ContentProvider } from "./store/content-context.jsx";

import HomePage from "./pages/HomePage/HomePage.jsx";

function App() {
  return (
    <ContentProvider>
      <HomePage />
    </ContentProvider>
  );
}

export default App;
