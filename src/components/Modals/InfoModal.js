import './../../style/style.scss';

const InfoModal = ({message, onCloseModal}) => {
  return (
    <div className='modal'>
       <div className="modal-mask" onClick={onCloseModal}></div>
      <div className="modal-content">
      <button className="modal-close" onClick={onCloseModal}></button>
        <div className='info-modal'>
         {message}
        </div>
      </div>
    </div>
  );
}

export default InfoModal;