
export const toggleAboutDrawer = () => ({
   type: "TOGGLE_ABOUT_DRAWER"
})

export const setSettingVal = (name, val) => {
   console.log("action setSettingVal")
   console.log(`name=${name} val=${val}`)
   return {
      type: "SET_SETTING_VAL",
      name,
      val
   }
}
export const changeRows = (val) => ({
   type: "CHANGE_ROWS",
   val
})

export const changeColumns = (val) => ({
   type: "CHANGE_COLUMNS",
   val
})

export const changeRandomRate = (val) => ({
   type: "CHANGE_RANDOM_RATE",
   val
})

export const setLifeSpan= (val) => ({
   type:"SET_LIFESPAN",
   val
})

export const createNewBoard = () =>
   (dispatch, getState) => {
      const {rows, columns} = getState().settings
      dispatch({
         type: "CREATE_NEW_BOARD",
         rows,
         columns
      })
   }

export const populateRandomBoard = () =>
   (dispatch, getState) => {
      const {randomRate} = getState().settings
      dispatch({
         type:"POPULATE_RANDOM_BOARD",
         randomRate
      })
   }

export const cellClicked = (rowIndex, colIndex) =>
   (dispatch, getState) => {
      const running = getState().current.running
      console.log("running", running)
      if (!running){
         dispatch({
            type: "CELL_CLICKED",
            rowIndex,
            colIndex
         })
      }
   }


export const start = () =>
   (dispatch, getState) => {
      dispatch({
         type:"START",
      })
      dispatch(run())
   }

export const pause = () =>{
   console.log(100)
   return {
      type:"PAUSE"
   }
}

const run = () =>
   (dispatch, getState) => {
      console.log("run dispatched")
      const handleFuture = () => {
         const running = getState().current.running
         if (running){
            dispatch(nextGeneration())
            dispatch(run())
         }
      }
      setTimeout( handleFuture , 500)
}


export const nextGeneration = () =>
   (dispatch, getState) => {
      const state = getState()
      const {bornMin, bornMax, existMin, existMax} = state.settings
      console.log("actions nextGeneration")
      console.log(`bornMin=${bornMin} bornMax==${bornMax} existMin==${existMin} existMax==${existMax} `)

      dispatch({
         type:"NEXT_GENERATION",
         bornMin, bornMax, existMin, existMax
      })
      dispatch({
         type:"GENERATION_PLUS"
      })
   }
