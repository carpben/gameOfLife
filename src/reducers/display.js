const init = {
   about: false
}

const display = (state=init, action) => {
   switch (action.type) {
      case "TOGGLE_ABOUT_DRAWER":
         const about = !state.about;
         return {...state, about};
      default:
         return state
   }
}

export default display
