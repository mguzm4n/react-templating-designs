import { useState, useRef, useEffect } from 'react'

const menuItems = [
  {
    icon: <svg className="w-4 h-4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 40.656 40.656" xmlSpace="preserve"><g><path d="M29.276,19.278c1.054,1.052,1.054,2.761,0,3.814L12.518,39.851c-0.506,0.506-1.192,0.791-1.908,0.791 c-0.008,0-0.017,0-0.025,0l-7.838-0.072c-1.472-0.015-2.661-1.203-2.673-2.674L0,30.056c-0.006-0.726,0.278-1.421,0.791-1.934 l16.758-16.757c1.053-1.054,2.763-1.054,3.816,0L29.276,19.278z M39.866,8.688l-7.913-7.913c-1.013-1.013-2.805-1.013-3.815,0 L26.872,2.04c-0.506,0.506-0.791,1.192-0.791,1.908c0,0.715,0.285,1.402,0.791,1.908l7.913,7.913 c0.525,0.527,1.217,0.791,1.908,0.791c0.69,0,1.382-0.264,1.907-0.791l1.266-1.265C40.92,11.451,40.92,9.742,39.866,8.688z M26.071,6.658c-1.054-1.054-2.764-1.054-3.816,0c-1.054,1.053-1.054,2.762,0,3.815l7.912,7.913 c0.527,0.527,1.22,0.791,1.908,0.791c0.691,0,1.382-0.263,1.907-0.791c1.055-1.053,1.055-2.762,0-3.815L26.071,6.658z"/></g></svg>
 ,
    name: "Design",
  },
  { 
    icon: <svg className="w-6 h-6" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M193.69,152.84a16,16,0,0,1,29.64,2.56l36.4,121.36,30-59.92a16,16,0,0,1,28.62,0L345.89,272h96.76A213.08,213.08,0,0,0,464,176.65C463.37,114.54,413.54,64,352.92,64c-48.09,0-80,29.54-96.92,51-16.88-21.49-48.83-51-96.92-51C98.46,64,48.63,114.54,48,176.65A211.13,211.13,0,0,0,56.93,240h93.18Z"/><path d="M321.69,295.16,304,259.78l-33.69,67.38A16,16,0,0,1,256,336q-.67,0-1.38-.06a16,16,0,0,1-14-11.34l-36.4-121.36-30,59.92A16,16,0,0,1,160,272H69.35q14,29.29,37.27,57.66c18.77,22.88,52.8,59.46,131.39,112.81a31.84,31.84,0,0,0,36,0c78.59-53.35,112.62-89.93,131.39-112.81a316.79,316.79,0,0,0,19-25.66H336A16,16,0,0,1,321.69,295.16Z"/><path d="M464,272H442.65a260.11,260.11,0,0,1-18.25,32H464a16,16,0,0,0,0-32Z"/><path d="M48,240a16,16,0,0,0,0,32H69.35a225.22,225.22,0,0,1-12.42-32Z"/></svg>, 
    name: "Fitness" 
  },
  { 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" /></svg>, 
    name: "Books" 
  },
  { 
    icon: <svg className="w-5 h-5" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"><g><path d="M150,0C67.29,0,0,67.29,0,150s67.29,150,150,150s150-67.29,150-150S232.71,0,150,0z M150,270c-66.168,0-120-53.832-120-120 S83.832,30,150,30s120,53.832,120,120S216.168,270,150,270z"/><path d="M195.031,75.387C183.477,66.802,169.331,65,159.5,65h-38.846c-5.522,0-10,4.478-10,10v150c0,5.523,4.478,10,10,10h7.691 c5.522,0,10-4.477,10-10v-53.46H159.5c9.831,0,23.977-1.802,35.531-10.388c8.355-6.207,18.314-18.352,18.314-40.961v-3.843 C213.346,93.739,203.387,81.594,195.031,75.387z M185.27,119.809c0,10.484-2.671,24.424-25.77,24.424h-21.154V92.308H159.5 c23.099,0,25.77,13.939,25.77,24.424V119.809z"/></g></svg>, 
    name: "Products" 
  },
  { 
    icon: <svg className="w-5 h-5" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" id="restaurant-bbq"><path d="M12.0166,12.5H14.5L12,15V12.5165a1.6189,1.6189,0,0,1-1.1367.4806,1.6,1.6,0,0,1-.9931-.3448A6.7838,6.7838,0,0,1,9.8783,2.3418,1.6179,1.6179,0,0,1,12,2.462V0l2.5,2.5H12.036a1.5927,1.5927,0,0,1,.1225.1289,1.6239,1.6239,0,0,1-.2871,2.2793A3.5148,3.5148,0,0,0,10.75,7.4951a3.5578,3.5578,0,0,0,1.1465,2.6162,1.6352,1.6352,0,0,1,.2325,2.2783C12.0949,12.4315,12.0535,12.4624,12.0166,12.5ZM2.504,0l-1,5.5c-.1464.805,1.7815,1.181,1.75,2L3.004,14a.9625.9625,0,0,0,1,1,.9625.9625,0,0,0,1-1l-.25-6.5c-.0314-.8176,1.7334-1.1808,1.75-2l-1-5.5h-.5l.25,4-.75.5L4.254,0h-.5l-.25,4.5L2.754,4l.25-4Z"/></svg>, 
    name: "Barbeque" 
  },
];

