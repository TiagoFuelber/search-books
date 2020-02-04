export declare interface BookDTO {
  id: string;
  _id?: string;
  _title?: string;
  _subtitle?: string;
  _authors?: string[];
  _description?: string;
  _pageCount?: number;
  _smallThumbnailLink?: string;
  _thumbnailLink?: string;
  _publishedDate?: Date;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    description: string;
    pageCount: number;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    publishedDate: Date;
  };
}

export class Book {
  _id: string;
  _title: string;
  _subtitle: string;
  _authors: string[];
  _description: string;
  _pageCount: number;
  _smallThumbnailLink: string;
  _thumbnailLink: string;
  _publishedDate: Date;

  constructor(bookDTO: BookDTO) {
    this._id = bookDTO._id || bookDTO.id;
    this._title = bookDTO._title || bookDTO.volumeInfo?.title || '(no title)';
    this._subtitle = bookDTO._subtitle || bookDTO.volumeInfo?.subtitle || null;
    this._authors = bookDTO._authors || bookDTO.volumeInfo?.authors || null;
    this._description =
      bookDTO._description || bookDTO.volumeInfo?.description || null;
    this._pageCount = bookDTO._pageCount || bookDTO.volumeInfo?.pageCount;
    this._smallThumbnailLink =
      bookDTO._smallThumbnailLink ||
      bookDTO.volumeInfo?.imageLinks?.smallThumbnail ||
      null;
    this._thumbnailLink =
      bookDTO._thumbnailLink || bookDTO.volumeInfo?.imageLinks?.thumbnail;
    this._publishedDate =
      new Date(bookDTO._publishedDate || bookDTO.volumeInfo?.publishedDate) ||
      null;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get subtitle(): string {
    return this._subtitle;
  }

  get authors(): string[] {
    return this._authors;
  }

  get description(): string {
    return this._description;
  }

  get pageCount(): number {
    return this._pageCount;
  }

  get smallThumbnailLink(): string {
    return this._smallThumbnailLink;
  }

  get thumbnailLink(): string {
    return this._thumbnailLink;
  }

  get publishedDate(): Date {
    return this._publishedDate;
  }

  get dto(): BookDTO {
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
