import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import './button.css';

const getSizeClasses = (size) => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5';
    }
    case 'large': {
      return 'px-6 py-3';
    }
    default: {
      return 'px-5 py-2.5';
    }
  }
};

const getModeClasses = (isPrimary) =>
  isPrimary
    ? 'text-black bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700'
    : 'text-slate-700 bg-transparent border-slate-700 dark:text-white dark:border-white';

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-full border-2 font-bold leading-none inline-block';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);
    return [modeClass, sizeClass].join(' ');
  }, [primary, size]);

  return (
    <button type="button" className={`${BASE_BUTTON_CLASSES} ${computedClasses}`} {...props}>
      {label}
    </button>
    // <button
    //   type="button"
    //   className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
    //   {...props}
    // >
    //   {label}
    //   <style jsx>{`
    //     button {
    //       background-color: ${backgroundColor};
    //     }
    //   `}</style>
    // </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
