
import './App.css'
import {Route, Routes} from "react-router-dom";
import SharedLayout from "./pages/SharedLayout/SharedLayout.tsx";
import {lazy} from "react";
import FolderWordsPage from "./pages/FolderWordsPage/FolderWordsPage.tsx";
import { ClippyProvider} from "@react95/clippy";

const ProfilePage = lazy(()=>import("./pages/ProfilePage/ProfilePage.tsx"))
const DeckPage = lazy(()=> import("./pages/DeckPage/DeckPage.tsx"))
const GamePage = lazy(()=> import("./pages/GamePage/GamePage.tsx"))
const NotFoundPage = lazy(()=> import("./pages/NotFoundPage/NotFoundPage.tsx"))

function App() {
  return <Routes>
      <Route path='/' element={<SharedLayout/>}>
          <Route index element={<ProfilePage/>}/>
          <Route path='/deck' element={<ClippyProvider><DeckPage/></ClippyProvider>}>
              <Route path=':folderId' element={<FolderWordsPage/>}/>
          </Route>
          <Route path='/game' element={<GamePage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
      </Route>
      </Routes>

}

export default App
