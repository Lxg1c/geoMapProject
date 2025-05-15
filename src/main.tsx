import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import { CreatePage, RatingPage, ReportsPage } from "@/pages"
import Layout from "@/layout/Layout";


const router = createBrowserRouter([
    {
        element: <Layout />, // Применяем Layout ко всем дочерним роутам
        children: [
            {
                path: "/",
                element: <CreatePage />
            },
            {
                path: "/rating",
                element: <RatingPage />
            },
            {
                path: "/report",
                element: <ReportsPage />
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)