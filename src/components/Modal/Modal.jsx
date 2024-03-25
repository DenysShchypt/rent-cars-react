import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleModal } from './Modal.styled';
import { selectModalData } from '../../redux/modal/modalSelectors';
import { closeModal } from '../../redux/modal/modalSlice';

export const Modal = () => {
  const modalData = useSelector(selectModalData);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  };

  return (
    <StyleModal onClick={handleOverlayClick}>
      <div className="modal">
        <button
          onClick={() => dispatch(closeModal())}
          className="closeModalBtn"
          type="button"
        >
          x
        </button>
        <img
          className="ModalImg"
          src={modalData.img || modalData.photoLink}
          alt={modalData.description}
        />
        <div className="aboutModel">
          <div className="titleDescription">
            <h3 className="titleCar">{modalData.make}</h3>
            <p className="titleCar modelColor">{modalData.model},</p>
            <p className="titleCar">{modalData.year}</p>
          </div>
          <ul className="list carFeatures">
            <li className="carText">{modalData.address} | </li>
            <li className="carText">Id: {modalData.id} | </li>
            <li className="carText">Year: {modalData.year} | </li>
            <li className="carText">Type: {modalData.type} | </li>
            <li className="carText">
              FuelConsumption: {modalData.fuelConsumption}
            </li>
            <li className="carText">EngineSize: {modalData.engineSize}</li>
          </ul>
          <p className="description">{modalData.description}</p>
        </div>
        <div className="componentBox">
          <p className="componentTitle">Accessories and functionalities:</p>
          <p className="accessory">{modalData.accessories.join(' | ')}</p>
          <p className="functionality">
            {modalData.functionalities.join(' | ')}
          </p>
        </div>
        <div>
          <p className="componentTitle">Rental Conditions: </p>
          <div className="conditionBox">
            <p className="conditions">{modalData.rentalConditions}</p>
            <p className="conditions">
              Mileage:
              <span className="conditionValue">
                {modalData.mileage
                  .toString()
                  .replace(/(\d)(?=(\d{3})+$)/g, '$1,')}
              </span>
            </p>
            <p className="conditions">
              Price:
              <span className="conditionValue">{modalData.rentalPrice}</span>
            </p>
          </div>
        </div>
        <button className="modalBtn" type="button">
          <a href="tel:+380730000000" className="modalBtnText">
            Rental car
          </a>
        </button>
      </div>
    </StyleModal>
  );
};
