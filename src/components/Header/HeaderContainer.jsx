import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer'
import { getAuth } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        getAuth().then(data => {
            if (data.resultCode === 0) {
                let { login, email, id } = data.data;
                this.props.setAuthUserData(login, email, id);
            }
        });
    }
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);