import { Link } from "react-router-dom";

const ArrowRight = ({ to, color, className }) => {
  return (
    <Link to={to}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition duration-500 hover:bg-gray-200 rounded-full ${className}`}
      >
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="19"
          stroke={color}
          strokeWidth="2"
        />
        <path
          d="M28.717 18.94C28.9979 19.2213 29.1557 19.6025 29.1557 20C29.1557 20.3975 28.9979 20.7788 28.717 21.06L23.061 26.718C22.9217 26.8573 22.7563 26.9679 22.5742 27.0433C22.3922 27.1187 22.197 27.1575 22 27.1575C21.803 27.1575 21.6078 27.1187 21.4258 27.0433C21.2437 26.9679 21.0783 26.8573 20.939 26.718C20.7997 26.5787 20.6891 26.4133 20.6137 26.2312C20.5383 26.0492 20.4995 25.8541 20.4995 25.657C20.4995 25.46 20.5383 25.2648 20.6137 25.0828C20.6891 24.9008 20.7997 24.7353 20.939 24.596L24.035 21.5H12.5C12.1022 21.5 11.7206 21.342 11.4393 21.0607C11.158 20.7794 11 20.3978 11 20C11 19.6022 11.158 19.2207 11.4393 18.9394C11.7206 18.658 12.1022 18.5 12.5 18.5H24.035L20.939 15.404C20.6577 15.1226 20.4998 14.741 20.4999 14.3432C20.5 13.9453 20.6581 13.5638 20.9395 13.2825C21.2209 13.0012 21.6025 12.8433 22.0004 12.8434C22.3982 12.8435 22.7797 13.0016 23.061 13.283L28.717 18.94Z"
          fill={color}
        />
      </svg>
    </Link>
  );
};

export default ArrowRight;