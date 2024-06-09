import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import NewsFeedPage from "./components/NewsFeedPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/newsfeedpage",
      element: <NewsFeedPage />,
    },
  ]);
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </div>
  );
}

export default App;
