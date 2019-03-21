import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
        <h1 className="box-layout__title">Expenster</h1>
        <p>Track your expenses and eliminate them</p>
        <button className="button login" onClick={startLogin}>
            <span className="gcon"></span>
            <span className="button-text">Login with Google</span>
        </button>
        </div>        
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);