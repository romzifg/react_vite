import PropTypes from "prop-types";

export const PrimaryButton = ({
  title = "Primary",
  onClick = () => {
    console.log("Danger");
  },
  type = "button",
  classname = "",
}) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white px-1 py-2 rounded-md ${classname}`}
      onClick={onClick}
      type={type}
    >
      <p className="text-sm m-0 p-0">{title}</p>
    </button>
  );
};

export const DangerButton = ({
  title = "Danger",
  onClick = () => {
    console.log("Danger");
  },
  type = "button",
  classname = "",
}) => {
  return (
    <button
      className={`bg-red-500 hover:bg-red-700 text-white px-1 py-2 rounded-md ${classname}`}
      onClick={onClick}
      type={type}
    >
      <p className="text-sm m-0 p-0">{title}</p>
    </button>
  );
};

export const LinkButton = ({
  title = "Link",
  onClick = () => {
    console.log("Link");
  },
  type = "button",
  classname = "",
}) => {
  return (
    <button
      className={`bg-gray-100 hover:bg-gray-200 text-black px-1 py-2 rounded-md ${classname}`}
      onClick={onClick}
      type={type}
    >
      <p className="text-sm m-0 p-0">{title}</p>
    </button>
  );
};

export const CustomButton = ({
  title = "Custom",
  onClick = () => {
    console.log("Custom");
  },
  type = "button",
  classname = "bg-gray-100 hover:bg-gray-200 text-black px-1 py-2 rounded-md ",
}) => {
  return (
    <button className={`${classname}`} onClick={onClick} type={type}>
      <p className="text-sm m-0 p-0">{title}</p>
    </button>
  );
};

PrimaryButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  classname: PropTypes.string,
};

DangerButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  classname: PropTypes.string,
};

LinkButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  classname: PropTypes.string,
};

CustomButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  classname: PropTypes.string,
};
