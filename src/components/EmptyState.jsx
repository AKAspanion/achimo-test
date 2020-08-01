import React from "react";

export default function ({ mount, search, message }) {
  function showSearch() {
    return mount || !search;
  }

  function parsedMessage() {
    return message === "Not Found"
      ? "When you are ready, go ahead and search for a user"
      : message;
  }

  return (
    <div className="empty-container">
      <div className="empty__content">
        <div className="empty__img">
          <img src={`images/${showSearch() ? "search" : "error"}.svg`} />
        </div>
        <div className="empty__title">No user found</div>
        <div className="empty__message">
          {showSearch() ? parsedMessage() : message}
        </div>
      </div>
    </div>
  );
}
