import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import Input from '../Input';
import Modal from '../Modal';
import { AiOutlineLink, AiFillTag, AiTwotoneStar, AiTwotoneSound } from 'react-icons/ai';

import { Form } from './styles';

interface IFoodPlate {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    formattedPrice: string;
}

interface ICreateFoodData {
    name: string;
    description: string;
    price: number;
    image_url: string;
}

interface IModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleAddFood: (food: Omit<IFoodPlate, 'id' | 'formattedPrice'>) => void;
}

const ModalAddFood: React.FC<IModalProps> = ({ isOpen, setIsOpen, handleAddFood }) => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback( async (data: ICreateFoodData) => {
        handleAddFood(data);

        setIsOpen();
    }, [handleAddFood, setIsOpen])
    
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Novo Prato</h1>

                <Input icon={AiOutlineLink} name="image_url" placeholder="Cole o link aqui" />
                <Input icon={AiTwotoneStar} name="name" placeholder="Ex: Moda Italiana" />
                <Input icon={AiTwotoneSound} name="description" placeholder="Ex: Pizza de..." />
                <Input icon={AiFillTag} name="price" placeholder="Ex: 19.90" />

                <button type="submit">
                    <p className="text">Adicionar Prato</p>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal>
  );
}

export default ModalAddFood;