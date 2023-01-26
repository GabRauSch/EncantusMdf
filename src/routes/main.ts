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


router.get('/usuarios', UserController.users); //done
router.get('/usuario/:id', UserController.userById) //done

router.get('/desenhos', DesenhoController.desenhos); // done           // query
router.post('/desenhos', upload.single('foto'), DesenhoController.novoDesenho) // done
router.delete('/desenho/delete/:id', DesenhoController.deletar); // done


router.get('/pedidos', PedidosController.pedidos)  // done          // mais recentes apenas ****
router.get('/pedidos/numero/:number', PedidosController.pedidosByNumber)
router.post('/pedido', PedidosController.novoPedido) // done
router.delete('/pedido/:id', PedidosController.deleteById) // done
router.get('/pedido/:id', PedidosController.pedidoById) // em andamento;


// router.get('/register', AuthController.register);
// router.get('/login', AuthController.register)


export default router;