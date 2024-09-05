// Define the props interface
interface StarIconProps {
    fill?: string;
    width?: string;
    height?: string;
    className?: string; // Include className here
  }
  
  const StarIcon: React.FC<StarIconProps> = ({
    fill = "#FBC94A",
    width = "32",
    height = "32",
    className = "", // Default to an empty string
  }) => {
    return (
      <svg
        fill={fill}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className} // Use className here
      >
        <g>
          <path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z"></path>
        </g>
      </svg>
    );
  };
  
  // Update HeartIcon similarly if needed
  const HeartIcon: React.FC<{ fill?: string; width?: string; height?: string }> = ({
    fill = "#fff",
    width = "24",
    height = "32",
  }) => {
    return (
      <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
      >
        <g>
          <path
            d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
            fill={fill}
          ></path>
        </g>
      </svg>
    );
  };
  
  export { StarIcon, HeartIcon };
  