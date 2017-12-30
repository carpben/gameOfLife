import {DEFAULT} from '../CONSTS'

const init = {
   rows: DEFAULT.ROWS,
   columns: DEFAULT.COLUMNS,
   randomRate: DEFAULT.RANDOM_RATE,
   bornMin: DEFAULT.BORN_MIN,
   bornMax: DEFAULT.BORN_MIN,
   existMin: DEFAULT.EXIST_MIN,
   existMax: DEFAULT.EXIST_MAX,
   lifeSpan: DEFAULT.LIFESPAN_MS,
   adultColor: DEFAULT.ADULT_COLOR
}

const settings = (state=init, action) => {
   switch (action.type) {
      case "CHANGE_ROWS":
         const rows = action.val
         return {...state, rows}
      case "CHANGE_COLUMNS":
         const columns = action.val
         return {...state, columns}
      case "CHANGE_RANDOM_RATE":
         console.log("changing random rate to", action.val)
         const randomRate = action.val
         return {...state, randomRate}
      case "SET_LIFESPAN":
         const lifeSpan = action.val
         return {...state, lifeSpan}
      default:
         return state
   }
}

export default settings
