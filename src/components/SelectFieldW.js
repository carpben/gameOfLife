import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const style = {
   width: "100%"
}

const SelectFieldW = ({setSettingVal, colors, name}) => {
   console.log("colors")
   console.log(colors)
   return (
      <SelectField
           value={"white"}
           onChange={(ev, newVal)=> {
                 setSettingVal(name, colors[newVal])
              }
           }
           style={style}
      >
         {
            colors.map( color => {

               return <MenuItem value={color} primaryText={color} />
            })
         }
      </SelectField>
   )
}

export default SelectFieldW
