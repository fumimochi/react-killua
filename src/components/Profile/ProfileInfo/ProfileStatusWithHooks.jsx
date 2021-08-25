import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

   const activateEditMode = () => {
       setEditMode(true); 
   }
   const deactivateMode = () => {   
       setEditMode(false);
       props.updateStatus(status);
   }
   const onStatusChange = e => {
       setStatus(e.currentTarget.value); 
   }


    return <div>
        { !editMode && 
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>  --- (double click to change status)
            </div>
        }
        { editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true}  onBlur={deactivateMode} value={status} /> (double click to change status)
            </div>
        }  
    </div>
}

export default ProfileStatusWithHooks;