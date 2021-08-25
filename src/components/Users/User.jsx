import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.png';
import s from './users.module.css';

let User = ({user, followingInProgress, unfollow, follow}) => {
    let u = user;

    return (
           <div className={s.users}>
                <span>
                    <div className={s.photoAndStatusName}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                    <span className={s.nameStatus}>
                        <div className={s.userName}>{u.name}</div>
                        <div>{u.status}</div>
                        <div className={s.prompt}>Click user photo to redirect profile</div>
                    </span>
                    </div>
                    <div>
                        { u.followed 
                        ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => { 
                            unfollow(u.id);
                         } }>Unfollow</button> 
                        : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => { 
                            follow(u.id);
                         } }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'======================='}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>
    )
}

export default User;