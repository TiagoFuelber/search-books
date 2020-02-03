export declare interface BookDTO {
  id: string;
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

  constructor({ id, volumeInfo }: BookDTO) {
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
