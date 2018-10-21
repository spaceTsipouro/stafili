import React from 'react';

export class Modal extends React.Component {

  constructor() {
    super();
  }

  __running() {
    return (
      <a className="button is-link is-loading">Loading</a>
    );
  }

  render() {
    const modal_content = this.__running();
    return(
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
          {modal_content}
        </div>
      </div>
    );
  }
}