// const MenuItem = ({ icon, name, active }) => {

//   return (

//   );
// };

const MenuList = ({items, menuRef}) => {
  const decoratorSize = 24;
  const refs = useRef([]);

  const [activeIdx, setActiveIdx] = useState(2);
  const [currentItem, setCurrentItem] = useState(null);

  const [boxDecoratorStyles, setBoxDecoratorStyles] = useState({});
  const [topDecoratorPositions, setTopDecoratorPositions] = useState({});
  const [btmDecoratorPositions, setBtmDecoratorPositions] = useState({});


  const onActiveItemClick = (item, index) => {
    setCurrentItem(item);
    setActiveIdx(index);
  }

  useEffect(() => {
    if(!currentItem) return;

    
    const menuCurrWidth = menuRef.current.getBoundingClientRect().right;
    const itemCurrRight = currentItem.getBoundingClientRect().right;

    const boxHeight = currentItem.getBoundingClientRect().height;
    const boxWidth = menuCurrWidth - itemCurrRight; 

    const currentTop = currentItem.getBoundingClientRect().top;
    const currentBtm = currentItem.getBoundingClientRect().bottom;
    const currentLeft = menuCurrWidth - decoratorSize;
  
    setTopDecoratorPositions({top: `${currentTop - decoratorSize}px`, left: `${currentLeft}px`});
    setBtmDecoratorPositions({top: `${currentBtm}px`, left: `${currentLeft}px`});
    setBoxDecoratorStyles({
      width: `${boxWidth}px`, 
      height: `${boxHeight}px`,
      top: `${currentTop}px`,
      left: `${itemCurrRight}px`,
    });

  }, [currentItem]);


  return (
    <>
      <ul className="flex flex-col gap-4 my-auto">
        {items.map((item, idx) => {
          return (
            <li
              key={idx}
              ref={(element) => {
                refs.current[idx] = element;
              }}
              onClick={() => onActiveItemClick(refs.current[idx], idx)}
              className={`${
                idx == activeIdx ? "bg-gray-100" : ""
              } cursor-pointer flex flex-row gap-2 py-2 px-4 justify-start items-center rounded-l-2xl`}
            >
              {item.icon}
              <p className="font-bold text-2xl tracking-wide">{item.name}</p>
            </li>
          );
        })}
      </ul>
      <div className="absolute w-6 h-6" style={ topDecoratorPositions }>
        <svg className="fill-gray-100" viewBox="0 0 7 7"><path d="M 7 7 V 0 M 7 7 H 0 Q 6 6 7 0 Z"></path></svg>
      </div>

      <div className="absolute w-6 h-6 -rotate-90" style={ btmDecoratorPositions }>
        <svg className="fill-gray-100" viewBox="0 0 7 7"><path d="M 7 7 V 0 M 7 7 H 0 Q 6 6 7 0 Z"></path></svg>
      </div>

      <div className="absolute bg-gray-100" style={ boxDecoratorStyles }></div>
    </>
  );
};

const SideMenu = () => {
  const menuRef = useRef();

  return (
    <div ref={menuRef} className="w-42 h-screen p-14 flex flex-col items-center">
      <div className="flex flex-col items-center">

        <div className="relative">
          <div className="absolute border border-white top-2 right-2 w-3 h-3 bg-red-400 rounded-full"></div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={1.5} stroke="currentColor" 
            className="w-20 h-20" viewBox="2 2 19.9 19.9">
            <path  strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>

        <p className="text-xl font-bold tracking-wide text-gray-700">Matt Smith</p>
        <p className="text-sm font-sans text-zinc-300">mattsmith343@gmail.com</p>
      </div>

      <MenuList menuRef={menuRef} items={menuItems} />

      <div className="flex justify-center gap-4 mt-auto items-center">
        <p className="text-md font-extrabold tracking-wider">Dark mode</p>
        <div className="w-9 h-5 py-1 px-[6px] bg-green-400 rounded-md cursor-pointer">
          <div className="h-3 w-[6px] bg-white rounded-md"></div>
        </div>
      </div>

    </div>
  );
};

const MainContent = () => {
  return(
    <div className=" bg-gray-100 w-full h-screen pt-16 px-28">
      <div className="flex justify-between">
        <p className="text-orange-600 font-bold text-3xl tracking-wide">Design</p>

        <div className="flex justify-between bg-white items-center py-2 px-3 rounded-xl w-80">
          <input className="text-sm w-4/5" type="text" placeholder="Search..." />
          <div className="flex bg-orange-600 w-7 h-7 justify-center items-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white w-4 h-4">
              <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
              <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
            </svg>
          </div>
        </div>

        <div>Friends</div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="flex flex-row ">
      <SideMenu>
      </SideMenu>
      <MainContent>
      </MainContent>
    </div>
  )
}

export default App;
