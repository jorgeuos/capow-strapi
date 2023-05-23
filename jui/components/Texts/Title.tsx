import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const getSizeClasses = (size) => {
  switch (size) {
    case 'small': {
      return 'text-3xl md:text-4xl';
    }
    case 'large': {
      return 'text-6xl md:text-8xl';
    }
    default: {
      return 'text-5xl md:text-6xl';
    }
  }
};

const getModeClasses = (isPrimary) =>
  isPrimary
    ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2'
    : '';

const BASE_TITLE_CLASSES =
  'font-extrabold leading-tighter mb-8';

/**
 * Primary UI component for user interactions
 */
const Title = ({ text, primary=null, size=null, ...props }) => {

    const computedClasses = useMemo(() => {
        return getSizeClasses(size);
    }, [size]);
    const spanClasses = useMemo(() => {
        return getModeClasses(primary);
    }, [primary]);

    return (
        <h1 className={`${BASE_TITLE_CLASSES} ${computedClasses}`} {...props}>
            <span className={`${spanClasses}`}>{text}</span>
        </h1>
    );
};

Title.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Title contents
   */
  text: PropTypes.string.isRequired,
};

Title.defaultProps = {
    primary: true,
    size: 'medium',
    text: 'Example text',
};

export default Title;
