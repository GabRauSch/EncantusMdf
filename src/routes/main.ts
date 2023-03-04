import { Router } from "express";
import * as UserController from '../controllers/UserController';
import * as DesenhoController from '../controllers/DesenhoController';
import * as PedidosController from '../controllers/PedidoController';
import multer from 'multer';

const router = Router();

const upload = multer({
    dest: './tmp',
    // fileFilter: (req, file, callBack)=>{
    //     const allowed: string[] = ['image/jpg', 'image/png', 'image/jpeg'];
    //     callBack(null, allowed.includes(file.mimetype))
    // }
})


router.get('/', UserController.index);


router.get('/usuarios', UserController.users); 
router.get('/usuario/:id', UserController.userById) 

router.get('/desenhos', DesenhoController.desenhos); 
router.get('/desenho/:id', DesenhoController.desenhoById)
router.post('/desenhos', upload.single('foto'), DesenhoController.novoDesenho) 
router.delete('/desenho/delete/:id', DesenhoController.deletar); 

router.get('/itensPedidos', PedidosController.itensPedidos)
router.get('/itensPedidos/:number', PedidosController.itensPedidosByNumber)
router.post('/itensPedidos', PedidosController.novoItemPedido);
router.delete('/itensPedidos/:id', PedidosController.deleteItemById)


router.get('/pedidos', PedidosController.pedidos)  
router.get('/pedidos/:id', PedidosController.pedidoById)
router.post('/pedido', PedidosController.novoPedido) 
router.put('/pedido/:id', PedidosController.updatePedido)
router.delete('/pedido/:id', PedidosController.deletePedidoById) 

// router.get('/register', AuthController.register);
// router.get('/login', AuthController.register)


export default router;