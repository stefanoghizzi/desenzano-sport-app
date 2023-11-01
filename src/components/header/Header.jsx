import { useState } from 'react';
import './Header.css';
import HeaderItem from './HeaderItem.jsx';
import { HEADER_DATA } from './headerData.js';

export default function Header() {

  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  // Add value to tabContent based on state
  let tabContent;
  if (selectedTopic) {
    tabContent = (
      <div class="header-content background-blue">
        <h3>{HEADER_DATA[selectedTopic].title}</h3>
        <p>{HEADER_DATA[selectedTopic].description}</p>
        <pre>
          <code>{HEADER_DATA[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className='header df-jcsb-aic background-blue color-white padding-m'>

      <div>logo</div>

      <div className='header-section df-jcc-aic'>
        <HeaderItem
          isSelected={selectedTopic === 'ATHLETICS'}
          onSelect={() => handleSelect('ATHLETICS')}
        >
          ATHLETICS
        </HeaderItem>
        <HeaderItem
          isSelected={selectedTopic === 'ARCHERY'}
          onSelect={() => handleSelect('ARCHERY')}
        >
          ARCHERY
        </HeaderItem>
        <HeaderItem
          isSelected={selectedTopic === 'SCUBA_DIVER'}
          onSelect={() => handleSelect('SCUBA_DIVER')}
        >
          SCUBA DIVER
        </HeaderItem>
        <HeaderItem
          isSelected={selectedTopic === 'SUMMERCAM'}
          onSelect={() => handleSelect('SUMMERCAMP')}
        >
          SUMMERCAMP
        </HeaderItem>
      </div>

      <div>
        <div>login</div>
      </div>

      {tabContent}

    </div>
  );
}
