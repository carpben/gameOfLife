const OPTIONS = {
   ROWS:{
      name: "rows",
      min: 10,
      max: 100,
      DEFAULT: 40
   },
   COLUMNS:{
      name: "columns",
      min: 10,
      max: 100,
      DEFAULT: 50
   },
   RANDOM_RATE: {
      name: "randomRate",
      min: 1,
      max: 100,
      DEFAULT: 33
   },
   BORN_MIN: {
      name: "bornMin",
      min: 0,
      max: 8,
      DEFAULT: 3
   },
   BORN_MAX: {
      name: "bornMax",
      min: 0,
      max: 8,
      DEFAULT: 3
   },
   EXIST_MIN:{
      name: "existMin",
      min: 0,
      max: 8,
      DEFAULT: 2
   },
   EXIST_MAX:{
      name: "existMax",
      min: 0,
      max: 8,
      DEFAULT: 3
   },
   GENERATION_SPAN: {
      name: "generationSpan",
      min: 400,
      max: 2000,
      DEFAULT: 1000
   },
   ADULT_COLOR: {
      name: "adultColor",
      colors: ["white", "yellow", "cyan", "red", "green", "blue"],
      DEFAULT: "white"
   }
}

export default OPTIONS
