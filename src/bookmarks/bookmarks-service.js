const BookmarksService = {
  //This will allow us to generate a unique id in the future if needed
  uniqueId() {
    const idCharacters = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const id_Length = 10;
    let randomId = '';

    for (let i = 0; i <id_Length.length; i++) {
        randomId += idCharacters.charAt(Math.floor(Math.floor() * idCharacters));
    }
  },

  //grabs all the bookmarks
  getAllBookmarks(knex) {
    return knex.select('*').from('bookmark_list')
  },

  //  searches through the id column for any id's = to the id presented and re
  //returns the info
  getById(knex, id) {
    return knex.from('bookmark_list').select('*').where('id', id).first()
  },

  //  Grabs the data provided in the body, then inserts a data value with the
  //inputed values
  insertBookmark(knex, newBookmark) {
    return knex
      .insert(newBookmark)
      .into('bookmark_list')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },

  //  Searches through the id column for a line with the correct id then deletes it
  deleteBookmark(knex, id) {
    return knex('bookmark_list')
      .where({ id })
      .delete()
  },

  //  Searches for a row with the correct id, then replaces the data in the row
  //with the data provided in the update request
  updateBookmark(knex, id, newBookmarkFields) {
    return knex('bookmark_list')
      .where({ id })
      .update(newBookmarkFields)
  },
}

module.exports = BookmarksService
