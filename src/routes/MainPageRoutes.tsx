import { useRoutes } from "react-router-dom";
import { Clientes } from "../pages/Clientes";
import { Configuracoes } from "../pages/Configuracoes";
import { Home } from "../pages/Home";
import { ItemPorId } from "../pages/ItemdePedidoPorId";
import { NotFound } from "../pages/NotFound";
import { PedidoPorNumero } from "../pages/PedidoPorNumero";
import { Pedidos } from "../pages/Pedidos";
import { Produto } from "../pages/Produtos";
// import { RequireAuth } from "../RequireAuth";

export const MainPage = ()=>{
    return useRoutes([
            {path:'/', element:<Home />},
            {path:'/clientes',  element:<Clientes />},
            {path:'/configuracoes',  element:<Configuracoes />},
            {path:'/item/:id',  element:<ItemPorId />},
            {path: '/pedidos', element: <Pedidos />},
            {path:'/pedido/:numero',  element:<PedidoPorNumero />},
            {path: '/produtos', element:<Produto />},


            
            {path: '/*', element: <NotFound />}
        ])
}