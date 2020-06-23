//sources: https://www.worldometers.info/population/countries-in-europe-by-population/, 
//https://www.wikipedia.org/,
//https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?name_desc=false

const europeData = [
    {
        "id": "AZ",
        "population": 10134957,
        "name": "Azerbaijan",
        "surface": 86600,
        "gdp": 4139
    },
    {
        "id": "AL",
        "population": 2877797,
        "name": "Albania",
        "surface": 27400,
        "gdp": 4521
    },
    {
        "id": "AM",
        "population": 2962990,
        "name": "Armenia,",
        "surface": 29743,
        "gdp": 3918
    },
    {
        "id": "BA",
        "population": 3280819,
        "name": "Bosnia and Herzegovina",
        "surface": 51000,
        "gdp": 5387
    },
    {
        "id": "BG",
        "population": 6948445,
        "name": "Bulgaria",
        "surface": 108560,
        "gdp": 8197
    },
    {
        "id": "CY",
        "population": 1206954,
        "name": "Cyprus",
        "surface": 9251,
        "gdp": 18695
    },
    {
        "id": "DK",
        "population": 5792202,
        "name": "Denmark",
        "surface": 15200,
        "gdp": 57545
    },
    {
        "id": "IE",
        "population": 4937786,
        "name": "Ireland",
        "surface": 68890,
        "gdp": 69727
    },
    {
        "id": "EE",
        "population": 1326535,
        "name": "Estonia",
        "surface": 42390,
        "gdp": 20170
    },
    {
        "id": "AT",
        "population": 9006398,
        "name": "Austria",
        "surface": 82409,
        "gdp": 47261
    },
    {
        "id": "CZ",
        "population": 10708981,
        "name": "Czech Republic",
        "surface": 77240,
        "gdp": 20291
    },
    {
        "id": "FI",
        "population": 5540720,
        "name": "Finland",
        "surface": 303890,
        "gdp": 45778
    },
    {
        "id": "FR",
        "population": 65273511,
        "name": "France",
        "surface": 547557,
        "gdp": 39827
    },
    {
        "id": "GE",
        "population": 3989515,
        "name": "Georgia",
        "surface": 69700,
        "gdp": 3762
    },
    {
        "id": "DE",
        "population": 83783942,
        "name": "Germany",
        "surface": 348560,
        "gdp": 44680
    },
    {
        "id": "GR",
        "population": 10423054,
        "name": "Greece",
        "surface": 128900,
        "gdp": 19214
    },
    {
        "id": "HR",
        "population": 4105267,
        "name": "Croatia",
        "surface": 55960,
        "gdp": 13200
    },
    {
        "id": "HU",
        "population": 9660351,
        "name": "Hungary",
        "surface": 90530,
        "gdp": 14364
    },
    {
        "id": "IS",
        "population": 341243,
        "name": "Iceland",
        "surface": 100250,
        "gdp": 73233
    },
    {
        "id": "IT",
        "population": 60461826,
        "name": "Italy",
        "surface": 294140,
        "gdp": 32038
    },
    {
        "id": "LV",
        "population": 1886198,
        "name": "Latvia",
        "surface": 62200,
        "gdp": 15613
    },
    {
        "id": "BY",
        "population": 9449323,
        "name": "Belarus",
        "surface": 202910,
        "gdp": 5762
    },
    {
        "id": "LT",
        "population": 2722289,
        "name": "Lithuana",
        "surface": 62674,
        "gdp": 16709
    },
    {
        "id": "SK",
        "population": 5459642,
        "name": "Slovakia",
        "surface": 48088,
        "gdp": 17551
    },
    {
        "id": "LI",
        "population": 38128,
        "name": "Liechtenstein",
        "surface": 160,
        "gdp": 165028
    },
    {
        "id": "MK",
        "population": 2083374,
        "name": "North Macedonia",
        "surface": 25220,
        "gdp": 5418
    },
    {
        "id": "MT",
        "population": 441543,
        "name": "Malta",
        "surface": 320,
        "gdp": 28585
    },
    {
        "id": "BE",
        "population": 11589623,
        "name": "Belgium",
        "surface": 30280,
        "gdp": 43325
    },
    {
        "id": "FO",
        "population": 48863,
        "name": "Faeroe Islands",
        "surface": 1396,
        "gdp": 55822
    },
    {
        "id": "AD",
        "population": 77265,
        "name": "Andorra",
        "surface": 470,
        "gdp": 39128
    },
    {
        "id": "LU",
        "population": 625978,
        "name": "Luxembourg",
        "surface": 2590,
        "gdp": 105280
    },
    {
        "id": "MC",
        "population": 39242,
        "name": "Monaco",
        "surface": 1974,
        "gdp": 185741
    },
    {
        "id": "ME",
        "population": 628066,
        "name": "Montenegro",
        "surface": 13450,
        "gdp": 7720
    },
    {
        "id": "NL",
        "population": 17134872,
        "name": "Netherlands",
        "surface": 33720,
        "gdp": 48796
    },
    {
        "id": "NO",
        "population": 5421241,
        "name": "Norway",
        "surface": 365268,
        "gdp": 75428
    },
    {
        "id": "PL",
        "population": 37846611,
        "name": "Poland",
        "surface": 306230,
        "gdp": 13871
    },
    {
        "id": "PT",
        "population": 10196709,
        "name": "Portugal",
        "surface": 91590,
        "gdp": 21316
    },
    {
        "id": "RO",
        "population": 19237691,
        "name": "Romania",
        "surface": 230170,
        "gdp": 10781
    },
    {
        "id": "MD",
        "population": 4033963,
        "name": "Moldova",
        "surface": 32850,
        "gdp": 2002
    },
    {
        "id": "SI",
        "population": 2078938,
        "name": "Slovenia",
        "surface": 20140,
        "gdp": 23488
    },
    {
        "id": "ES",
        "population": 46754778,
        "name": "Spain",
        "surface": 498800,
        "gdp": 28175
    },
    {
        "id": "SE",
        "population": 10099265,
        "name": "Sweden",
        "surface": 410340,
        "gdp": 54075
    },
    {
        "id": "CH",
        "population": 8654622,
        "name": "Switzerland",
        "surface": 39516,
        "gdp": 80296
    },
    {
        "id": "TR",
        "population": 84297173,
        "name": "Turkey",
        "surface": 783562,
        "gdp": 10498
    },
    {
        "id": "GB",
        "population": 67886011,
        "name": "United Kingdom",
        "surface": 241930,
        "gdp": 39532
    },
    {
        "id": "UA",
        "population": 43733762,
        "name": "Ukraine",
        "surface": 579320,
        "gdp": 2521
    },
    {
        "id": "SM",
        "population": 33931,
        "name": "San Marino",
        "surface": 61,
        "gdp": 48495
    },
    {
        "id": "RS",
        "population": 8737371,
        "name": "Serbia",
        "surface": 87460,
        "gdp": 4692
    },
    {
        "id": "VA",
        "population": 825,
        "name": "Vatican",
        "surface": 0.49,
        "gdp": 21198
    },
    {
        "id": "RU",
        "population": 110000000,
        "name": "Russia",
        "surface": 3960000,
        "gdp": 10846
    }
]

export default europeData;