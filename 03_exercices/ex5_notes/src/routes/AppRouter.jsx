import React from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ProtectedRoute from '../auth/ProtectedRoute'
import NotesListPage from '../pages/NotesListPage'
import NotesEditPage from '../pages/NotesEditPage'
import NotFound from '../pages/NotFound'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            {/* public */}
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />

            {/* private */}
            <Route element={<ProtectedRoute />} >
                  <Route path='/' element={<Navigate to="/notes" replace />} />  
                  <Route path='/notes' element={<NotesListPage />} />
                  <Route path='/notes/:id' element={<NotesEditPage />} />
            </Route>


            {/* 404 */}
            <Route path='*' element={<NotFound />} />

        </Routes>
    </BrowserRouter>
  )
}
