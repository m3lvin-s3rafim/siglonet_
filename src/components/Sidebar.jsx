import GroupSvg from "../assets/svg/Group.svg";

const Sidebar = () => {
  return (
    <div className="sidelist">
      <div className="search">
        <input type="search" name="" id="" placeholder="Search" />

        <button className="sidelist-btn">
          <img src={GroupSvg} sizes={10} />
        </button>
      </div>

      <div className="items">
        <div className="items-row">
          <span className="items-date">DD/MM/YYYY</span>
          <span className="items-value">Value</span>
        </div>

        <div className="items-row">
          <span className="items-status">Status</span>
          <span className="items-quantity">Quantity</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
