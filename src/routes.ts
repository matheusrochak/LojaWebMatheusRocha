import { Router } from 'express';
import usuarioController from './controllers/usuario.controller';
import produtoController from './controllers/produto.controller';

const routes = Router();


routes.get('/', (req, res) => {
  return res.send('Está rodando o BACKEND');
})

// rotas para usuario
routes.delete('/usuario/:id',usuarioController.deletar);// apagar usuarios //
routes.post('/usuario', usuarioController.cadastrar);// cadastrar usuario //
routes.get('/listuser',usuarioController.listarUser);// listar todos usuarios //
routes.get('/buscaruser/:id',usuarioController.buscarUserId);// listar  usuarios por id//
routes.put('/atualizaruser/:id',usuarioController.atualizar); // atualizar usuario pelo id//


// rotas para produto 
routes.post('/cadastroproduto', produtoController.cadastrar);//rota para cadastrar produto 
routes.get('/produtos',produtoController.getAll);// listar os produtos
routes.delete('/deleteprod/:id',produtoController.deletar);// apagar produto
routes.put('/atualizarprod/:id',produtoController.atualizar);
routes.get('/buscar/:id', produtoController.buscarProdId);

// rotas para venda 


 

export default routes;
