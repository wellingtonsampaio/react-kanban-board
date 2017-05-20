/**
*
* TextInput
*
*/

import React from 'react';

import styles from './styles.css';
import classNames from 'classnames';

class TextInput extends React.Component { // eslint-disable-line react/prefer-stateless-function
  value() {
    return this.field.value;
  }

  clear() {
    this.field.value = '';
  }

  render() {
    const { errorText, onKeyUp } = this.props;
    const fieldError = errorText ? (
      <div
        className={styles.errorMessage}
      >
        {errorText}
      </div>
    ) : null;

    return (
      <div>
        <input
          className={classNames(styles.input, this.props.className, { [styles.inputError]: errorText })}
          placeholder={this.props.placeholder}
          ref={(f) => { this.field = f; }}
          type="text"
          onKeyUp={e => onKeyUp(e)}
        />
        {fieldError}
      </div>
    );
  }
}

TextInput.propTypes = {
  errorText: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  className: React.PropTypes.string,
  onKeyUp: React.PropTypes.func,
};

export default TextInput;
