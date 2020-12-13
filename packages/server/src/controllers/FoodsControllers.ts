import { json, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Food from '../models/Foods';
import FoodView from '../views/foods_view';
import * as Yup from 'yup';
import { create } from 'yup/lib/Reference';

export default {
    async index(request: Request, response: Response) {
        const foodRepository = await getRepository(Food).find()

        return response.json(foodRepository)
    },

    async show(request: Request, response: Response){
        const foodRepository = await getRepository(Food).findOne(request.params.id);

        return response.json(FoodView.render(foodRepository!));
    },

    async create(request: Request, response: Response) {
        try {
            // const {
            //     name,
            //     image_url,
            //     price,
            //     description,
            // } = request.body;
    
            // const foodRepository = getRepository(Food);
    
            // const data = {
            //     name,
            //     image_url,
            //     price,
            //     description,
            // }
    
            // const schema = Yup.object().shape({
            //     name: Yup.string().required(),
            //     image_url: Yup.string().required(),
            //     price: Yup.string().required(),
            //     description: Yup.string().required(),
            // })
    
            // await schema.validate(data, {
            //     abortEarly: false,
            // })
    
            // const food = foodRepository.create(data)
    
            // await foodRepository.save(food)
    
            // return response.status(201).json(food);
            const { name, image_url, price, description } = request.body;

            const foodRepository = getRepository(Food);

            const foodItem = foodRepository.create({
                name,
                image_url,
                price,
                description
            })

            await foodRepository.save(foodItem)

            return response.status(201).json(foodItem);
        } catch(err) {
            return response.json({ message: 'Not create' })
        }
    },

    async update(request: Request, response: Response) {
        try {
            const foodRepository = await getRepository(Food).findOne(request.params.id)
            // if (foodRepository)
            getRepository(Food).update(foodRepository!, request.body);

            return response.status(201).json(foodRepository);
        } catch(err) {
            console.log(err);
        }
    },

    async delete(request: Request, response: Response) {
        try {
            const foodRepository = await getRepository(Food).delete(request.params.id);

            return response.status(201).json(foodRepository);
        } catch(err) {
            console.log(err)
            return response.json({ message: 'Not found food delete' })
        }
    }
}