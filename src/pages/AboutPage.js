import React from 'react';
//destructuring the data like this is the same as doing this:
const AboutPage = props => {
  // destructuring the data like this is the same as doing this:
  const { name, lastName } = props;

  return (
    <div>
      {name} {lastName}
    </div>
  );
};

export default AboutPage;
