import React from "react";

export default function ({
  user: { name, blog, login, email, avatar_url, followers, following } = {},
}) {
  return (
    <div data-testid="user" className="user-container">
      <div className="user__avatar">
        <img alt={name} src={avatar_url} />
      </div>
      {name && <div className="user__name">{name}</div>}
      {login && <div className="user__handle">{login}</div>}
      {email && <div className="user__email">{email}</div>}
      {followers || following ? (
        <div className="user__follows">
          {followers && (
            <span>
              <strong>{followers} </strong> Followers
            </span>
          )}
          <span className="divider"> | </span>
          {following && (
            <span>
              <strong>{following} </strong> Following
            </span>
          )}
        </div>
      ) : null}
      {blog && (
        <a className="user__blog" href={blog}>
          {blog}
        </a>
      )}
    </div>
  );
}
