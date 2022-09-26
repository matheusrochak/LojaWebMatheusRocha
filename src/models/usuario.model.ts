import { model, Schema } from 'mongoose';

interface usuario{
 
  nome:String,
  telefone:Number,
  senha:String,
  email: String,
  createdAt: Date,
  rua: String,
  numero: String,
  cidade: String,
  bairro: String,
}

const userSchema = new Schema<usuario>({
  // dados usuario

nome: { 
  type: String,  
    required: true, 
     unique: false
 },
telefone: {
  type: Number,
   required: true,
      unique: false 
    },

senha: { 
  type: String,
   required: false,
      unique: false 
  },

email:{
  type:String,
    required: false,
      unique:false

},

createdAt: {
    type: Date,
        default: Date.now,
// endereco 
  },
    rua: {
    type: String,
    required: true,
   },
   numero: { 
    type: String,
    required: true,

   },
   cidade: { 
    type: String,
    required: true,
  
   }, 
   bairro: {
    type: String,
    required: true,
   }
});

const UserModel = model<usuario>('usuario', userSchema);
export default UserModel;

