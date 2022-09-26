import { model, Schema } from 'mongoose';

interface iproduto {
  produto: String,
  qt_estoque: Number,
  valor: Number,
  tipo: String,
  
}

const produtoSchema = new Schema({


produto: { 
  type: String, 
    required: true, 
     unique: false
     
 },
qt_estoque: {
  type: Number,
   required: true,
      unique: false 
    },
valor: {
  type: Number,
   required: true,
   unique:false
},

fornecedor: { 
  type:String,
    required: true,
      unique:false,
      enum:['Toty-case','Ifad Cell','nerd-cell']
},
tipo: {
  type:String,
    required: false,
      unique:false,
      enum:['Pelicula', 'Case', 'Cable', 'Acessorio']
},
  createdAt: {
    type: Date,
        default: Date.now,

  }
});

const ProdutoModel = model<iproduto>('produto', produtoSchema);

export default ProdutoModel;

