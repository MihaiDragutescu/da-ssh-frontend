import { ReactComponent as ArrowDown } from '@Assets/images/accordion-arrow-down.svg';
import { ReactComponent as ArrowUp } from '@Assets/images/accordion-arrow-up.svg';
import { useState } from 'react';
import './Accordion.scss';

interface AccordionProps {
  accordionList: { label: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = (props: AccordionProps) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const handleClick = (nextIndex: number) => {
    setExpandedIndex((currentIndex) => {
      if (currentIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const list = props.accordionList.map((item, index) => {
    const isExpanded = expandedIndex === index;

    return (
      <div
        key={index}
        className='ssh-accordion__item'
        onClick={() => {
          handleClick(index);
        }}
      >
        <div className='ssh-accordion__label'>
          {item.label} {isExpanded ? <ArrowUp /> : <ArrowDown />}
        </div>
        <div className={`ssh-accordion__content ${isExpanded ? '' : 'hidden'}`}>
          {item.content}
        </div>
      </div>
    );
  });

  return <div className='ssh-accordion'>{list}</div>;
};

export default Accordion;
