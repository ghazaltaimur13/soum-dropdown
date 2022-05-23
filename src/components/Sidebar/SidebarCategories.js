import React, { useState } from "react";
import DropdownList from './DropdownList'

const SidebarCategories = ({ categories  = [],categoryList = [] , 
  setSelectedVariant, selectedVariant, setDisplayedVariant, displayedVariant}) => {
  return (
    <div className="d-category">
      <ul className="d-flex d-category-container flex-column">
        {categories.map((category) => (
          <DropdownList category={category} 
            categoryList={categoryList}
            setSelectedVariant={setSelectedVariant}
            selectedVariant={selectedVariant} 
            setDisplayedVariant={setDisplayedVariant}
            displayedVariant={displayedVariant} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarCategories;