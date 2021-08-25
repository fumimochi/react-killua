import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  if(!props.profile) {
    return <Preloader />
  }


  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
        props.savePhoto(e.target.files[0]);
    };
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then( 
      () => {
      setEditMode(false);
    })
    };

    return (
      <div>
        <div className={s.descriptionBlock}>
              <div className={s.photoNameStat}>
                <span className={s.ava}>
                  <img src={props.profile.photos.large || userPhoto} className={s.profilePhoto}/>
                </span>
                <span className={s.name}>
                  {props.profile.fullName}
                  </span>
                <span className={s.status}>
                  <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/> 
                </span>
                <div className={s.photoChange}> 
                  { props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
                </div>
              </div>
          

          { editMode 
          ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> 
          : <ProfileData  profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {setEditMode(true)}} /> }

        </div>
      </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return  (
          <div className={s.container}>
            <div className={s.button}>
              { isOwner && <div><button className={s.infoChange} onClick={goToEditMode}>edit profile info</button></div>}
            </div>
            <div>
              <div>
                <b>Full name</b>: {profile.fullName}
              </div>
              <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
              </div>
              { profile.lookingForAJob && 
              <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
              </div>
              }
              <div>
                <b>About me</b>: {profile.aboutMe}
              </div>
              <div>
                <b>Contacts</b>: { Object.keys(profile.contacts).map(key => {
                  return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                }) }
              </div>
            </div>
          </div>
  )
}

const Contact = ({contactTitle, contactValue}) => {
    return  <div>
      <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo;