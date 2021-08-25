import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css';


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return(  
      <div className={s.container}>
          <form onSubmit={ handleSubmit } >
          <div className={s.saveButton}><button className={s.infoChange}>save</button></div>
          <div>
            {error && <div className={s.formSummaryError}>{error}</div>}
              <div>
                <b>Full name</b>: {createField('Full name', 'fullName', [], Input)}
              </div>
              <div>
                <b>Looking for a job</b>: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'} )}
              </div>
              <div>
                <b>My professional skills</b>: 
                {createField('My professional skills', 'lookingForAJobDescription', [], Textarea )}
              </div>
              <div>
                <b>About me</b>: {createField('About me', 'aboutMe', [], Textarea )}
              </div>
              <div>
                <b>Contacts</b>: { Object.keys(profile.contacts).map(key => {
                  return <div key={key} className={s.contact}>
                    <b>{key}:</b>{createField(key, 'contacts.' + key, [], Input)}
                </div>
                }) }
              </div>
          </div>
        </form>
      </div>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;