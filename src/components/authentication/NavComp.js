import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { LoginComp } from './LoginComp';
import { RegisterComp } from './RegisterComp';

export const NavComp = () => {
  const { currentUser, logout } = useContext(AuthContext);

  let admin = currentUser ? true : false;

  return (
    <nav className="container-fluid bg-danger">
      <div className="container-fluid">
       
        <div className="d-flex">
          <div className={admin ? 'col-9 navbar-brand text-white' : 'm-5 text-white fs-1'}>
              TALLER TAXIS C-10
          </div> 
            {currentUser ? (
              <>
                <div onClick={() => logout()} 
                className={admin ? 'm-2 text-center col-3 text-white' : 'border'}>
                  SALIR
                </div>
              </>
            ) : (
              <div className="border col-8 mb-5 mt-5" style={{backgroundColor:'rgb(244,234,234)'}} >
                <LoginComp />
                <RegisterComp />
              </div>
            )}
        </div>
      </div>
    </nav>
  );
};
