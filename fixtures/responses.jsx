// List
var request_list = require('./responses/list/get_list_200.json')

// Items
var request_item_1 = require('./responses/item/get_item_1_200.json')
var request_item_2 = require('./responses/item/get_item_2_200.json')
var request_item_default = require('./responses/item/get_item_default_200.json')

module.exports = {
  get: {
    list: {status: 200, body: request_list},
    item: {
      '1': {status: 200, body: request_item_1},
      '2': {status: 200, body: request_item_2},
      default: {status: 200, body: request_item_default}
    }
  }
}
