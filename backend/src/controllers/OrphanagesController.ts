import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';
import { Request, Response } from 'express';
import orphanageView from '../views/orphanageView';

export default {

    async index_all(request: Request, response: Response){

        const orphanagesRepository = getRepository(Orphanage);

        const orphanages_list = await orphanagesRepository.find({
            relations: ['images']
        });

        return response.json(orphanageView.renderMany(orphanages_list));

    },
    async show_orphanage(request: Request, response: Response){

        const orphanagesRepository = getRepository(Orphanage);

        const { id } = request.params;

        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return response.json(orphanageView.render(orphanage));

    },
    async create_orphanage(request: Request, response: Response){

        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;
    
        const orphanagesRepository = getRepository(Orphanage);

        const request_images = request.files as Express.Multer.File[];

        const images = request_images.map(image => {
            return {
                path: image.filename
            }
        })
    
        const orphanageadd = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends, 
            images
        })
        orphanagesRepository.save(orphanageadd);
    
        return response.status(201).json(orphanageadd);
    }
}