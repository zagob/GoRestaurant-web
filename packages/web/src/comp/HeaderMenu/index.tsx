import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { FiPlusSquare } from 'react-icons/fi';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import { 
  Container,
  Main,
  Food,
  FoodContent,
  FoodDescription,
  FoodImage,
  FoodPricing,
  FoodTitle, 

} from './styles';

interface IFoodPlate {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  formattedPrice: string;
}

interface IHeaderProps {
    openModal: () => void;
    // food: IFoodPlate;
}

const HeaderMenu: React.FC<IHeaderProps> = ({ openModal}) => {
  const [foods, setFoods] = useState<IFoodPlate[]>([]);
  const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        loadFoods()
    }, [])

    async function loadFoods(): Promise<void> {
      const response = await api.get('/foods', {
          params: {
              name_like: searchValue,
          }
      })
      
      setFoods(
          response.data.map((mappedfood: IFoodPlate) => ({
              ...mappedfood,
              formattedPrice: formatValue(mappedfood.price),
          }))
      )
  }
  
  return (
    <>
    <Container>
        <div className="search">
            <input 
              type="text" 
              placeholder="o que deseja"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyUp={e => e.keyCode===13 ? loadFoods() : null}
            />
            <button onClick={loadFoods}>Pesquisar</button>
        </div>

        <div className="botao">
          <button type="button" onClick={openModal}>
            <div className="text">Novo Prato</div>
            <div className="icon">
              <FiPlusSquare size={24} />
            </div>
          </button>
        </div>
  </Container>



  <Main>
                {foods.length > 0  ? foods.map(food => (
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
                        <FoodPricing>{food.formattedPrice}</FoodPricing>
                      </FoodContent>
                      <div className="trash">
                        {/* <span>
                            <FaTrash
                                cursor="pointer"
                                onClick={() => handleDeleteFood(food.id)} 
                            />
                        </span> */}
                      </div>
                  </Food>
              )) : (
                  <h1>Not food found! try again</h1>
              )}
          </Main>
  </>
  );
}

export default HeaderMenu;