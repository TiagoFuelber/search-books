import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledModal } from './StyledModal';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface Props {
  children: JSX.Element[] | JSX.Element | string;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: Props): React.ReactElement => (
  <StyledModal>
    <div className="modal">
      <FontAwesomeIcon icon={faTimes} className="close" onClick={onClose} />
      {children}
    </div>
  </StyledModal>
);
