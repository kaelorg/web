import React, { HTMLAttributes } from 'react';

import mergeClassNames from '@utils/mergeClassNames';

const Divider = ({
  className,
  margin = '5px',
  height = '1px',
  opacity = '0.05',
  background = '#fff',
  ...rest
}: Props) => (
  <div {...rest} className={mergeClassNames('divider', 'w-full', className)}>
    <style jsx>
      {`
        .divider {
          height: ${height};
          margin: ${margin} 0;

          opacity: ${opacity};
          background: ${background};
        }
      `}
    </style>
  </div>
);

Divider.defaultProps = {
  margin: '5px',
  height: '1px',
  opacity: '0.05',
  background: '#fff',
};

interface Props extends HTMLAttributes<HTMLElement> {
  margin?: string;
  height?: string;
  opacity?: string;
  background?: string;
}

export default Divider;
