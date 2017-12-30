const init = {
   running:false,
   generation: 0
}

const current = (state=init, action) => {
   switch (action.type) {
      case "START":{
         const running=true
         return {...state, running}
         break;
      }
      case "PAUSE":{
         console.log("reducer PAUSE")
         const running = false
         return {...state, running}
         break;
      }
      case "GENERATION_PLUS" :
         const generation = state.generation+1
         return {...state, generation}
      default:
         return state

   }
}

export default current
