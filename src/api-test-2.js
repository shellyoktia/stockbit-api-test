// Automation script in postman to: 
// verify JSON Schema from returned data is valid
// verify that amount of data returned
// print all returned "name" 


// verify JSON Schema from returned data is valid
const schema = {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "tagline": {
          "type": "string"
        },
        "first_brewed": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "abv": {
          "type": [
            "number",
            "integer"
          ]
        },
        "ibu": {
          "type": [
            "integer",
            "number",
            "null"
          ]
        },
        "target_fg": {
          "type": "integer",
          "enum": [
            1010,
            1007,
            1012,
            1027,
            1005,
            1017,
            1020,
            1013,
            1025,
            1014,
            1030,
            1000
          ]
        },
        "target_og": {
          "type": [
            "integer",
            "number"
          ]
        },
        "ebc": {
          "type": [
            "integer",
            "null"
          ]
        },
        "srm": {
          "type": [
            "integer",
            "number",
            "null"
          ]
        },
        "ph": {
          "type": [
            "number",
            "null",
            "integer"
          ]
        },
        "attenuation_level": {
          "type": [
            "integer",
            "number"
          ]
        },
        "volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer",
              "enum": [
                20
              ]
            },
            "unit": {
              "type": "string",
              "enum": [
                "litres"
              ]
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "boil_volume": {
          "type": "object",
          "properties": {
            "value": {
              "type": "integer",
              "enum": [
                25
              ]
            },
            "unit": {
              "type": "string",
              "enum": [
                "litres"
              ]
            }
          },
          "required": [
            "value",
            "unit"
          ]
        },
        "method": {
          "type": "object",
          "properties": {
            "mash_temp": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "temp": {
                    "type": "object",
                    "properties": {
                      "value": {
                        "type": "integer",
                        "enum": [
                          64,
                          69,
                          60,
                          65,
                          72,
                          78,
                          66,
                          67,
                          68
                        ]
                      },
                      "unit": {
                        "type": "string",
                        "enum": [
                          "celsius"
                        ]
                      }
                    },
                    "required": [
                      "value",
                      "unit"
                    ]
                  },
                  "duration": {
                    "type": [
                      "integer",
                      "null"
                    ]
                  }
                },
                "required": [
                  "temp",
                  "duration"
                ]
              }
            },
            "fermentation": {
              "type": "object",
              "properties": {
                "temp": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "integer",
                      "enum": [
                        19,
                        18,
                        21,
                        9,
                        10,
                        22,
                        11,
                        17,
                        20
                      ]
                    },
                    "unit": {
                      "type": "string",
                      "enum": [
                        "celsius"
                      ]
                    }
                  },
                  "required": [
                    "value",
                    "unit"
                  ]
                }
              },
              "required": [
                "temp"
              ]
            },
            "twist": {
              "type": [
                "null",
                "string"
              ]
            }
          },
          "required": [
            "mash_temp",
            "fermentation",
            "twist"
          ]
        },
        "ingredients": {
          "type": "object",
          "properties": {
            "malt": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                    "enum": [
                      "Maris Otter Extra Pale",
                      "Caramalt",
                      "Munich",
                      "Propino Pale Malt",
                      "Wheat Malt",
                      "Propino Pale Malt for kettle souring",
                      "Acidulated Malt for kettle souring",
                      "Extra Pale",
                      "Dark Crystal",
                      "Lager Malt",
                      "Wheat",
                      "Chocolate",
                      "Carafa Special Malt Type 3",
                      "Acidulated Malt",
                      "Flaked Oats",
                      "Crystal",
                      "Peated Malt",
                      "Amber",
                      "Brown",
                      "Crystal 150",
                      "Pale Ale",
                      "Smoked Weyermann",
                      "Carafa Special Malt Type 1",
                      "Dark Crystal 350-400",
                      "Pale Ale - Tipple",
                      "Extra Pale - Spring Blend",
                      "Roasted Barley",
                      "Smoked Malt"
                    ]
                  },
                  "amount": {
                    "type": "object",
                    "properties": {
                      "value": {
                        "type": [
                          "number",
                          "integer"
                        ]
                      },
                      "unit": {
                        "type": "string",
                        "enum": [
                          "kilograms"
                        ]
                      }
                    },
                    "required": [
                      "value",
                      "unit"
                    ]
                  }
                },
                "required": [
                  "name",
                  "amount"
                ]
              }
            },
            "hops": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                    "enum": [
                      "Fuggles",
                      "First Gold",
                      "Cascade",
                      "Amarillo",
                      "Simcoe",
                      "Motueka",
                      "Bramling Cross",
                      "Centennial",
                      "Saaz",
                      "Nelson Sauvin",
                      "Peppercorns",
                      "Tomahawk",
                      "Magnum",
                      "Hersbrucker",
                      "Honey",
                      "Lactose",
                      "Citra",
                      "Columbus Extract",
                      "Columbus",
                      "Willamette",
                      "Galena",
                      "Hop Extract",
                      "Chinook",
                      "Mt.Hood",
                      "Challenger",
                      "Waimea",
                      "Ahtanum",
                      "Crystal",
                      "Sorachi Ace"
                    ]
                  },
                  "amount": {
                    "type": "object",
                    "properties": {
                      "value": {
                        "type": [
                          "integer",
                          "number"
                        ]
                      },
                      "unit": {
                        "type": "string",
                        "enum": [
                          "grams"
                        ]
                      }
                    },
                    "required": [
                      "value",
                      "unit"
                    ]
                  },
                  "add": {
                    "type": "string",
                    "enum": [
                      "start",
                      "middle",
                      "end",
                      "dry hop"
                    ]
                  },
                  "attribute": {
                    "type": "string",
                    "enum": [
                      "bitter",
                      "flavour",
                      "aroma",
                      "Flavour"
                    ]
                  }
                },
                "required": [
                  "name",
                  "amount",
                  "add",
                  "attribute"
                ]
              }
            },
            "yeast": {
              "type": "string",
              "enum": [
                "Wyeast 1056 - American Ale™",
                "Wyeast 2007 - Pilsen Lager™",
                "Wyeast 3711 - French Saison™",
                "Wyeast 3522 - Belgian Ardennes™",
                "Saflager S189",
                "Wyeast 1272 - American Ale II™",
                "Wyeast 3333 - German Wheat™",
                "Wyeast 3638 - Bavarian Wheat™"
              ]
            }
          },
          "required": [
            "malt",
            "hops",
            "yeast"
          ]
        },
        "food_pairing": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "brewers_tips": {
          "type": "string"
        },
        "contributed_by": {
          "type": "string",
          "enum": [
            "Sam Mason <samjbmason>",
            "Ali Skinner <AliSkinner>"
          ]
        }
      },
      "required": [
        "id",
        "name",
        "tagline",
        "first_brewed",
        "description",
        "image_url",
        "abv",
        "ibu",
        "target_fg",
        "target_og",
        "ebc",
        "srm",
        "ph",
        "attenuation_level",
        "volume",
        "boil_volume",
        "method",
        "ingredients",
        "food_pairing",
        "brewers_tips",
        "contributed_by"
      ]
    }
  }
  
  // verify json schema
  pm.test("Validating schema ", () => {
      pm.response.to.have.jsonSchema(schema)
  })
  


  // verify that amount of data returned
  // verify that data response is not empty
  pm.test("Validating amount of data returned ", () => {
      let jsonData = pm.response.json()
      pm.expect(jsonData.length).to.have.greaterThan(0)
  })
  
  // print all returned "name" 
  let jsonData = pm.response.json()
  let names = ''
  for (i =0; i<jsonData.length; i++) {
      names += jsonData[i].name + ' '
  }  
  tests["Response name " + names] = jsonData.length != 0