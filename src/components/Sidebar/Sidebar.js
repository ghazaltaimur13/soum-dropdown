   
import React, { useState, useEffect } from "react";
import SidebarCategories from "./SidebarCategories";
import { Col, Row } from "react-bootstrap";

const categoriesData = [
  {
    key: "0",
    label: "Mobile Phones",
    description: "",
    parent: "",
    children: [
      {
        key: "0-0",
        label: "Apple",
        description: "",
        parent: "0",
        children: [
          {
            key: "0-0-1",
            label: "IPhone 6",
            description: "",
            parent: "0-0",
            children: [
                {
                    key: "0-0-1-1",
                    label: "128 GB",
                    description: "200+ devices",
                    parent: "0-0-1",
                  },
                  {
                    key: "0-0-1-2",
                    label: "256 GB",
                    description: "100+ devices",
                    parent: "0-0-1",
                  },
                  {
                    key: "0-0-1-3",
                    label: "512 GB",
                    description: "50+ devices",
                    parent: "0-0-1",
                  },
            ]
          },
          {
            key: "0-0-2",
            label: "IPhone 7",
            description: "200+ devices",
            parent: "0-0",
            children: []
          },
          
        ],
      },
      {
        key: "0-1",
        label: "Samsung",
        description: "500+ Galaxy S21 and 2.5k other devices",
        parent: "0",
        children: []
      }
    ],
  },
  {
    key: "1",
    label: "Computers",
    description: "200+ mac books, 500+ PCs",
    parent: "",
    children: [],
  },
  {
    key: "2",
    label: "Watches",
    description: "150+ apple watches, 200+ samsung watches",
    parent: "",
    children: [],
  },
  {
    key: "3",
    label: "TVs",
    description: "20+ Samsung Tv, 50+ Apple Tv",
    parent: "",
    children: [],
  },
];

const Sidebar = () => {
  const [selectedVariant, setSelectedVariant] = useState([]);
  const [displayedVariant, setDisplayedVariant] = useState([]);
  
  return (
      <Row>
        <Col className="text-center">
            <Row className="mt-3 d-flex">
              <Col xs={6} sm={6} md={3} lg={3} className="text-left categories">
                <SidebarCategories 
                    categories={categoriesData} 
                    categoryList={categoriesData}
                    setSelectedVariant={setSelectedVariant}
                    selectedVariant={selectedVariant}
                    setDisplayedVariant={setDisplayedVariant}
                    displayedVariant={displayedVariant} />
              </Col>
            </Row>
            { displayedVariant.length > 0 && 
            <Row className="mt-3 d-flex">
              <Col xs={12} sm={12} md={12} lg={12} className="text-left">
                <h3>Selected Variant</h3>
                <div className="d-flex">
                  { 
                    displayedVariant?.map((element) => {
                      return <div className="variant"> 
                        { element.value }
                      </div>
                    })
                  }
                </div>
              </Col>
            </Row>
            }
        </Col>
      </Row>
  );
};

export default Sidebar;