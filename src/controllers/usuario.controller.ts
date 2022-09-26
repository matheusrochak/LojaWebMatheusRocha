import { Request, Response} from "express"
import mongoose from "mongoose";
import UserModel from "../models/usuario.model";


class UsuarioController {
    // cadastrar usuario // 
   public async cadastrar(req:Request, res: Response): Promise<Response>{
       try{
            const usuario =  await UserModel.create(req.body);
                return res.status(200).json(usuario);
    }catch(err) { return res.status(400).json(err); }
   }

   // apagar o usuario total do banco de dados //
   public async deletar(req:Request, res: Response){
     const usuario = UserModel.deleteOne({_id: req.params.id}, (err) => {
      if(err) return res.status(400).json({
        error: true,
        message: "Error: Usuario não foi apagado!"
      });
      return res.status(200).json({
        error:false,
        message: "Usuario foi apagado com sucesso!"
      });

     });

    } // listar usuarios 
     public async listarUser(req:Request,res:Response){
      try{
        const usuarios =  await UserModel.find();
      return res.status(200).json(usuarios);
      }catch (err){
        return res.status(400).json(err);

      }
      
    }
    // listar todos os usuarios 
     public async buscarUserId(req: Request, res: Response){
       try{
        const usuarios = await UserModel.findById({_id: req.params.id})
        return res.status(200).json(usuarios);
       }catch (err){
         return res.status(400).json(err);
       }
     }
   // atualizar usuario // 
    public async atualizar (req: Request, res:Response){
       UserModel.findOneAndUpdate({_id: req.params.id},req.body,{new:true}, (err, usuario)=> {
        if(err){
         return  res.status(400).json(err); 
        }
         return res.status(200).json(usuario);
       });
    }
    
}

export default new UsuarioController();