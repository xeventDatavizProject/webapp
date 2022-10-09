import { FC, SVGProps } from "react";

const Close: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    height={26}
    width={26}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 26 26"
    {...props}
  >
    <rect width={26} height={26} rx="13" fill="#A51973" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.6569 8.75744L17.2426 7.34323L13 11.5859L8.75736 7.34323L7.34315 8.75744L11.5858 13.0001L7.34315 17.2427L8.75736 18.6569L13 14.4143L17.2426 18.6569L18.6569 17.2427L14.4142 13.0001L18.6569 8.75744Z"
      fill="#EBF5FF"
    />
  </svg>
);

export default Close;
