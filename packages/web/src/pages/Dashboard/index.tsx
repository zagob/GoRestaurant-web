import React, { useEffect, useState } from 'react';
// import SearchField from 'react-search-field';

import { 
    Container,
    Header,
    Main,
    Food,
    FoodImage,
    FoodContent,
    FoodTitle,
    FoodDescription,
    FoodPricing,

} from './styles';

import api from '../../services/api';

interface Food {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    thumbnail_url: string;
}

const Dashboard: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    async function loadFoods(): Promise<void> {
        const response = await api.get('/foods', {
            params: {
                name_like: searchValue,
            }
        })
        
        setFoods(
            response.data.map((food: Food) => ({
                ...food,
            }))
        )

        const results = response.data.filter((food: string) => {

            food.toLowerCase().includes(searchValue)
        });
          setSearchValue(results);
    }

    loadFoods();
  }, [searchValue])

  
  return (
      <Container>
          <Header>
              <input
                type="text"
                placeholder="o que deseja?"
                value={searchValue}
                // onChange={(e) => setSearchValue(e.target.value)}
              />
          </Header>

          <Main>
              {foods.map(food => (
                  <Food
                    key={food.id}
                  >
                      <FoodImage>
                          {/* <img src={food.thumbnail_url} alt=""/> */}
                          <img src={food.image_url} alt=""/>
                      </FoodImage>

                      <FoodContent>
                        <FoodTitle>{food.name}</FoodTitle>
                        <FoodDescription>{food.description}</FoodDescription>
                        <FoodPricing>R$ {food.price}</FoodPricing>
                      </FoodContent>
                  </Food>
              ))}
          </Main>
      </Container>
  );
}

export default Dashboard;