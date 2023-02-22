import React, {ReactElement} from "react";

export default function NavElement(props: { children?: ReactElement[], text: string, linksTo: string}) {
  return (
    <li className="group h-[60px] relative">
      <a href={props.linksTo} className="h-full w-full flex place-items-center">
        <div className="flex place-items-center">
          <h1 className="text-tausta text-[19px]  group-hover:text-mannynvihrea duration-100">
            {
              props.text
            }
          </h1>
          { props.children != null ?
              <svg viewBox="0 0 330 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" className="fill-white group-hover:fill-mannynvihrea duration-100">
                <path d="M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515z"></path>
              </svg>
            :
            <></>
          }
        </div>
      </a>
      { props.children != null ?
        <ul className="group-hover:block hidden flex-col bg-white w-[200px] absolute top-[60px] left-0 duration-100 shadow">
          {
            props.children
          }
        </ul>
        :
        <></>
      }
    </li>);
}