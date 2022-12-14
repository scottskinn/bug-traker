import React, { useState, useEffect } from 'react';
import './AddBug.css'

function AddBug() {
    const [ addBug, setAddBug ] = useState(true);
  
    return (
      <div className="Add-bug">
       <form>
        <label>
            Description:
            <input type='text' />
        </label>
        <label>
            Assign To:
            <select name='myDev' id='myDev'>
                <option value='0'>Select Team Member:</option>
                <option value='1'>Team Member 1</option>
                <option value='2'>Team Member 2</option>
                <option value='3'>Team Member 3</option>
                <option value='4'>Team Member 4</option>
                <option value='5'>Team Member 5</option>
            </select>
        </label>
        <label>
            Priority:
            <select name='priority' id='priority'>
                <option value='0'>Select Priority</option>
                <option value='1'>Low</option>
                <option value='2'>Medium</option>
                <option value='3'>High</option>
                <option value='4'>Danger Zone!</option>
            </select>
        </label>

        <button type='submit'>Add</button>
       </form>
      </div>
    );
  }
  
  export default AddBug;