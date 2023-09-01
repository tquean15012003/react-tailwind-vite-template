import { Route, Routes } from 'react-router-dom'

import { App } from '@/App'
import { TestPage } from '@/pages/testPage/TestPage'

export const Routing: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/test" element={<TestPage />} />
        </Routes>
    )
}
