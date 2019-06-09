import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Book as BookDomain } from '../../domain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '../ui/Modal/Modal';
import { StyledBook } from './StyledBook';
import { DARK_GRAY } from '../ui/styles/constants';

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
        <StyledBook className="book">
          <img
            src={smallThumbnailLink}
            alt=""
            className="thumbnail"
            onClick={() => this.setState({ isModalOpen: true })}
          />
          <div
            className="info"
            onClick={() => this.setState({ isModalOpen: true })}
          >
            <p className="title">{title}</p>
            {authors && authors.length && (
              <p className="authors">{authors.join(', ')}</p>
            )}
          </div>
          <FontAwesomeIcon
            style={{ color: `${DARK_GRAY}` }}
            className="favourite"
            icon={faStar}
            size="2x"
            title="Favourite this book"
          />
          {isModalOpen && (
            <Modal onClose={() => this.setState({ isModalOpen: false })}>
              <div className="header">
                <img className="thumbnail" src={thumbnailLink} alt="" />
                <div className="info">
                  <h2 className="title">{title}</h2>
                  <h3 className="subtitle">{subtitle}</h3>
                  {authors && authors.length && (
                    <p className="authors">{authors.join(', ')}</p>
                  )}
                  <p className="page-count">{`${pageCount} pages`}</p>
                  <p className="published-date">{`Year: ${publishedDate.getUTCFullYear()}`}</p>
                </div>
              </div>
              <p className="description">{description}</p>
            </Modal>
          )}
        </StyledBook>
      </>
    );
  }
}

Book.propTypes = {
  book: PropTypes.shape(BookDomain).isRequired
};
