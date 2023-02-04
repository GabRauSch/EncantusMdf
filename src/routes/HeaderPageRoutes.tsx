import { useRoutes } from "react-router-dom";
import { DefaultHeader } from "../headers/Default";
// import { RequireAuth } from "../RequireAuth";
 
export const HeaderPages = ()=>{
    return useRoutes([
            {path:'/', element:<DefaultHeader />},
            {path:'/clientes',  element:<DefaultHeader />},
            {path:'/configuracoes',  element:<DefaultHeader />},
            {path:'/item/:id',  element:<DefaultHeader />},
            {path:'/pedidos', element: <DefaultHeader/>},
            {path:'/pedido/:numero',  element:<DefaultHeader />},
            {path:'/produtos',  element:<DefaultHeader />}
        ])
}