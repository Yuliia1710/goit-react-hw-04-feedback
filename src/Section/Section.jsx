import React from 'react';
import PropTypes from 'prop-types';
import { SectionWraper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWraper>
      <h2>{title}</h2>
      {children}
    </SectionWraper>
  );
};

// export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
