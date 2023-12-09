import React, { useState, useRef, useEffect } from "react";
import "../styles/Dropdown.css";
import { ArrowIcon, SettingsIcon } from "./Icons";

const Dropdown = ({
  setGroupingOption,
  setSortOption,
  groupingOption,
  sortOption,
  onChange,
}) => {
  const groupingOptions = ["status", "user", "priority"];
  const sortOptions = ["priority", "title"];

  const [isInnerDropdownOpen, setIsInnerDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleGroupingChange = (event) => {
    setGroupingOption(event.target.value);
    onChange(event.target.value, sortOption);
    closeInnerDropdown();
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    onChange(groupingOption, event.target.value);
    closeInnerDropdown();
  };

  const toggleInnerDropdown = () => {
    setIsInnerDropdownOpen(!isInnerDropdownOpen);
  };

  const closeInnerDropdown = () => {
    setIsInnerDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeInnerDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <span className="btn" onClick={toggleInnerDropdown}>
        {" "}
        <SettingsIcon /> Display <ArrowIcon />
      </span>

      {isInnerDropdownOpen && (
        <div className="dropdown_inner">
          <div className="inputs">
            <label htmlFor="groupingOption">Group By: </label>
            <select
              id="groupingOption"
              onChange={handleGroupingChange}
              value={groupingOption}
            >
              {groupingOptions.map((option) => (
                <option key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="inputs">
            <label htmlFor="sortOption">Sort By: </label>
            <select
              id="sortOption"
              onChange={handleSortChange}
              value={sortOption}
            >
              <option value="">None</option>
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
