import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const LayoutComponent = ({ private: privateRoute, children }) => {
  const history = useHistory();
  const { signed } = useSelector(state => state.auth);

  if (!signed && privateRoute) {
    history.push('/');
    return <></>;
  }

  if (signed && !privateRoute) {
    history.push('/profile');
    return <></>;
  }

  return <>{children}</>;
};

LayoutComponent.propTypes = {
  private: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

LayoutComponent.defaultProps = {
  private: false,
};

export default LayoutComponent;
