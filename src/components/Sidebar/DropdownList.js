import React, { useState } from "react";
import SidebarCategories from "./SidebarCategories";

const clickOnDropdown = (event, category, categories, setSelectedVariant, selectedVariant, setDisplayedVariant, displayedVariant) => {
    let checked = event.target.checked;
    let findData = '';

    let findParentCategory = function(data, category) {
        data.find(function(e) {
          if(e.key === category.parent) {
            findData = e;
            return e;
          }
          else if (e.children && e.children.length > 0 && !findData)
             return findParentCategory(e.children, category)
        })
        return findData
    }
    let parentCategory = findParentCategory(categories, category);
    if(checked) {
        setSelectedVariant(() => [
            ...selectedVariant,
            {
                key: category.key,
                parentKey: parentCategory?parentCategory.key: '',
                value: category.label,
                parentName: parentCategory?parentCategory.label:"All"
            },
        ]);

        let insertData = 1;
        if(parentCategory.key !== 0  && parentCategory.key !== '0' &&
            parentCategory.key){
            var matchedIndex2 = displayedVariant.map(function (obj) { return obj.parentKey; }).indexOf(parentCategory.key);
            if(matchedIndex2 !== -1){
              displayedVariant[matchedIndex2] = { 
                key: displayedVariant[matchedIndex2].key,
                parentKey: displayedVariant[matchedIndex2].parentKey, 
                value: displayedVariant[matchedIndex2].value+','+category.label
             }
              setDisplayedVariant(() => [
                ...displayedVariant
              ]);
              insertData = 0;
            }
        }
        if(insertData === 1){
          setDisplayedVariant(() => [
            ...displayedVariant,
            {
                key: category.key,
                parentKey: parentCategory?parentCategory.key: '',
                value: parentCategory?parentCategory.label+" "+category.label:"All "+category.label
            },
          ]);
        }
        
        
    } else {
      var matchedIndex = selectedVariant.map(function (obj) { return obj.key; }).indexOf(category.key);
      selectedVariant.splice(matchedIndex , 1)
      setSelectedVariant(() => [
        ...selectedVariant
      ]);
      var matchedIndex1 = displayedVariant.map(function (obj) { return obj.key; }).indexOf(category.key);
      displayedVariant.splice(matchedIndex1 , 1)
      setDisplayedVariant(() => [
        ...displayedVariant
      ]);
    }
}

const DropdownList = ({ category, categoryList, setSelectedVariant, selectedVariant, setDisplayedVariant, displayedVariant }) => {

    const hasChild = category.children ? true : false;
    return (
      <li className="d-category-node border-0" key={category.key}>
        <div className="d-flex">
          <div className="col">
              <div>
                  <input
                      type="checkbox"
                      className="form-check-input h-auto"
                      id=""
                      onChange={(e) => clickOnDropdown(e, category, categoryList,setSelectedVariant, selectedVariant, setDisplayedVariant, displayedVariant)}
                  />
                  {category.label}
              </div>
            {category.description && <span className="description">{category.description}</span> } 
          </div>
        </div>
  
        {hasChild && (
          <div className="d-category-content">
            <ul className="d-flex d-category-container flex-column">
              <SidebarCategories 
                categories={category.children} 
                categoryList={categoryList} 
                setSelectedVariant={setSelectedVariant}
                selectedVariant={selectedVariant}
                setDisplayedVariant={setDisplayedVariant}
                displayedVariant={displayedVariant} />
            </ul>
          </div>
        )}
      </li>
    );
  };
  
export default DropdownList;