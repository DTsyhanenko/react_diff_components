import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { useState } from 'react';

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    /*
        In this case if we cannot use short and longhand versions we put event above mapping function. But with the problems with scope of function we need to use a hybrid of a long and short version
    */
        const handleClick = (nextIndex) => {
            if (expandedIndex === nextIndex) {
                setExpandedIndex(-1);
            } else {
                setExpandedIndex(nextIndex);
            }
        };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>;

        /*

        This is a longhand verson of a click event. We are using this when we are writing a big amount of code. Is not seen often on a big projects. Whren we are writing a event directly in mapping function a long code will make a read of function very difficult.
        const handleClick = () => {
            setExpandedIndex(index);
        };

        return (
            <div key={item.id}>
                /*<div onClick={handleClick}>{item.label}</div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
        */

        return (
            <div key={item.id}>
                {/*this is a shorthand version of click event. We are using this, when we write a 1 line code for event.
                <div onClick={() => setExpandedIndex(index)}>{item.label}</div>
                */}
                
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });

    return <div className="border-x border-t rounded">
        {renderedItems}
    </div>;
}

export default Accordion;