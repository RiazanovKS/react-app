import { styled } from 'styled-components';
import routes  from './routes'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`


function App() {
  const router = createBrowserRouter(routes);


  return (
    <Wrapper>
      <RouterProvider router = {router} />
    </Wrapper>
  )
}

export default App;
