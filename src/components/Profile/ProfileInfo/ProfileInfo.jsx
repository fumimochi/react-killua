import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import workNo from '../../../assets/images/workNo.png';
import workYes from '../../../assets/images/workYes.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }

    return (
      <div>
        {/* <div>
          <img 
          src='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'></img>
        </div>  */}
        <div className={s.descriptionBlock}>
          <div>{props.profile.fullName}</div>
          <img src={props.profile.photos.large}/>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
          <div>
            Social medias
            <li>{props.profile.contacts.facebook}</li>
            <li>{props.profile.contacts.github}</li>
            <li>{props.profile.contacts.instagram}</li>
            <li>{props.profile.contacts.twitter}</li>
          </div>
          <div>
            <img src={props.profile.lookingForAJob ? workYes : workNo} className={s.lookForJob}/>
          </div>
        </div>
      </div>
    )
}

export default ProfileInfo;