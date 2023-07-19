import { Route, Routes } from 'react-router-dom'

import { FilmPage } from './pages/FilmPage'
import { HomePage } from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'
import { SearchPage } from './pages/SearchPage'
import { SignInPage } from './pages/SignInPage'

export function App(): JSX.Element {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
        <Route path="/signup" element={<RegisterPage />}></Route>
        <Route path="/search/:keyWord" element={<SearchPage />}></Route>
        <Route path="/film/:id" element={<FilmPage />}></Route>
      </Routes>
    </div>
  )
}
