import React, { useEffect, useState } from 'react';
import { FaTrash, FaSearch, FaEdit } from 'react-icons/fa';

import Menu from '../../comp/Header';

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
import formatValue from '../../utils/formatValue';
import HeaderMenu from '../../comp/HeaderMenu';
import ModalAddFood from '../../comp/ModalAddFood';
import { FiPlusSquare } from 'react-icons/fi';
import ModalEditFood from '../../comp/ModalEditFood';

interface IFoodPlate {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    formattedPrice: string;
}

const Dashboard: React.FC = () => {
  const [foods, setFoods] = useState<IFoodPlate[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingFood, setEditingFood] = useState<IFoodPlate>({} as IFoodPlate);
  const [editModalOpen, setEditModalOpen] = useState(false);

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
                price: formatValue(mappedfood.price),
            }))
        )
    }

    // loadFoods();

    async function handleDeleteFood(id: number): Promise<void> {
        try {
          await api.delete(`/foods/${id}`);
    
          setFoods(foods.filter(food => food.id !== id));
        } catch (err) {
          console.log(err)
        }
      }

    async function handleAddFood(food: Omit<IFoodPlate, 'id' | 'formattedPrice'>): Promise<void> {
        try {
          const response = await api.post('/foods', {
            ...food,
          });
    
          setFoods([...foods, response.data]);
        } catch (err) {
          console.log(err);
        }
      }

      async function handleUpdateFood (food: Omit<IFoodPlate, 'id' | 'formattedPrice'>): Promise<void> {
        try {
          const response = await api.put(`/foods/${editingFood.id}`, {
            ...editingFood,
            ...food,
          });

          setFoods(
            foods.map(mappedFood =>
              mappedFood.id === editingFood.id ? { ...response.data } : mappedFood,
            )
          )
        } catch (err) {
          alert('err')
        }
      }

    // Atualizar
    function toggleEditModal(): void {
      setEditModalOpen(!editModalOpen)
    }

    function handleEditFood(food: IFoodPlate): void {
      setEditingFood(food);
      toggleEditModal();
    }

    // Adicionar
    function toggleModal(): void {
        setModalOpen(!modalOpen);
    }
  return (
      <Container>
          {/* <Menu /> */}
          {/* <HeaderMenu          
            openModal={toggleModal} 
          /> */}
          <ModalAddFood
            isOpen={modalOpen}
            setIsOpen={toggleModal}
            handleAddFood={handleAddFood}
          />

          <ModalEditFood 
            isOpen={editModalOpen}
            setIsOpen={toggleEditModal}
            editingFood={editingFood}
            handleUpdateFood={handleUpdateFood}
          />
          <Header>
            <div className="search">
              <input 
                type="text" 
                placeholder="o que deseja"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyUp={e => e.keyCode===13 ? loadFoods() : null}
              />
              <button onClick={loadFoods}>
                <FaSearch size={24} />
              </button>
          </div>

          <div className="botao">
            <button type="button" onClick={toggleModal}>
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
          </Header>

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
                        {/* <FoodPricing>{food.formattedPrice}</FoodPricing> */}
                        <FoodPricing>{food.price}</FoodPricing>
                      </FoodContent>
                      <div className="icons">
                        <span className="edit">
                            <FaEdit 
                              size={20}
                              cursor="pointer"
                              onClick={() => handleEditFood(food)}
                            />
                        </span>
                        <span className="trash">
                            <FaTrash
                                cursor="pointer"
                                onClick={() => handleDeleteFood(food.id)} 
                            />
                        </span>
                      </div>
                  </Food>
              )) : (
                  <h1>Not food found! try again</h1>
              )}
          </Main>
      </Container>
  );
}

export default Dashboard;