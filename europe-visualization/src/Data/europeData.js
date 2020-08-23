//sources: https://www.worldometers.info/population/countries-in-europe-by-population/,
//https://www.wikipedia.org/,
//https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?name_desc=false
//https://en.wikipedia.org/wiki/Religions_by_country#Europe

const europeData = [
  {
    "id": "AZ",
    "population": 10134957,
    "name": "Azerbaijan",
    "surface": 86600,
    "gdp": 4139,
    "religion": [

      {
        "name": "Christian",
        "percentage": 0.03
      },


      {
        "name": "Muslim",
        "percentage": 0.969
      },


      {
        "name": "Irreligion",
        "percentage": 0
      },


      {
        "name": "Hindu",
        "percentage": 0
      },

      {
        "name": "Buddist",
        "percentage": 0
      },

      {
        "name": "Folk Religion",
        "percentage": 0
      },

      {
        "name": "Other religion",
        "percentage": 0
      },

      {
        "name": "Jewish",
        "percentage": 0
      },

    ]
  },
  {
    "id": "AL",
    "population": 2877797,
    "name": "Albania",
    "surface": 27400,
    "gdp": 4521,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.38
      },
      {
        "name": "Muslim",
        "percentage": 0.8
      },
      {
        "name": "Irreligion",
        "percentage": 0.018
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0.002
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "AM",
    "population": 2962990,
    "name": "Armenia",
    "surface": 29743,
    "gdp": 3918,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.985
      },
      {
        "name": "Muslim",
        "percentage": 0
      },
      {
        "name": "Irreligion",
        "percentage": 0.013
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0.001
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "BA",
    "population": 3280819,
    "name": "Bosnia and Herzegovina",
    "surface": 51000,
    "gdp": 5387,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.48
      },
      {
        "name": "Muslim",
        "percentage": 0.51
      },
      {
        "name": "Irreligion",
        "percentage": 0.01
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "BG",
    "population": 6948445,
    "name": "Bulgaria",
    "surface": 108560,
    "gdp": 8197,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.821
      },
      {
        "name": "Muslim",
        "percentage": 0.137
      },
      {
        "name": "Irreligion",
        "percentage": 0.042
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "CY",
    "population": 1206954,
    "name": "Cyprus",
    "surface": 9251,
    "gdp": 18695,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.732
      },
      {
        "name": "Muslim",
        "percentage": 0.253
      },
      {
        "name": "Irreligion",
        "percentage": 0.012
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0.002
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "DK",
    "population": 5792202,
    "name": "Denmark",
    "surface": 15200,
    "gdp": 57545,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.835
      },
      {
        "name": "Muslim",
        "percentage": 0.041
      },
      {
        "name": "Irreligion",
        "percentage": 0.118
      },
      {
        "name": "Hindu",
        "percentage": 0.004
      },
      {
        "name": "Buddist",
        "percentage": 0.002
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "IE",
    "population": 4937786,
    "name": "Ireland",
    "surface": 68890,
    "gdp": 69727,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.92
      },
      {
        "name": "Muslim",
        "percentage": 0.011
      },
      {
        "name": "Irreligion",
        "percentage": 0.062
      },
      {
        "name": "Hindu",
        "percentage": 0.002
      },
      {
        "name": "Buddist",
        "percentage": 0.002
      },
      {
        "name": "Folk Religion",
        "percentage": 0.002
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "EE",
    "population": 1326535,
    "name": "Estonia",
    "surface": 42390,
    "gdp": 20170,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.399
      },
      {
        "name": "Muslim",
        "percentage": 0.002
      },
      {
        "name": "Irreligion",
        "percentage": 0.596
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0.001
      }
    ]
  },
  {
    "id": "AT",
    "population": 9006398,
    "name": "Austria",
    "surface": 82409,
    "gdp": 47261,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.804
      },
      {
        "name": "Muslim",
        "percentage": 0.054
      },
      {
        "name": "Irreligion",
        "percentage": 0.135
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0.002
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0.001
      },
      {
        "name": "Jewish",
        "percentage": 0.002
      }
    ]
  },
  {
    "id": "CZ",
    "population": 10708981,
    "name": "Czech Republic",
    "surface": 77240,
    "gdp": 20291,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.233
      },
      {
        "name": "Muslim",
        "percentage": 0.002
      },
      {
        "name": "Irreligion",
        "percentage": 0.764
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]

  },
  {
    "id": "FI",
    "population": 5540720,
    "name": "Finland",
    "surface": 303890,
    "gdp": 45778,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.816
      },
      {
        "name": "Muslim",
        "percentage": 0.008
      },
      {
        "name": "Irreligion",
        "percentage": 0.176
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "FR",
    "population": 65273511,
    "name": "France",
    "surface": 547557,
    "gdp": 39827,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.63
      },
      {
        "name": "Muslim",
        "percentage": 0.075
      },
      {
        "name": "Irreligion",
        "percentage": 0.28
      },
      {
        "name": "Hindu",
        "percentage": 0.0005
      },
      {
        "name": "Buddist",
        "percentage": 0.005
      },
      {
        "name": "Folk Religion",
        "percentage": 0.003
      },
      {
        "name": "Other religion",
        "percentage": 0.002
      },
      {
        "name": "Jewish",
        "percentage": 0.005
      }
    ]
  },
  {
    "id": "GE",
    "population": 3989515,
    "name": "Georgia",
    "surface": 69700,
    "gdp": 3762,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.88
      },
      {
        "name": "Muslim",
        "percentage": 0.11
      },
      {
        "name": "Irreligion",
        "percentage": 0.01
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "DE",
    "population": 83783942,
    "name": "Germany",
    "surface": 348560,
    "gdp": 44680,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.687
      },
      {
        "name": "Muslim",
        "percentage": 0.058
      },
      {
        "name": "Irreligion",
        "percentage": 0.247
      },
      {
        "name": "Hindu",
        "percentage": 0.001
      },
      {
        "name": "Buddist",
        "percentage": 0.003
      },
      {
        "name": "Folk Religion",
        "percentage": 0.0005
      },
      {
        "name": "Other religion",
        "percentage": 0.001
      },
      {
        "name": "Jewish",
        "percentage": 0.003
      }
    ]
  },
  {
    "id": "GR",
    "population": 10423054,
    "name": "Greece",
    "surface": 128900,
    "gdp": 19214,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.881
      },
      {
        "name": "Muslim",
        "percentage": 0.058
      },
      {
        "name": "Irreligion",
        "percentage": 0.06
      },
      {
        "name": "Hindu",
        "percentage": 0.001
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0.001
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "HR",
    "population": 4105267,
    "name": "Croatia",
    "surface": 55960,
    "gdp": 13200,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.934
      },
      {
        "name": "Muslim",
        "percentage": 0.014
      },
      {
        "name": "Irreligion",
        "percentage": 0.051
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "HU",
    "population": 9660351,
    "name": "Hungary",
    "surface": 90530,
    "gdp": 14364,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.81
      },
      {
        "name": "Muslim",
        "percentage": 0.006
      },
      {
        "name": "Irreligion",
        "percentage": 0.186
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0.00001
      }
    ]
  },
  {
    "id": "IS",
    "population": 341243,
    "name": "Iceland",
    "surface": 100250,
    "gdp": 73233,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.95
      },
      {
        "name": "Muslim",
        "percentage": 0.002
      },
      {
        "name": "Irreligion",
        "percentage": 0.035
      },
      {
        "name": "Hindu",
        "percentage": 0.003
      },
      {
        "name": "Buddist",
        "percentage": 0.004
      },
      {
        "name": "Folk Religion",
        "percentage": 0.005
      },
      {
        "name": "Other religion",
        "percentage": 0.002
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "IT",
    "population": 60461826,
    "name": "Italy",
    "surface": 294140,
    "gdp": 32038,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.83
      },
      {
        "name": "Muslim",
        "percentage": 0.04
      },
      {
        "name": "Irreligion",
        "percentage": 0.124
      },
      {
        "name": "Hindu",
        "percentage": 0.001
      },
      {
        "name": "Buddist",
        "percentage": 0.002
      },
      {
        "name": "Folk Religion",
        "percentage": 0.001
      },
      {
        "name": "Other religion",
        "percentage": 0.001
      },
      {
        "name": "Jewish",
        "percentage": 0.0008
      }
    ]
  },
  {
    "id": "LV",
    "population": 1886198,
    "name": "Latvia",
    "surface": 62200,
    "gdp": 15613,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.558
      },
      {
        "name": "Muslim",
        "percentage": 0.001
      },
      {
        "name": "Irreligion",
        "percentage": 0.438
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0.002
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "BY",
    "population": 9449323,
    "name": "Belarus",
    "surface": 202910,
    "gdp": 5762,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.868
      },
      {
        "name": "Muslim",
        "percentage": 0.012
      },
      {
        "name": "Irreligion",
        "percentage": 0.18
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "LT",
    "population": 2722289,
    "name": "Lithuana",
    "surface": 62674,
    "gdp": 16709,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.898
      },
      {
        "name": "Muslim",
        "percentage": 0.001
      },
      {
        "name": "Irreligion",
        "percentage": 0.1
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "SK",
    "population": 5459642,
    "name": "Slovakia",
    "surface": 48088,
    "gdp": 17551,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.853
      },
      {
        "name": "Muslim",
        "percentage": 0.002
      },
      {
        "name": "Irreligion",
        "percentage": 0.143
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "LI",
    "population": 38128,
    "name": "Liechtenstein",
    "surface": 160,
    "gdp": 165028,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.919
      },
      {
        "name": "Muslim",
        "percentage": 0.05
      },
      {
        "name": "Irreligion",
        "percentage": 0.029
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0.001
      }
    ]
  },
  {
    "id": "MK",
    "population": 2083374,
    "name": "North Macedonia",
    "surface": 25220,
    "gdp": 5418,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.5
      },
      {
        "name": "Muslim",
        "percentage": 0.39
      },
      {
        "name": "Irreligion",
        "percentage": 0.01
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "MT",
    "population": 441543,
    "name": "Malta",
    "surface": 320,
    "gdp": 28585,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.97
      },
      {
        "name": "Muslim",
        "percentage": 0.026
      },
      {
        "name": "Irreligion",
        "percentage": 0.025
      },
      {
        "name": "Hindu",
        "percentage": 0.002
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "BE",
    "population": 11589623,
    "name": "Belgium",
    "surface": 30280,
    "gdp": 43325,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.6425
      },
      {
        "name": "Muslim",
        "percentage": 0.059
      },
      {
        "name": "Irreligion",
        "percentage": 0.29
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0.002
      },
      {
        "name": "Folk Religion",
        "percentage": 0.002
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0.003
      }
    ]
  },
  {
    "id": "FO",
    "population": 48863,
    "name": "Faeroe Islands",
    "surface": 1396,
    "gdp": 55822,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.98
      },
      {
        "name": "Muslim",
        "percentage": 0
      },
      {
        "name": "Irreligion",
        "percentage": 0.017
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0.003
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "AD",
    "population": 77265,
    "name": "Andorra",
    "surface": 470,
    "gdp": 39128,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.88
      },
      {
        "name": "Muslim",
        "percentage": 0.03
      },
      {
        "name": "Irreligion",
        "percentage": 0.005
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0.001
      },
      {
        "name": "Other religion",
        "percentage": 0.001
      },
      {
        "name": "Jewish",
        "percentage": 0.003
      }
    ]
  },
  {
    "id": "LU",
    "population": 625978,
    "name": "Luxembourg",
    "surface": 2590,
    "gdp": 105280,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.704
      },
      {
        "name": "Muslim",
        "percentage": 0.023
      },
      {
        "name": "Irreligion",
        "percentage": 0.268
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0.003
      },
      {
        "name": "Jewish",
        "percentage": 0.001
      }
    ]
  },
  {
    "id": "MC",
    "population": 39242,
    "name": "Monaco",
    "surface": 1974,
    "gdp": 185741,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.86
      },
      {
        "name": "Muslim",
        "percentage": 0.004
      },
      {
        "name": "Irreligion",
        "percentage": 0.117
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0.002
      },
      {
        "name": "Jewish",
        "percentage": 0.017
      }
    ]
  },
  {
    "id": "ME",
    "population": 628066,
    "name": "Montenegro",
    "surface": 13450,
    "gdp": 7720,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.7
      },
      {
        "name": "Muslim",
        "percentage": 0.3
      },
      {
        "name": "Irreligion",
        "percentage": 0
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "NL",
    "population": 17134872,
    "name": "Netherlands",
    "surface": 33720,
    "gdp": 48796,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.39
      },
      {
        "name": "Muslim",
        "percentage": 0.051
      },
      {
        "name": "Irreligion",
        "percentage": 0.51
      },
      {
        "name": "Hindu",
        "percentage": 0.005
      },
      {
        "name": "Buddist",
        "percentage": 0.002
      },
      {
        "name": "Folk Religion",
        "percentage": 0.002
      },
      {
        "name": "Other religion",
        "percentage": 0.002
      },
      {
        "name": "Jewish",
        "percentage": 0.002
      }
    ]
  },
  {
    "id": "NO",
    "population": 5421241,
    "name": "Norway",
    "surface": 365268,
    "gdp": 75428,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.847
      },
      {
        "name": "Muslim",
        "percentage": 0.037
      },
      {
        "name": "Irreligion",
        "percentage": 0.101
      },
      {
        "name": "Hindu",
        "percentage": 0.005
      },
      {
        "name": "Buddist",
        "percentage": 0.006
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0.002
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "PL",
    "population": 37846611,
    "name": "Poland",
    "surface": 306230,
    "gdp": 13871,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.943
      },
      {
        "name": "Muslim",
        "percentage": 0.001
      },
      {
        "name": "Irreligion",
        "percentage": 0.056
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0.0003
      }
    ]
  },
  {
    "id": "PT",
    "population": 10196709,
    "name": "Portugal",
    "surface": 91590,
    "gdp": 21316,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.938
      },
      {
        "name": "Muslim",
        "percentage": 0.006
      },
      {
        "name": "Irreligion",
        "percentage": 0.044
      },
      {
        "name": "Hindu",
        "percentage": 0.001
      },
      {
        "name": "Buddist",
        "percentage": 0.006
      },
      {
        "name": "Folk Religion",
        "percentage": 0.005
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "RO",
    "population": 19237691,
    "name": "Romania",
    "surface": 230170,
    "gdp": 10781,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.995
      },
      {
        "name": "Muslim",
        "percentage": 0.003
      },
      {
        "name": "Irreligion",
        "percentage": 0.001
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "MD",
    "population": 4033963,
    "name": "Moldova",
    "surface": 32850,
    "gdp": 2002,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.974
      },
      {
        "name": "Muslim",
        "percentage": 0.006
      },
      {
        "name": "Irreligion",
        "percentage": 0.014
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0.006
      }
    ]
  },
  {
    "id": "SI",
    "population": 2078938,
    "name": "Slovenia",
    "surface": 20140,
    "gdp": 23488,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.784
      },
      {
        "name": "Muslim",
        "percentage": 0.036
      },
      {
        "name": "Irreligion",
        "percentage": 0.18
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "ES",
    "population": 46754778,
    "name": "Spain",
    "surface": 498800,
    "gdp": 28175,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.786
      },
      {
        "name": "Muslim",
        "percentage": 0.05
      },
      {
        "name": "Irreligion",
        "percentage": 0.19
      },
      {
        "name": "Hindu",
        "percentage": 0.0004
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0.0004
      },
      {
        "name": "Other religion",
        "percentage": 0.0002
      },
      {
        "name": "Jewish",
        "percentage": 0.001
      }
    ]
  },
  {
    "id": "SE",
    "population": 10099265,
    "name": "Sweden",
    "surface": 410340,
    "gdp": 54075,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.762
      },
      {
        "name": "Muslim",
        "percentage": 0.046
      },
      {
        "name": "Irreligion",
        "percentage": 0.27
      },
      {
        "name": "Hindu",
        "percentage": 0.002
      },
      {
        "name": "Buddist",
        "percentage": 0.004
      },
      {
        "name": "Folk Religion",
        "percentage": 0.002
      },
      {
        "name": "Other religion",
        "percentage": 0.002
      },
      {
        "name": "Jewish",
        "percentage": 0.001
      }
    ]
  },
  {
    "id": "CH",
    "population": 8654622,
    "name": "Switzerland",
    "surface": 39516,
    "gdp": 80296,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.813
      },
      {
        "name": "Muslim",
        "percentage": 0.055
      },
      {
        "name": "Irreligion",
        "percentage": 0.119
      },
      {
        "name": "Hindu",
        "percentage": 0.004
      },
      {
        "name": "Buddist",
        "percentage": 0.004
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0.001
      },
      {
        "name": "Jewish",
        "percentage": 0.003
      }
    ]
  },
  {
    "id": "TR",
    "population": 84297173,
    "name": "Turkey",
    "surface": 783562,
    "gdp": 10498,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.004
      },
      {
        "name": "Muslim",
        "percentage": 0.98
      },
      {
        "name": "Irreligion",
        "percentage": 0.012
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0.0005
      },
      {
        "name": "Folk Religion",
        "percentage": 0.0003
      },
      {
        "name": "Other religion",
        "percentage": 0.002
      },
      {
        "name": "Jewish",
        "percentage": 0.0003
      }
    ]
  },
  {
    "id": "GB",
    "population": 67886011,
    "name": "United Kingdom",
    "surface": 241930,
    "gdp": 39532,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.711
      },
      {
        "name": "Muslim",
        "percentage": 0.044
      },
      {
        "name": "Irreligion",
        "percentage": 0.213
      },
      {
        "name": "Hindu",
        "percentage": 0.013
      },
      {
        "name": "Buddist",
        "percentage": 0.004
      },
      {
        "name": "Folk Religion",
        "percentage": 0.003
      },
      {
        "name": "Other religion",
        "percentage": 0.008
      },
      {
        "name": "Jewish",
        "percentage": 0.005
      }
    ]
  },
  {
    "id": "UA",
    "population": 43733762,
    "name": "Ukraine",
    "surface": 579320,
    "gdp": 2521,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.838
      },
      {
        "name": "Muslim",
        "percentage": 0.025
      },
      {
        "name": "Irreligion",
        "percentage": 0.147
      },
      {
        "name": "Hindu",
        "percentage": 0.0002
      },
      {
        "name": "Buddist",
        "percentage": 0.0004
      },
      {
        "name": "Folk Religion",
        "percentage": 0.0001
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0.001
      }
    ]
  },
  {
    "id": "SM",
    "population": 33931,
    "name": "San Marino",
    "surface": 61,
    "gdp": 48495,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.916
      },
      {
        "name": "Muslim",
        "percentage": 0.002
      },
      {
        "name": "Irreligion",
        "percentage": 0.072
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0.009
      },
      {
        "name": "Jewish",
        "percentage": 0.003
      }
    ]
  },
  {
    "id": "RS",
    "population": 8737371,
    "name": "Serbia",
    "surface": 87460,
    "gdp": 4692,
    "religion": [
      {
        "name": "Christian",
        "percentage": 0.925
      },
      {
        "name": "Muslim",
        "percentage": 0.042
      },
      {
        "name": "Irreligion",
        "percentage": 0.033
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "VA",
    "population": 825,
    "name": "Vatican",
    "surface": 0.49,
    "gdp": 21198,
    "religion": [
      {
        "name": "Christian",
        "percentage": 1
      },
      {
        "name": "Muslim",
        "percentage": 0
      },
      {
        "name": "Irreligion",
        "percentage": 0
      },
      {
        "name": "Hindu",
        "percentage": 0
      },
      {
        "name": "Buddist",
        "percentage": 0
      },
      {
        "name": "Folk Religion",
        "percentage": 0
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0
      }
    ]
  },
  {
    "id": "RU",
    "population": 110000000,
    "name": "Russia",
    "surface": 3960000,
    "gdp": 10846,
    "religion": [

      {
        "name": "Christian",
        "percentage": 0.733
      },
      {
        "name": "Muslim",
        "percentage": 0.2
      },
      {
        "name": "Irreligion",
        "percentage": 0.162
      },
      {
        "name": "Hindu",
        "percentage": 0.0002

      },
      {
        "name": "Buddist",
        "percentage": 0.001
      },
      {
        "name": "Folk Religion",
        "percentage": 0.002
      },
      {
        "name": "Other religion",
        "percentage": 0
      },
      {
        "name": "Jewish",
        "percentage": 0.002
      }
    ]
  }
]

export default europeData;
