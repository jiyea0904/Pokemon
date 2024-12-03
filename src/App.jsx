import { useEffect, lazy, Suspense } from 'react'
import './App.scss'
import { useDispatch } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

const Main = lazy(() => import('./pages/Main'));
const Detail = lazy(() => import('./pages/Detail'));
const Search = lazy(() => import('./pages/Search'));
const Favorite = lazy(() => import('./pages/Favorite'));

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, [])


  return (
    <>
     <h1 className='text-[40px] text-center'>포켓몬 도감</h1>
     <nav className='flex gap-[20px] justify-center'>
      <Link to={"/"}>Main</Link>
      <Link to={"/favorite"}>Favorite</Link>
      <div>
        <input onChange={e => navigate(`/search?pokemon=${e.target.value}`)}
         className='w-[120px] border-b border-[darkgray] px-2' type='text' placeholder='Search...' />
        <span>검색</span>
      </div>
     </nav>
     <main className='flex flex-wrap justify-center gap-[10px]'>
      <Suspense fallback={<div>로딩중...</div>}>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/detail/:pokemonId"} element={<Detail />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/favorite"} element={<Favorite />} />
        </Routes>
      </Suspense>
      </main>
    </>
  )
}

export default App
