import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';
import { Request, Response } from 'express';

export default {

    async index_all(request: Request, response: Response){

        const orphanagesRepository = getRepository(Orphanage);

        const orphanages_list = await orphanagesRepository.find();

        return response.json(orphanages_list);

    },
    async show_orphanage(request: Request, response: Response){

        const orphanagesRepository = getRepository(Orphanage);

        const { id } = request.params;

        const orphanage = await orphanagesRepository.findOneOrFail(id);

        return response.json(orphanage);

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
    
        const orphanageadd = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        })
        orphanagesRepository.save(orphanageadd);
    
        return response.status(201).json(orphanageadd);
    }
}