import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios';
import usersPhoto from '../../assets/images/users.png';

class Users extends React.Component {  
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{   
            this.props.setUsers(response.data.items)
        });
    }
    render() {
        return <div>
        {
        this.props.users.map(u => <div key={u.id}> 
            <span>
                <div>
                    <img src={u.photos.small !=null ? u.photos.small : usersPhoto} className={s.userPhoto}/>
                </div>
                <div>
                    <button onClick={() => this.props.toggleFollow(u.id)}> 
                        {u.followed ? 'Unfollow' : 'Follow'}
                    </button>
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
}

export default Users;