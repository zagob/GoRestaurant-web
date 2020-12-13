import Food from '../models/Foods';

export default {
    render(food: Food) {
        return {
            id: food.id,
            name: food.name,
            image_url: food.image_url,
            price: food.price,
            description: food.description
        };
    },

    renderMany(foods: Food[]) {
        return foods.map(food => this.render(food));
    }
}