import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { Container, Content } from './styles';

const QuestionComponent = ({ title, description, children, ...rest }) => {
  const [answerOpen, setAnswerOpen] = useState(false);

  return (
    <Container
      open={answerOpen}
      onClick={() => setAnswerOpen(!answerOpen)}
      {...rest}
    >
      <header>
        <h4>{title}</h4>
        <FiChevronDown size="2rem" />
      </header>

      <Content open={answerOpen}>
        {description && <p>{description}</p>}
        {children}
      </Content>
    </Container>
  );
};

QuestionComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

QuestionComponent.defaultProps = {
  description: '',
};

export default QuestionComponent;
