import React, { useEffect, useState, useCallback, useRef } from 'react';
import { FiX, FiArrowLeft, FiArrowRight, FiLogOut } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { actions } from '@app/store/modules/auth';
import { createUrl, reduceString } from '@app/utils';

import {
  Container,
  UserContainer,
  UserLoader,
  BrandsContainer,
  BackButton,
  LoginButton,
  Dropdown,
  DropdownBrands,
  DropdownItems,
  DropdownLink,
  GlobalStyle,
} from './styles';

const HeaderComponent = () => {
  const dropdownRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const {
    auth: { signed },
    user: { profile },
  } = useSelector(state => state);

  const { pathname } = history.location;

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  useEffect(() => {
    function listener({ path }) {
      const { current: dropdownElement } = dropdownRef;

      if (!path.some(element => element === dropdownElement) && open) {
        setOpen(false);
      }
    }

    window.addEventListener('click', listener, false);
    return () => window.removeEventListener('click', listener);
  }, [open]);

  return (
    <Container>
      <BrandsContainer>
        <Link to="/">
          <img src="/static/logo_square.png" alt="Logo" />
          <span>Kael</span>
        </Link>
      </BrandsContainer>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        {pathname !== '/' && (
          <BackButton type="button" onClick={() => history.goBack()}>
            <FiArrowLeft color="#fff" size="2rem" /> Voltar
          </BackButton>
        )}

        {signed ? (
          profile.avatar ? (
            <UserContainer onClick={handleClick}>
              <img src={profile.avatar} alt="User Logo" />
              <span>{profile.username}</span>
            </UserContainer>
          ) : (
            <UserLoader />
          )
        ) : (
          <LoginButton
            href={createUrl(process.env.REACT_APP_API_URL, 'auth/redirect')}
          >
            Login <FiArrowRight color="#fff" size="2rem" />
          </LoginButton>
        )}
      </div>

      {signed && (
        <Dropdown open={open}>
          <section ref={dropdownRef}>
            <span className="close">
              <button type="button" onClick={handleClick}>
                <FiX size="2rem" />
              </button>
            </span>

            {profile && (
              <DropdownBrands>
                <img src={profile.avatar} alt="User Logo" />
                <span>
                  <strong>
                    {reduceString(profile.username || '', 10)}#
                    {profile.discriminator}
                  </strong>
                </span>
              </DropdownBrands>
            )}

            <DropdownItems>
              <DropdownLink
                to="/guilds"
                onClick={handleClick}
                active={/\/guilds\/?$/.test(pathname)}
              >
                Servidores
              </DropdownLink>
              <DropdownLink
                to="/profile"
                onClick={handleClick}
                active={/\/profile\/?$/.test(pathname)}
              >
                Meu Perfil
              </DropdownLink>
              <DropdownLink
                to="/profile/extract"
                onClick={handleClick}
                active={/\/profile\/extract/.test(pathname)}
              >
                Extrato
              </DropdownLink>

              <div />

              <button type="button" onClick={() => dispatch(actions.logOut())}>
                Sair <FiLogOut color="#fff" size="2.5rem" />
              </button>
            </DropdownItems>

            {open && <GlobalStyle />}
          </section>
        </Dropdown>
      )}
    </Container>
  );
};

export default HeaderComponent;
