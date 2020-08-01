import React, { useState } from "react";

import {
  EmptyState,
  SearchField,
  UserDetails,
  LoadingState,
} from "../components/";
import { useDebounce, useGithubUserFetch } from "../hooks/";

export default function () {
  const [name, setName] = useState("");
  const debouncedName = useDebounce(name, 500);

  const [user, error, loading, mounted] = useGithubUserFetch(debouncedName);

  function getUserDetails() {
    return (
      <div>
        {error && (
          <EmptyState
            search={debouncedName}
            message="To widen your search, change or remove filters"
          />
        )}
        {user && <UserDetails user={user} />}
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="home-content">
        <SearchField
          placeholder="Search for github users.."
          onChange={(e) => setName(e.target.value)}
        />
        <hr />
        {mounted ? (
          loading ? (
            <LoadingState />
          ) : (
            getUserDetails()
          )
        ) : (
          <EmptyState mount search={debouncedName} />
        )}
      </div>
    </div>
  );
}
