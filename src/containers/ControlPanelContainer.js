import {connect} from 'react-redux'
import {setSettingVal, changeRows, changeColumns, createNewBoard, changeRandomRate, setLifeSpan,
   populateRandomBoard, start, pause} from '../actions'
import ControlPanel from '../components/ControlPanel'


const mapStateToProps = state => {
   const running = state.current.running
   return {...state.settings, running}
}
const mapDispatchToProps = dispatch => ({
   // changeRows: (val) => dispatch(changeRows(val)),
   // changeColumns: (val) => dispatch(changeColumns(val)),
   setSettingVal: (name, val) => dispatch(setSettingVal(name, val)),
   createNewBoard: () => dispatch(createNewBoard()),
   changeRandomRate: (val) => dispatch(changeRandomRate(val)),
   populateRandomBoard: () => dispatch(populateRandomBoard()),
   start: () => dispatch(start()),
   setLifeSpan: (val) => dispatch(setLifeSpan(val)),
   pause: () => dispatch(pause())

})

const ControlPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ControlPanel)

export default ControlPanelContainer
