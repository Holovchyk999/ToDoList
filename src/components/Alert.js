import React from "react";

export const Alert = ({ alert }) => {
    
    if (!alert) {
        return null
    }
    return (
      <div class={`alert alert-${alert.type || 'warning'} alert-dismissible`} role="alert">
        <strong>Внимание</strong>
        {alert.text}
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
        ><span aria-hidden="true">&times;</span></button>
      </div>
    );
}