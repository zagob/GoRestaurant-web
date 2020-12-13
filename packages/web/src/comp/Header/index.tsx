import React, { useState } from 'react';

import { Container } from './styles';

import ModalAddFood from '../ModalAddFood';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

interface IFoodPlate {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
}

const Header: React.FC = ( ) => {
    const [foods, setFoods] = useState<IFoodPlate[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const history = useHistory();

    async function handleAddFood(food: Omit<IFoodPlate, 'id' >,): Promise<void> {
        try {
          const response = await api.post('/foods', {
            ...food,
            available: true,
          });
    
          setFoods([...foods, response.data]);

          history.push('/');
        } catch (err) {
          console.log(err);
        }
      }

      function toggleModal(): void {
        setModalOpen(!modalOpen);
      }
  return (
      <Container>
          <div>
              <button type="button" onClick={toggleModal}>Adicionar Comida</button>
          </div>
          <ModalAddFood 
            isOpen={modalOpen}
            setIsOpen={toggleModal}
            handleAddFood={handleAddFood}
          />
      </Container>
  );
}

export default Header;