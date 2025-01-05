const Profile = ({ color }: { color: string }) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="icon / heroicons / Outline / user">
        <g id="Icon">
          <path
            d="M16.1667 7.5C16.1667 9.70914 14.3759 11.5 12.1667 11.5C9.95761 11.5 8.16675 9.70914 8.16675 7.5C8.16675 5.29086 9.95761 3.5 12.1667 3.5C14.3759 3.5 16.1667 5.29086 16.1667 7.5Z"
            stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path
            d="M12.1667 14.5C8.30075 14.5 5.16675 17.634 5.16675 21.5H19.1667C19.1667 17.634 16.0327 14.5 12.1667 14.5Z"
            stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </g>
    </svg>
  );
};

export default Profile;