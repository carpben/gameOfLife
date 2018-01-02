import React from 'react'
import '../Styles/ControlPanel.css'
import RaisedButton from 'material-ui/RaisedButton';
import OPTIONS from '../CONSTS'
import Drawer from 'material-ui/Drawer';
import SliderSection from './SliderSection'
import Divider from 'material-ui/Divider';
import SelectFieldW from './SelectFieldW'

const styles = {
   button: {
      marginTop:15
   },
   startButton:{
      backgroundColor:"blue",
   }

}

const ControlPanel = ({setSettingVal, rows, columns, generationSpan, randomRate, running, changeRows, changeColumns, setLifeSpan,
   bornMin, bornMax, existMin, existMax, adultColor, createNewBoard,
   changeRandomRate, populateRandomBoard, start,pause, classes}) => {

      const startButton = <RaisedButton label="Start" onClick={start}  primary={true} style={styles.button} buttonStyle={styles.startButton}/>
      const pauseButton = <RaisedButton label="Pause" onClick={pause}  primary={true} style={styles.button} buttonStyle={styles.startButton}/>


   return (
      <Drawer open={true} className="ControlPanel" width={300}>
         <div className="cp-inner-w" >
            <section className="board-control">
               <h4>Board</h4>
               <SliderSection {...OPTIONS.ROWS} val={rows} setSettingVal={setSettingVal} />
               <SliderSection {...OPTIONS.COLUMNS} val={columns} setSettingVal={setSettingVal}/>
               <RaisedButton label="Create Board" onClick={createNewBoard} primary={true} style={styles.button} />
            </section>
                <Divider />
            <section className="init-state">
               <h4>Populate</h4>
               <SliderSection {...OPTIONS.RANDOM_RATE} val={randomRate} setSettingVal={setSettingVal} />
               <RaisedButton label="Populate Random" onClick={populateRandomBoard} primary={true} style={styles.button} />
            </section>
                <Divider />
            <section className="generation-length">
               <h4>GenerationSpan</h4>
              <SliderSection {...OPTIONS.GENERATION_SPAN} val={generationSpan} setSettingVal={setSettingVal} />
              {running? pauseButton : startButton}
            </section>
            <Divider />
            <section className="board-control">
               <h4>Rules</h4>
               <SliderSection {...OPTIONS.BORN_MIN} val={bornMin} setSettingVal={setSettingVal} />
               <SliderSection {...OPTIONS.BORN_MAX} val={bornMax} setSettingVal={setSettingVal}/>
               <SliderSection {...OPTIONS.EXIST_MIN} val={existMin} setSettingVal={setSettingVal} />
               <SliderSection {...OPTIONS.EXIST_MAX} val={existMax} setSettingVal={setSettingVal}/>
            </section>
            <Divider />

            <section>
               <h4>Adult Color</h4>
               <SelectFieldW {...OPTIONS.ADULT_COLOR} setSettingVal={setSettingVal}/>
            </section>
         </div>
      </Drawer>
   )
}



// let ControlPanel = ({rows, columns, lifeSpan, randomRate, running, changeRows, changeColumns, setLifeSpan,
//    bornMin, bornMax, existMin, existMax, adultColor, createNewBoard,
//    changeRandomRate, populateRandomBoard, start,pause, classes}) => {
//       const startButton = (
//          <Button raised color="primary" onClick={start}>Start
//          </Button>
//       )
//       const pauseButton = (
//          <Button raised color="primary" className={classes.button} onClick={pause}>
//             Pause
//          </Button>
//       )
//       return (
//
//
//             <section>
//                {running? pauseButton : startButton}
//             </section>
//             <section >
//                <h3>Born</h3>
//                   <label>Min</label>
//                   <small>Default: {DEFAULT.BORN_MIN}</small>
//                   <TextField
//                      id="number"
//                      value={bornMin}
//                      onChange={(ev)=>changeRandomRate(parseInt(ev.target.value, 10))}
//                      type="number"
//                      className={classes.textField}
//                      InputLabelProps={{
//                        shrink: true,
//                      }}
//                      margin="normal"
//                   />
//                   <label>Max</label>
//                   <small>Default: {DEFAULT.BORN_MAX}</small>
//                   <TextField
//                      id="number"
//                      value={bornMax}
//                      onChange={(ev)=>changeRandomRate(parseInt(ev.target.value, 10))}
//                      type="number"
//                      className={classes.textField}
//                      InputLabelProps={{
//                        shrink: true,
//                      }}
//                      margin="normal"
//                   />
//             </section>
//             <section >
//                <h3>Exist</h3>
//                <label>Min</label>
//                <small>Default: {DEFAULT.EXIST_MIN}</small>
//                <TextField
//                   id="number"
//                   value={existMin}
//                   onChange={(ev)=>changeRandomRate(parseInt(ev.target.value, 10))}
//                   type="number"
//                   className={classes.textField}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   margin="normal"
//                />
//                <label>Max</label>
//                <small>Default: {DEFAULT.EXIST_MAX}</small>
//                <TextField
//                   id="number"
//                   value={existMax}
//                   onChange={(ev)=>changeRandomRate(parseInt(ev.target.value, 10))}
//                   type="number"
//                   className={classes.textField}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   margin="normal"
//                />
//             </section>
//             <section>
//                <TextField
//                   select
//                   label="Select"
//                   className={classes.textField}
//                   value={adultColor}
//                   onChange={ () => {} }
//                   SelectProps={{
//                   MenuProps: {
//                      className: classes.menu,
//                   },
//                   }}
//                   helperText="Please select your currency"
//                   margin="normal"
//                   >
//                   {Object.values(ADULT_COLORS_OPTIONS).map(color => (
//                <MenuItem key={color} value={color}>
//                   {color}
//                </MenuItem>
//                   ))}
//                </TextField>
//             </section>
//
//
//
//          </section>
//       )
// }


export default ControlPanel
