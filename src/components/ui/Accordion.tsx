import { ReactComponent as ArrowDown } from '@Assets/images/accordion-arrow-down.svg';
import { ReactComponent as ArrowUp } from '@Assets/images/accordion-arrow-up.svg';
import { useState } from 'react';
import './Accordion.scss';

interface AccordionProps {
  accordionList: { label: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = (props: AccordionProps) => {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
  const handleClick = (nextIndex: number) => {
    setExpandedIndexes((currentIndexes) => {
      return currentIndexes.includes(nextIndex)
        ? currentIndexes.filter((index) => index !== nextIndex)
        : [...currentIndexes, nextIndex];
    });
  };

  const list = props.accordionList.map((item, index) => {
    const isExpanded = expandedIndexes.includes(index);

    return (
      <div
        key={index}
        className='ssh-accordion__item'
        onClick={() => {
          handleClick(index);
        }}
      >
        <div className='ssh-accordion__label'>
          {item.label}
          <button type='button' title='Toggle Accordion Panel'>
            {isExpanded ? <ArrowUp /> : <ArrowDown />}
          </button>
        </div>
        <div
          className={`ssh-accordion__content ${
            isExpanded ? '' : 'hidden-item'
          }`}
        >
          {item.content}
        </div>
      </div>
    );
  });

  return <div className='ssh-accordion'>{list}</div>;
};

export default Accordion;
