import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Book } from '../../view';
import { Book as BookDomain } from '../../domain';

describe('Renders the book component', () => {
  let book = null;
  const bookData = new BookDomain({
    kind: 'books#volume',
    id: 'jAnAZO6EE40C',
    etag: 'QfHNtboaA8c',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/jAnAZO6EE40C',
    volumeInfo: {
      title: 'Querido John',
      subtitle: 'Life of John',
      authors: ['Nicholas Sparks', 'Tiago Fuelber', 'Taís Jaques'],
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
  });

  beforeEach(() => {
    book = shallow(<Book book={bookData} />);
  });

  context('Renders the book small thumbnail', () => {
    let smallThumbnail = null;

    beforeEach(() => {
      smallThumbnail = book.find('img');
    });

    it('Exists', () => {
      expect(smallThumbnail).to.have.length(1);
    });

    it('Has the correct url', () => {
      expect(
        smallThumbnail.filterWhere(item => {
          return (
            item.prop('src') ===
            'http://books.google.com/books/content?id=jAnAZO6EE40C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
          );
        })
      ).to.have.lengthOf(1);
    });
  });

  context('Renders a info container div', () => {
    let infoDiv = null;

    beforeEach(() => {
      infoDiv = book.find('div.info');
    });

    it('Renders a div with class info', () => {
      expect(infoDiv).to.have.length(1);
    });

    it('Renders the title of the book', () => {
      const title = infoDiv.find('.title');
      expect(title).to.have.length(1);
      expect(title.text()).to.be.equal('Querido John');
    });

    it('Renders the authors information', () => {
      const authors = infoDiv.find('.authors');
      expect(authors).to.have.length(1);
      expect(authors.text()).to.be.equal(
        'Nicholas Sparks, Tiago Fuelber, Taís Jaques'
      );
    });
  });

  context('Renders a star button to set book as fevourite', () => {
    let favouriteBtn = null;

    beforeEach(() => {
      favouriteBtn = book.find('.favourite');
    });

    it('Has an element', () => {
      expect(favouriteBtn).to.have.length(1);
    });

    it('Renders a font-awesome component', () => {
      expect(favouriteBtn.is('FontAwesomeIcon')).to.be.true;
    });
  });

  context('There is a modal to show more info', () => {
    it('Shoul not have a Modal when book not clicked yet', () => {
      expect(book.find('Modal')).to.have.length(0);
    });

    it('Renders a modal when click on Book img', () => {
      book.find('img').simulate('click');
      expect(book.find('Modal')).to.have.length(1);
    });

    it('Renders a modal when click on Book info', () => {
      book.find('.info').simulate('click');
      expect(book.find('Modal')).to.have.length(1);
    });
  });

  context('The modal should diplay further info', () => {
    let modal = null;

    beforeEach(() => {
      book.find('img').simulate('click');
      modal = book.find('Modal');
    });

    it('It should display thumbnail, date, description and page count', () => {
      expect(
        modal.find('img').filterWhere(item => {
          return (
            item.prop('src') ===
            'http://books.google.com/books/content?id=jAnAZO6EE40C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          );
        })
      );
    });

    it('It should display the book\'s title', () => {
      expect(modal.find('.title')).to.have.length(1);
      expect(modal.find('.title').text()).to.be.equal('Querido John');
    });

    it('It should display the book\'s subtitle', () => {
      expect(modal.find('.subtitle')).to.have.length(1);
      expect(modal.find('.subtitle').text()).to.be.equal('Life of John');
    });

    it('Should display the authors', () => {
      expect(modal.find('.authors')).to.have.length(1);
      expect(modal.find('.authors').text()).to.be.equal(
        'Nicholas Sparks, Tiago Fuelber, Taís Jaques'
      );
    });

    it('Should display the page count', () => {
      expect(modal.find('.page-count')).to.have.length(1);
      expect(modal.find('.page-count').text()).to.be.equal('287 pages');
    });

    it('Should display the published date', () => {
      expect(modal.find('.published-date')).to.have.length(1);
      expect(modal.find('.published-date').text()).to.be.equal('Year: 2010');
    });

    it('Should display the description', () => {
      expect(modal.find('.description')).to.have.length(1);
      expect(modal.find('.description').text()).to.be.equal(
        'Quando Savannah Lynn Curtis entra em sua vida, John Tyree sabe que está pronto para começar tudo de novo. Ele, um jovem rebelde, se alista no exército logo após terminar a escola, sem saber o que faria de sua vida. Então, durante sua licença, ele conhece Savannah, a garota de seus sonhos. A atração mútua cresce rapidamente e logo transforma-se em um amor que faz com que Savannah jure esperá-lo concluir seus deveres militares. Mas ninguém pôde prever que os atentados de 11 de Setembro pudessem mudar o mundo todo. E como muitos homens e mulheres corajosos, John deveria escolher entre seu amor por Savannah e seu país. Agora, quando ele finalmente retorna para Carolina do Norte, John descobre como o amor pode transformar as pessoas de uma forma que jamais poderia imaginar.'
      );
    });
  });
});
