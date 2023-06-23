import {Schema, model} from 'mongoose';

import { roleI } from '../interfaces/roleInterface';

const roleSchema = new Schema<roleI>({
    rol:{
        type: String,
        required: [true, 'Rol obligatorio']
    }
});

export default model<roleI>('Role', roleSchema);