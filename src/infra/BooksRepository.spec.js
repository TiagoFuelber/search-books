import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import BooksRepository from './BooksRepository';

chai.use(sinonChai);

global.fetch = require('isomorphic-fetch');

describe('Books repository', () => {
  describe('search for books', () => {
    context('Smoke tests', () => {
      it('Should exist the searchBooks method', () => {
        expect(BooksRepository.searchBooks).to.exist;
      });
    });

    context('get a list of books from an API - searchBooks', () => {
      let fetchedStub;

      const mockApiResponse = (body = {}) =>
        new Response(JSON.stringify(body), {
          status: 200,
          headers: { 'Content-type': 'application/json' }
        });

      beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch');
        global.fetch.returns(Promise.resolve(mockApiResponse()));
      });

      afterEach(() => {
        fetchedStub.restore();
      });

      it('should call fetch method', done => {
        const books = BooksRepository.searchBooks();
        expect(fetchedStub).to.have.been.calledOnce;
        done();
      });

      it('should call fetch with the correct URL', done => {
        const books = BooksRepository.searchBooks('john');
        expect(fetchedStub).to.have.been.calledWith(
          'https://www.googleapis.com/books/v1/volumes?q=john'
        );
        done();
      });

      it('should call fetch with the correct URL', done => {
        const books = BooksRepository.searchBooks('Darth Vader');
        expect(fetchedStub).to.have.been.calledWith(
          'https://www.googleapis.com/books/v1/volumes?q=Darth+Vader'
        );
        done();
      });
    });
  });
});
