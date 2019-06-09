import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Book as BookDomain } from '../../domain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '../ui/Modal/Modal';

export class Book extends Component {
  state = {
    isModalOpen: false
  };

  render() {
    const { book } = this.props;
    const {
      smallThumbnailLink,
      title,
      subtitle,
      authors,
      thumbnailLink,
      pageCount,
      description,
      publishedDate
    } = book;
    const { isModalOpen } = this.state;

    return (
      <>
        <div className="book">
          <img
            src={smallThumbnailLink}
            alt=""
            onClick={() => this.setState({ isModalOpen: true })}
          />
          <div
            className="info"
            onClick={() => this.setState({ isModalOpen: true })}
          >
            <p className="title">- {title}</p>
            {authors && authors.length && (
              <p className="authors">- {authors.join(', ')}</p>
            )}
          </div>
          <FontAwesomeIcon className="favourite" icon={faStar} />
        </div>
        {isModalOpen && (
          <Modal onClose={() => this.setState({ isModalOpen: false })}>
            <img src={thumbnailLink} alt="" />
            <h2 className="title">{title}</h2>
            <h3 className="subtitle">{subtitle}</h3>
            {authors && authors.length && (
              <p className="authors">{authors.join(', ')}</p>
            )}
            <p className="page-count">{`${pageCount} pages`}</p>
            <p className="published-date">{`Year: ${publishedDate.getUTCFullYear()}`}</p>
            <p className="description">{description}</p>
          </Modal>
        )}
      </>
    );
  }
}

Book.propTypes = {
  book: PropTypes.shape(BookDomain).isRequired
};
