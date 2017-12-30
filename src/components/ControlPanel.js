import React from 'react'
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import '../Styles/ControlPanel.css'
import Button from 'material-ui/Button';
import {DEFAULT, ADULT_COLORS_OPTIONS} from '../CONSTS'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 50,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
    display: 'block'
   }
});

let ControlPanel = ({rows, columns, lifeSpan, randomRate, running, changeRows, changeColumns, setLifeSpan,
   bornMin, bornMax, existMin, existMax, adultColor, createNewBoard,
   changeRandomRate, populateRandomBoard, start,pause, classes}) => {
      const startButton = (
         <Button raised color="primary" className={classes.button} onClick={start}>
            Start
         </Button>
      )
      const pauseButton = (
         <Button raised color="primary" className={classes.button} onClick={pause}>
            Pause
         </Button>
      )
      return (
         <section className="ControlPanel">
            <section className="board-control">
               <h3>Board</h3>
               <section className="rows">
                  <label>Rows</label>
                  <small>Default: {DEFAULT.ROWS}</small>
                  <TextField
                     id="number"
                     value={rows}
                     onChange={(ev)=>changeRows(parseInt(ev.target.value, 10))}
                     type="number"
                     className={classes.textField}
                     InputLabelProps={{
                       shrink: true,
                     }}
                     margin="normal"
                  />
               </section>
               <section className="columns">
                  <label>Columns</label>
                  <small>Default: {DEFAULT.COLUMNS}</small>
                  <TextField
                     id="number"
                     value={columns}
                     onChange={(ev)=>changeColumns(parseInt(ev.target.value, 10))}
                     type="number"
                     className={classes.textField}
                     InputLabelProps={{
                       shrink: true,
                     }}
                     margin="normal"
                  />
               </section>
               <Button raised color="primary" className={classes.button} onClick={createNewBoard}>
                  Create Board
               </Button>
            </section>
            <section className="init-state">
               <h3>Init State</h3>
                  <label>Random Rate</label>
                  <small>Default: {DEFAULT.RANDOM_RATE}%</small>
                  <TextField
                     id="number"
                     value={randomRate}
                     onChange={(ev)=>changeRandomRate(parseInt(ev.target.value, 10))}
                     type="number"
                     className={classes.textField}
                     InputLabelProps={{
                       shrink: true,
                     }}
                     margin="normal"
                  />
                  <Button raised color="primary" className={classes.button} onClick={populateRandomBoard}>
                     Populate Random
                  </Button>

            </section>
            <section className="generation-length">
               <h3>GenerationSpan</h3>
                  <small>Default: {DEFAULT.LIFESPAN_MS}ms</small>
                  <TextField
                     id="number"
                     value={lifeSpan}
                     onChange={ ev => setLifeSpan(parseInt(ev.target.value, 10)) }
                     type="number"
                     className={classes.textField}
                     InputLabelProps={{
                       shrink: true,
                     }}
                     margin="normal"
                  />

            </section>
            <section>
               {running? pauseButton : startButton}
            </section>
            <section >
               <h3>Born</h3>
                  <label>Min</label>
                  <small>Default: {DEFAULT.BORN_MIN}</small>
                  <TextField
                     id="number"
                     value={bornMin}
                     onChange={(ev)=>changeRandomRate(parseInt(ev.target.value, 10))}
                     type="number"
                     className={classes.textField}
                     InputLabelProps={{
                       shrink: true,
                     }}
                     margin="normal"
                  />
                  <label>Max</label>
                  <small>Default: {DEFAULT.BORN_MAX}</small>
                  <TextField
                     id="number"
                     value={bornMax}
                     onChange={(ev)=>changeRandomRate(parseInt(ev.target.value, 10))}
                     type="number"
                     className={classes.textField}
                     InputLabelProps={{
                       shrink: true,
                     }}
                     margin="normal"
                  />
            </section>
            <section >
               <h3>Exist</h3>
                  <label>Min</label>
                  <small>Default: {DEFAULT.EXIST_MIN}</small>
                  <TextField
                     id="number"
                     value={existMin}
                     onChange={(ev)=>changeRandomRate(parseInt(ev.target.value, 10))}
                     type="number"
                     className={classes.textField}
                     InputLabelProps={{
                       shrink: true,
                     }}
                     margin="normal"
                  />
                  <label>Max</label>
                  <small>Default: {DEFAULT.EXIST_MAX}</small>
                  <TextField
                     id="number"
                     value={existMax}
                     onChange={(ev)=>changeRandomRate(parseInt(ev.target.value, 10))}
                     type="number"
                     className={classes.textField}
                     InputLabelProps={{
                       shrink: true,
                     }}
                     margin="normal"
                  />
            </section>
            <section>
               <TextField
                  select
                  label="Select"
                  className={classes.textField}
                  value={adultColor}
                  onChange={ () => {} }
                  SelectProps={{
                  MenuProps: {
                     className: classes.menu,
                  },
                  }}
                  helperText="Please select your currency"
                  margin="normal"
                  >
                  {Object.values(ADULT_COLORS_OPTIONS).map(color => (
                  <MenuItem key={color} value={color}>
                     {color}
                  </MenuItem>
                  ))}
               </TextField>
            </section>



         </section>
      )
}

ControlPanel = withStyles(styles)(ControlPanel)

export default ControlPanel
