import React from "react";
import "./Avatar.css";

const Avatar = () => {
  return (
    <div class="avatar">
      <div class="avatar-icon avatar3">
        <svg
          width="150"
          height="150"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ background: "#86A546" }}
        >
          <g id="Page-1" fill="none" fill-rule="evenodd">
            <g id="Never-Users-Own-avatar" fill="#FCFDFF">
              <g id="avatar3" transform="translate(31 50)">
                <circle id="left-eye" cx="12" cy="12" r="12" />
                <circle id="right-eye" cx="123" cy="12" r="12" />
                <path
                  d="M89.5 66.67c13.55 0 27.1-5.93 40.66-17.78 1.3-.53 2.58-.2 3.87 1 1.3 1.17 1.3 2.7 0 4.54C119.5 67.48 104.67 74 89.5 74c-15.17 0-30-6.52-44.53-19.56-1.3-1.85-1.3-3.37 0-4.55 1.3-1.2 2.58-1.53 3.87-1C62.4 60.73 75.94 66.66 89.5 66.66z"
                  id="smile"
                >
                  <animate
                    id="frown"
                    attributeName="d"
                    begin="4.5s;frown.end+9s"
                    dur="1s"
                    from="M89.5 66.67c13.55 0 27.1-5.93 40.66-17.78 1.3-.53 2.58-.2 3.87 1 1.3 1.17 1.3 2.7 0 4.54C119.5 67.48 104.67 74 89.5 74c-15.17 0-30-6.52-44.53-19.56-1.3-1.85-1.3-3.37 0-4.55 1.3-1.2 2.58-1.53 3.87-1C62.4 60.73 75.94 66.66 89.5 66.66z"
                    to="M89.5 56.67c13.55 0 27.1 4.07 40.66 12.22 1.23.73 1.5 1.77.84 3.1-.67 1.33-2 1.67-4 1-9.83-6-22.33-9-37.5-9-15.17 0-28 3.15-38.53 9.44C49 74.84 47.7 74.7 47 73c-.65-1.26-.03-2.63 1.84-4.1 13.55-8.16 27.1-12.23 40.66-12.23z"
                  />
                </path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Avatar;
