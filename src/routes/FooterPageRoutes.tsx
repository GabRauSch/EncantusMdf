import { useRoutes } from "react-router-dom"
import { DefaultFooter } from "../footers/Default"

export const FooterPage = ()=>{
    return useRoutes([
            {path:'/', element:<DefaultFooter />},
            {path:'/clientes',  element:<DefaultFooter />},
            // {path:'/configuracoes',  element:<DefaultFooter />},
            {path:'/item/:id',  element:<DefaultFooter />},
            {path:'/pedidos', element: <DefaultFooter/>},
            {path:'/pedido/:numero',  element:<DefaultFooter />},
            {path: '/produtos', element: <DefaultFooter />}
        ])
}