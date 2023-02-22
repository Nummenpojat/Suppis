import React from 'react';

const NavDropdownElement = (props: { text: string, linksTo: string }) => {
  return (
    <li className="w-[200px] h-[37px] hover:bg-[#eaeaea] flex place-items-center">
      <a href={props.linksTo} className="py-[10px] px-[20px] text-[16px] font-passionOne text-[#515151] hover:text-mannynvihrea w-[200px]">
        { props.text }
      </a>
    </li>
  );
};

export default NavDropdownElement;