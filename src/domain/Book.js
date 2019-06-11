export class Book {
  constructor({ id, volumeInfo }) {
    this._id = id;
    this._title = volumeInfo.title || '(no title)';
    this._subtitle = volumeInfo.subtitle || null;
    this._authors = volumeInfo.authors || null;
    this._description = volumeInfo.description || null;
    this._pageCount = volumeInfo.pageCount;
    this._smallThumbnailLink = volumeInfo.imageLinks.smallThumbnail || null;
    this._thumbnailLink = volumeInfo.imageLinks.thumbnail;
    this._publishedDate = new Date(volumeInfo.publishedDate) || null;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get subtitle() {
    return this._subtitle;
  }

  get authors() {
    return this._authors;
  }

  get description() {
    return this._description;
  }

  get pageCount() {
    return this._pageCount;
  }

  get smallThumbnailLink() {
    return this._smallThumbnailLink;
  }

  get thumbnailLink() {
    return this._thumbnailLink;
  }

  get publishedDate() {
    return this._publishedDate;
  }

  get dto() {
    return {
      id: this._id,
      volumeInfo: {
        title: this._title,
        subtitle: this._subtitle,
        authors: this._authors,
        description: this._description,
        pageCount: this._pageCount,
        imageLinks: {
          smallThumbnail: this._smallThumbnailLink,
          thumbnail: this._thumbnailLink
        },
        publishedDate: this._publishedDate
      }
    };
  }
}
