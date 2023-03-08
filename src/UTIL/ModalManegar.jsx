

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../components/forms/Login';
import Modal from '../components/layout/Modal';
import { closeModal } from '../store/ModalSlice';
function ModalManager() {
    const {isOpen , componentName , contentPosition} = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const close = () => {
        dispatch(closeModal())
    }
    

    // all components do you want to render
    let dynamic_components = {
        Login,
    }
    // current component to render
    let renderComponent;
    // check any component that is currently rendered
    if(componentName) {
        let SelectComponent =  dynamic_components[componentName];
        renderComponent = <SelectComponent/>;
    }
  return (
    <Modal isOpen={isOpen} close={close} contentPosition={contentPosition}>
      {renderComponent}
    </Modal>
  )
}

export default ModalManager
