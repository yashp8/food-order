import { Fragment } from 'react';
import classes from './Modal.module.css';
import * as ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('aoverlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <div className={classes.modal}>
          <div className={classes.content}>{props.children}</div>
        </div>,
        portalElement,
      )}
    </Fragment>
  );
};

export default Modal;
