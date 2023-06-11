import { Router } from 'express';
import UsuarioBC from '../TeleticketBC/usuarioBC';

const router = Router();
const usuarioBC = new UsuarioBC();

router.get('/',       usuarioBC.getUsuarios );
router.get('/:id',    usuarioBC.getUsuario );
router.post('/',      usuarioBC.postUsuarios );
router.put('/:id',    usuarioBC.putUsuarios );
router.delete('/:id', usuarioBC.deleteUsuario );



export default router;