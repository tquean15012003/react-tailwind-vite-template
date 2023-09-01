import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'

import './index.css'
import { Routing } from './routes/Routing.tsx'
import { printVersion } from './utils/index.ts'
import { queryClient } from './lib/react-query.ts'

printVersion()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
)

