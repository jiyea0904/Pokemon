import { useEffect } from 'react'
import './App.scss'
import { useDispatch } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk';
import { Link, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Favorite from './pages/Favorite';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, [])


  return (
    <>
     <h1 className='text-[40px] text-center'>포켓몬 도감</h1>
     <nav className='flex gap-[10px] justify-center'>
      <Link to={"/"}>Main</Link>
      <Link to={"/search"}>Search</Link>
      <Link to={"/favorite"}>Favorite</Link>
     </nav>
     <main className='flex flex-wrap justify-center gap-[10px]'>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/detail/:pokemonId"} element={<Detail />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={"/favorite"} element={<Favorite />} />
      </Routes>
      </main>
    </>
  )
}

export default App
