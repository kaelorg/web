import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Header from '@app/components/Header';
import Layout from '@app/components/Layout';
import Loader from '@app/components/Loader';

import { actions } from '@app/store/modules/user';

const LoggedLayout = ({ loading, children }) => {
  const dispatch = useDispatch();
  const { profile, lastHydration } = useSelector(state => state.user);

  useEffect(() => {
    if (!profile || Date.now() - lastHydration > 600000) {
      dispatch(actions.refreshUser());
    }
  }, [dispatch, profile, lastHydration]);

  return (
    <Layout private>
      <Container>
        <Header />

        {loading ? <Loader /> : <Main>{children}</Main>}
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  padding-bottom: 30px;
`;

LoggedLayout.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

LoggedLayout.defaultProps = {
  loading: false,
};

export default LoggedLayout;
