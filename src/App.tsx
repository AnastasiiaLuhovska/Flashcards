
import './App.css'
import {Route, Routes} from "react-router-dom";
import SharedLayout from "./pages/SharedLayout/SharedLayout.tsx";
import {lazy} from "react";

const HomePage = lazy(()=>import("./pages/HomePage/HomePage.tsx"))
const DeckPage = lazy(()=> import("./pages/DeckPage/DeckPage.tsx"))
const GamePage = lazy(()=> import("./pages/GamePage/GamePage.tsx"))
const NotFoundPage = lazy(()=> import("./pages/NotFoundPage/NotFoundPage.tsx"))

function App() {
  return <Routes>
      <Route path='/' element={<SharedLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/deck' element={<DeckPage/>}/>
          <Route path='/game' element={<GamePage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
      </Route>
      </Routes>

}

export default App
