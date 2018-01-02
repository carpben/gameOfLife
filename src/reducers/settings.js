import OPTIONS from '../CONSTS'

const init = {
   [OPTIONS.ROWS.name]: OPTIONS.ROWS.DEFAULT,
   [OPTIONS.COLUMNS.name]: OPTIONS.COLUMNS.DEFAULT,
   [OPTIONS.RANDOM_RATE.name]: OPTIONS.RANDOM_RATE.DEFAULT,
   [OPTIONS.GENERATION_SPAN.name]: OPTIONS.GENERATION_SPAN.DEFAULT,
   [OPTIONS.BORN_MIN.name]: OPTIONS.BORN_MIN.DEFAULT,
   [OPTIONS.BORN_MAX.name]: OPTIONS.BORN_MAX.DEFAULT,
   [OPTIONS.EXIST_MIN.name]: OPTIONS.EXIST_MIN.DEFAULT,
   [OPTIONS.EXIST_MAX.name]: OPTIONS.EXIST_MAX.DEFAULT,
   [OPTIONS.ADULT_COLOR.name]: OPTIONS.ADULT_COLOR.DEFAULT,
}

const settings = (state=init, action) => {
   switch (action.type) {
      case "SET_SETTING_VAL":
      console.log("setsettingVal, reducer")
         const {name, val} = action
         console.log(`name=${name} val=${val}`)
         return {...state, [name]:val}
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
