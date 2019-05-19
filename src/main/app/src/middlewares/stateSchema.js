export default {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "title": "The Root Schema",
  "required": [
    "cities"
  ],
  "properties": {
    "cities": {
      "$id": "#/properties/cities",
      "type": "array",
      "title": "The Cities Schema",
      "items": {
        "$id": "#/properties/cities/items",
        "type": "object",
        "title": "The Items Schema",
        "required": [
          "name",
          "country"
        ],
        "properties": {
          "name": {
            "$id": "#/properties/cities/items/properties/name",
            "type": "string",
            "title": "The Name Schema",
            "default": "",
            "examples": [
              "Maringá"
            ],
            "pattern": "^(.*)$"
          },
          "country": {
            "$id": "#/properties/cities/items/properties/country",
            "type": "string",
            "title": "The Country Schema",
            "default": "",
            "examples": [
              "br"
            ],
            "pattern": "^(.*){2}$"
          }
        }
      }
    }
  }
}
