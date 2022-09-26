import {Request, Response} from "express"
import ProdutoModel from "../models/produto.model";
import UserModel from "../models/usuario.model";



class ProdutoController {

 // cadastrar produto
public async cadastrar(req: Request, res:Response): Promise<Response>{
    try{
      const produtos = await ProdutoModel.create(req.body);
      return res.status(200).json(produtos);
    }
      catch(err) { return res.status(400).json(err);}    
  }
// deletar produto 
public async deletar(req:Request, res:Response){
    await ProdutoModel.deleteOne({_id: req.params.id},(err) =>{
      if(err) return res.status(200).json({
        error: true,
        message: "Error: foi produto apagado!"
      });
      return res.status(400).json({ 
        error:false,
        message: "Produto não foi apagado com sucesso!"
      });
            });
    }
  //listar todos os produtos 
  public async getAll( req:Request, res: Response){
    try{
      const produtos = await ProdutoModel.find({produto: req.query.produto});  // select * from produtos
     return res.status(200).json(produtos)
    } catch (err){
      return res.status(400).json(err)
    }
  
     }
     // funcao atualizar pelo id
public async atualizar ( req:Request, res: Response){

         ProdutoModel.findOneAndUpdate({_id:req.params.id}, req.body, {new : true}, (err,produto) => {
          if(err){
            return res.status(400).json(err);
          }
          return res.status(200).json(produto);

        });
  
}
// funcao para buscar pelo id 

public async buscarProdId (req: Request, res: Response){
  try{
    const produtos = await ProdutoModel.findById({_id: req.params.id})
    return res.status(200).json(produtos);
  }catch(err){
    return res.status(400).json(err);
  }
}


   

          
  }

 export default new ProdutoController();