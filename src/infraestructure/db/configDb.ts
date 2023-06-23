import mongoose from 'mongoose';

export const dbConnection = async() => {
    try {
        const mongodbAtlasUri = process.env.MONGODB_ATLAS;
        if(!mongodbAtlasUri){
            throw new Error('La variable de entorno tiene problemas en su configuracion');
        }

        await mongoose.connect( mongodbAtlasUri);

        console.log('BD online');
    } catch (error) {
        console.log('error');
        throw new Error('Error en inicio de bd');
    }
}