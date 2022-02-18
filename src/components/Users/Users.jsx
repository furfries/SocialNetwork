import s from './Users.module.css'

let Users = (props) => {    
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: 'https://cdn-icons-png.flaticon.com/512/147/147140.png', 
            followed: true, fullName:'Max V', status:'First!', location: {city: 'Grodno', country: 'Belarus',} },
            {id: 2, photoUrl: 'https://cdn-icons-png.flaticon.com/512/147/147140.png', 
            followed: false, fullName:'Alex L', status:'Second!', location: {city: 'Grodno', country: 'Belarus',} },
            {id: 3, photoUrl: 'https://cdn-icons-png.flaticon.com/512/147/147140.png', 
            followed: false, fullName:'Milana S', status:'Third!', location: {city: 'Grodno', country: 'Belarus',} },
            {id: 4, photoUrl: 'https://cdn-icons-png.flaticon.com/512/147/147140.png', 
            followed: false, fullName:'Xander L', status:'I am here too...', location: {city: 'Grodno', country: 'Belarus',} },
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}> 
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>
                        <button onClick={() => props.toggleFollow(u.id)}> 
                            {u.followed ? 'Unfollow' : 'Follow'}
                        </button>
                        
                    </div>
                </span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </div>)
        }
    </div>
}

export default Users;