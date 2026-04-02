import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'

import App from './App'
import { queryClient } from './lib/queryClient'
import { ThemeProvider } from './components/layout/ThemeProvider'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: '#0d1526',
                color: '#f0f6ff',
                border: '1px solid rgba(255,255,255,0.08)',
              },
            }}
          />
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
)
