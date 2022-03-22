import React from 'react';
import s from './Users.module.css'
import usersPhoto from '../../assets/images/users.png';
import { NavLink } from 'react-router-dom';
import { getFollow, getUnfollow } from '../../api/api';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        if (i === 10) break;
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => props.onPageChanged(p)}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'./../profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : usersPhoto} 
                            className={s.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.includes(u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                getUnfollow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                        props.toggleFollowingProgress(false, u.id)
                                    });
                                props.unfollow(u.id)
                            }}> Unfollow </button>
                            : <button disabled={props.followingInProgress.includes(u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                getFollow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                        props.toggleFollowingProgress(false, u.id)
                                    });
                                props.follow(u.id)
                            }}> Follow </button>}

                    </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </div>)
        }
    </div>
}

export default Users;