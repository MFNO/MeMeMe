import './App.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Wedding from './components/Wedding';
import Resume from './components/Resume';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Resume />,
    },
    {
      path: 'wedding',
      element: <Wedding />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
