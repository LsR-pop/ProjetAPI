import "./filter.css";
import { Collapse, Checkbox } from "antd";

function Filter() {
  const { Panel } = Collapse;
  const accordionStyle = {
    border: "none",
    boxShadow: "none",
  };
  const customPanelStyle = {
    border: 0,
    boxShadow: "none",
  };
  const checkboxStyle = {
    color: "#354ACE",
    marginBottom: "8px",
  };

  return (
    <div className="ml-5 xl:w-[200px] sm:w-[100px] md:w-[150px]">
      <Collapse accordion expandIconPosition="right" style={accordionStyle}>
        <Panel
          style={customPanelStyle}
          header="Mot clés"
          key="1"
          className="text-xl text-textColor font-medium"
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Checkbox
              style={checkboxStyle}
              className="font-regular font-medium text-base custom-checkbox"
            >
              <span className="custom-checkmark"></span>
              Option 1
            </Checkbox>
            <Checkbox
              style={checkboxStyle}
              className="font-regular font-medium text-base custom-checkbox"
            >
              <span className="custom-checkmark"></span>
              Option 2
            </Checkbox>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}

export default Filter;
