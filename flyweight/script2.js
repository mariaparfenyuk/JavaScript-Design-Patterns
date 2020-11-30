const Book = function (title, author, genre, pageCount, publisherID, ISBN) {
  this.title = title
  this.author = author
  this.genre = genre
  this.pageCount = pageCount
  this.publisherID = publisherID
  this.ISBN = ISBN
}

// фабрика по созданию книг - Одиночка
const BookFactory = (() => {
  const existingBooks = {}
  let existingBook = ''
  return {
    createBook(title, author, genre, pageCount, publisherID, ISBN) {
      // проверяем, имеется ли книга с указанным набором мета-данных
      existingBook = existingBooks[ISBN]
      if (!!existingBook) return existingBook
      else {
        // если не имеется, создаем новый экземпляр и сохраняем его
        const book = new Book(
          title,
          author,
          genre,
          pageCount,
          publisherID,
          ISBN
        )
        existingBook[ISBN] = book
        return book
      }
    },
  }
})()

// хранилище для записей о книгах - Одиночка
const BookRecordManager = (() => {
  const bookRecordDatabase = {}
  return {
    addBookRecord(
      id,
      title,
      author,
      genre,
      pageCount,
      publisherID,
      ISBN,
      checkoutDate,
      checkoutMember,
      dueReturnDate,
      availability
    ) {
      const book = BookFactory.createBook(
        title,
        author,
        genre,
        pageCount,
        publisherID,
        ISBN
      )
      bookRecordDatabase[id] = {
        checkoutMember,
        checkoutDate,
        dueReturnDate,
        availability,
        book,
      }
    },
    updateCheckoutStatus(
      bookID,
      newStatus,
      checkoutDate,
      checkoutMember,
      newReturnDate
    ) {
      const record = bookRecordDatabase[bookID]
      record.availability = newStatus
      record.checkoutDate = checkoutDate
      record.checkoutMember = checkoutMember
      record.dueReturnDate = newReturnDate
    },
    extendCheckoutPeriod(bookID, newReturnDate) {
      bookRecordDatabase[bookID].dueReturnDate = newReturnDate
    },
    isPastDue(bookID) {
      const currentDate = new Date()
      return (
        currentDate.getTime() >
        Date.parse(bookRecordDatabase[bookID].dueReturnDate)
      )
    },
  }
})()
