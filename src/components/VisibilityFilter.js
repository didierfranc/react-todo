import React from "react";
import { actions } from "../store";

const { setVisibilityFilter } = actions;

const VisibilityFilter = ({ visibilityFilter }) => (
  <div>
    {["all", "active", "completed"].map(filter => (
      <button
        key={filter}
        onClick={() => setVisibilityFilter(filter)}
        style={{
          fontWeight: visibilityFilter === filter ? 600 : 400
        }}
      >
        {filter}
      </button>
    ))}
  </div>
);

export default VisibilityFilter;
