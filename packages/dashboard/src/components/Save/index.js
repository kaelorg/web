import PropTypes from 'prop-types';
import React from 'react';

import { Container, SaveButton, ResetButton, LoadingContainer } from './styles';

const SaveComponent = ({ open, inFetch, submit, reset }) => (
  <Container open={open}>
    <section>
      <p>You have unsaved changes!</p>

      <div>
        <ResetButton type="button" onClick={reset}>
          Reset
        </ResetButton>

        <SaveButton type="button" onClick={submit} loading={inFetch}>
          <span>Save Changes</span>

          <LoadingContainer>
            <span />
            <span />
          </LoadingContainer>
        </SaveButton>
      </div>
    </section>
  </Container>
);

SaveComponent.propTypes = {
  open: PropTypes.bool,
  inFetch: PropTypes.bool,
  reset: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

SaveComponent.defaultProps = {
  open: false,
  inFetch: false,
};

export default SaveComponent;
