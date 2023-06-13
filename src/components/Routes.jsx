// import {Routes, Route, Navigate} from 'react-router-dom'
// import Results from './Results'

// function routes() {
//   return (
//     <div className='p-4'>
//       <Routes>
//           <Route exact path="/">
//             <Navigate replace to="/search" />
//           </Route>
//           <Route exact path={['/search', '/news', '/images', '/videos']}>
//             <Results />
//         </Route>
//       </Routes>
//     </div>
//   )
// }

// export default routes


import { Routes, Route, Navigate } from 'react-router-dom';
import Results from './Results';

const Router = () => (
  <div className='p-4'>
    
    <Routes>
      <Route path='/' element={<Navigate from='/' to='/search' />}/>
      <Route path='/search' element={<Results />}/>
      <Route path='/images' element={<Results />}/>
      <Route path='/news' element={<Results />}/>
      <Route path='/videos' element={<Results />}/>
    </Routes>
  </div>

);

export default Router