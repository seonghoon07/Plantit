const Diary = ({ color }: { color: string }) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="icon / heroicons / Outline / book-open">
        <path id="Icon"
              d="M12.4999 6.75278V19.7528M12.4999 6.75278C11.332 5.97686 9.74643 5.5 7.99994 5.5C6.25345 5.5 4.66783 5.97686 3.49994 6.75278V19.7528C4.66783 18.9769 6.25345 18.5 7.99994 18.5C9.74643 18.5 11.332 18.9769 12.4999 19.7528M12.4999 6.75278C13.6678 5.97686 15.2534 5.5 16.9999 5.5C18.7464 5.5 20.332 5.97686 21.4999 6.75278V19.7528C20.332 18.9769 18.7464 18.5 16.9999 18.5C15.2534 18.5 13.6678 18.9769 12.4999 19.7528"
              stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
};

export default Diary;