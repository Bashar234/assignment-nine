import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./component/Blog/Blog";
import Quiz from "./component/Quiz/Quiz";
import Statistics from "./component/Statistics/Statistics";
import Topics from "./component/Topics/Topics";
import Main from "./Layout/Main";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
        },
        {
          path: "/topics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
        },
        {
          path: "quiz/:quizId",
          loader: ({ params }) => {
            return fetch(
              ` https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <Quiz></Quiz>,
        },
        {
          path: "/statistics",
          loader: () => fetch(" https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics></Statistics>,
        },
        { path: "/blog", element: <Blog></Blog> },
      ],
    },
    { path: "*", element: <h1 className="text-center mt-5">Not Found!</h1> },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
