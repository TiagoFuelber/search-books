import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledModal } from './StyledModal';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const Modal = ({ children, onClose }) => (
  <StyledModal>
    <div className="modal">
      <FontAwesomeIcon icon={faTimes} className="close" onClick={onClose} />
      {children}
    </div>
  </StyledModal>
);

Modal.defaultProps = {
  children: null,
  onClose: () => null
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClose: PropTypes.func
};
