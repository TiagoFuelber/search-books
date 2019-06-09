import { expect } from 'chai';
import { Book } from './Book';

describe('Book domain', () => {
  context('should instantiate a Book object correctly', () => {
    const bookJson = {
      kind: 'books#volume',
      id: 'jAnAZO6EE40C',
      etag: 'QfHNtboaA8c',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/jAnAZO6EE40C',
      volumeInfo: {
        title: 'Querido John',
        subtitle: 'A vida de John',
        authors: ['Nicholas Sparks'],
        publisher: 'Novo Conceito',
        publishedDate: '2010',
        description:
          'Quando Savannah Lynn Curtis entra em sua vida, John Tyree sabe que está pronto para começar tudo de novo. Ele, um jovem rebelde, se alista no exército logo após terminar a escola, sem saber o que faria de sua vida. Então, durante sua licença, ele conhece Savannah, a garota de seus sonhos. A atração mútua cresce rapidamente e logo transforma-se em um amor que faz com que Savannah jure esperá-lo concluir seus deveres militares. Mas ninguém pôde prever que os atentados de 11 de Setembro pudessem mudar o mundo todo. E como muitos homens e mulheres corajosos, John deveria escolher entre seu amor por Savannah e seu país. Agora, quando ele finalmente retorna para Carolina do Norte, John descobre como o amor pode transformar as pessoas de uma forma que jamais poderia imaginar.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9788563219022'
          },
          {
            type: 'ISBN_10',
            identifier: '8563219022'
          }
        ],
        readingModes: {
          text: false,
          image: true
        },
        pageCount: 287,
        printType: 'BOOK',
        categories: ['Long-distance relationships'],
        averageRating: 4.5,
        ratingsCount: 16,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '1.0.0.0.preview.1',
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=jAnAZO6EE40C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=jAnAZO6EE40C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        },
        language: 'pt',
        previewLink:
          'http://books.google.com.br/books?id=jAnAZO6EE40C&pg=PA20&dq=john&hl=&cd=1&source=gbs_api',
        infoLink:
          'http://books.google.com.br/books?id=jAnAZO6EE40C&dq=john&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Querido_John.html?hl=&id=jAnAZO6EE40C'
      },
      saleInfo: {
        country: 'BR',
        saleability: 'NOT_FOR_SALE',
        isEbook: false
      },
      accessInfo: {
        country: 'BR',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false
        },
        pdf: {
          isAvailable: false
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=jAnAZO6EE40C&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false
      }
    };

    let book;

    beforeEach(() => {
      book = new Book(bookJson);
    });

    it('should be possible to get Book\'s id', () => {
      expect(book.id).to.be.eql('jAnAZO6EE40C');
    });

    it('should be possible to get Book\'s title', () => {
      expect(book.title).to.be.equal('Querido John');
    });

    it('should be possible to get Book\'s subtitle', () => {
      expect(book.subtitle).to.be.equal('A vida de John');
    });

    it('should be possible to get Book\'s authors', () => {
      expect(book.authors).to.be.eql(['Nicholas Sparks']);
    });

    it('should be possible to get Book\'s description', () => {
      expect(book.description).to.be.equal(
        'Quando Savannah Lynn Curtis entra em sua vida, John Tyree sabe que está pronto para começar tudo de novo. Ele, um jovem rebelde, se alista no exército logo após terminar a escola, sem saber o que faria de sua vida. Então, durante sua licença, ele conhece Savannah, a garota de seus sonhos. A atração mútua cresce rapidamente e logo transforma-se em um amor que faz com que Savannah jure esperá-lo concluir seus deveres militares. Mas ninguém pôde prever que os atentados de 11 de Setembro pudessem mudar o mundo todo. E como muitos homens e mulheres corajosos, John deveria escolher entre seu amor por Savannah e seu país. Agora, quando ele finalmente retorna para Carolina do Norte, John descobre como o amor pode transformar as pessoas de uma forma que jamais poderia imaginar.'
      );
    });

    it('should be possible to get Book\'s page count', () => {
      expect(book.pageCount).to.be.equal(287);
    });

    it('should be possible to get Book\'s small thumbnail image link', () => {
      expect(book.smallThumbnailLink).to.be.equal(
        'http://books.google.com/books/content?id=jAnAZO6EE40C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
      );
    });

    it('should be possible to get Book\'s thumbnail image link', () => {
      expect(book.thumbnailLink).to.be.equal(
        'http://books.google.com/books/content?id=jAnAZO6EE40C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      );
    });

    it('should be possible to get Books\'s publish date', () => {
      expect(book.publishedDate).to.be.eql(new Date('2010'));
    });

    it('should be an instance of Book', () => {
      expect(book).to.be.an.instanceOf(Book);
    });
  });
});
