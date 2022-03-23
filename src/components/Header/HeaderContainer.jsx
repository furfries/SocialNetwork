import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, getAuth } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth()
    }
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, { setAuthUserData, getAuth })(HeaderContainer);