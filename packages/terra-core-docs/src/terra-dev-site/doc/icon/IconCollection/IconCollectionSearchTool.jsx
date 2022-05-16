import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SearchField from 'terra-search-field';
import Card from 'terra-card';
import Text from 'terra-text';
import Spacer from 'terra-spacer';
import Checkbox from 'terra-form-checkbox';
import ModalManager from 'terra-application/lib/modal-manager';
import Button from 'terra-button';
import { withDisclosureManager } from 'terra-application/lib/disclosure-manager';

import IconInformationModal from './IconInformationModal';

import styles from './IconCollectionSearchTool.module.scss';
const cx = classNames.bind(styles);

import testData from './testData';
import Heading from 'terra-heading';

const propTypes = {};

const MatchingSearchTerm = ({term, matchedSubstrings}) => {
  // boldify the matched substrings accounting for overlaps and duplicates
  if(matchedSubstrings.length === 1 && term === matchedSubstrings[0]){
    return <span><b>{term} </b></span>;
  }
  // find begins and ends for each substring
  let substringLocations = [];
  matchedSubstrings.forEach((substring) => {
    let searchPosition = 0;
    while(searchPosition < term.length){
      const substrIndex = term.indexOf(substring, searchPosition);
      if(substrIndex > -1){
        substringLocations.push({
          begin: substrIndex,
          end: substrIndex + substring.length - 1,
        });
        searchPosition++;
      } else {
        break;
      }
    }
  })
  // now we have to deal with overlaps
  // sort all results by beginning
  substringLocations.sort((a, b) => a.begin - b.begin);
  // now merge overlaps
  let mergePosition = 0;
  while (mergePosition < substringLocations.length - 1){
    if(substringLocations[mergePosition].end >= substringLocations[mergePosition + 1].begin - 1){
      // if the two entries being compared overlap merge the second into the first
      substringLocations[mergePosition].end = Math.max(
        substringLocations[mergePosition].end,
        substringLocations[mergePosition + 1].end,
      );
      // and delete the redundant one
      substringLocations.splice(mergePosition + 1, 1);
    } else {
      mergePosition++;
    }
  }

  const elements = [];
  if(substringLocations[0].begin !== 0){
    elements.push(<span>{term.substr(0, substringLocations[0].begin)}</span>)
  }
  for(let i = 0; i < substringLocations.length; i++){
    elements.push(
      <b>{
        term.substr(
          substringLocations[i].begin,
          substringLocations[i].end - substringLocations[i].begin + 1,
      )}</b>
    );
    if(substringLocations[i].end < term.length - 1){
      const spanLength = substringLocations[i + 1] ?
        substringLocations[i + 1]?.begin - substringLocations[i].end - 1
        : term.length;
      elements.push(<span begin={substringLocations[i].end + 1} end={substringLocations[i + 1]?.begin}>{
        term.substr(
          substringLocations[i].end + 1,
          spanLength,
      )}</span>)
    }
  }

  return (<span>{[...elements]} </span>);
}

const IconCard = ({icon: Icon, label, onClick, darkBackground, matchingSearchTerms = []}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Spacer margin='large+2'>
      <Card variant={hovered ? 'raised' : null}>
        <div
          className={cx('resultContents')}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={onClick}
        >
          <Spacer padding="small" margin="small" className={cx({'dark-background': darkBackground})}>
            <Icon height='2.1em' width='2.1em'/>
          </Spacer>
          <Text>{label}</Text>
        </div>
      </Card>
      <span className={cx('matching-search-terms')}>
        {matchingSearchTerms.map((searchTerm) => (<MatchingSearchTerm {...searchTerm} />))}
      </span>
    </Spacer>
  )
};

const resultsFromSearchString = (resultsToSearch, searchString) => {
  if(!searchString || searchString === '')
    return resultsToSearch.map(
      ({matchingWords, ...rest}) => ({...rest, matchingWords: []})
    );

  // make an array of the words in the search string
  const words = searchString.split(' ')
    .filter((word) => word !== '')
    .map((word) => word.toLowerCase());

  const filteredResults = testData.filter((icon) => {
    // make an array of the icon's search terms
    // TODO move this to where the data structure is generated
    const iconSearchTerms = icon.searchTerms.split(' ')
      .filter((word) => word !== '')
      .map((word) => word.toLowerCase());
    let matchingWords = [];

    for(let i = 0; i < words.length; i++){
      if(icon.searchTerms.includes(words[i])) {
        // add all matching search terms to this array
        matchingWords = matchingWords.concat(iconSearchTerms.filter((term) => term.includes(words[i])));
      };
    }
    // if we found any matching words, reassign the object's matching words and don't filter it
    if(matchingWords.length > 0){
      icon.matchingWords = [...new Set(matchingWords)]
        .map((matchingWord) => {
          // compile list of matching substrings for each word for highlighting
          const matchedSubstrings = [];
          for(let i = 0; i < words.length; i++){
            if(matchingWord.includes(words[i])) matchedSubstrings.push(words[i]);
          }
          return {
            term: matchingWord,
            matchedSubstrings,
            totalMatchedCharacters: matchedSubstrings.reduce((acc, string) => acc + string.length, 0),
            exactMatch: matchedSubstrings.reduce((acc, string) => string === matchingWord ? true : acc, false)
          };
        }).sort((a, b) => {
          // order by most matched word, prioritize exact matches
          if(a.exactMatch && !b.exactMatch){
            return -1;
          } else if (!a.exactMatch && b.exactMatch){
            return 1;
          } else {
            return b.totalMatchedCharacters / b.term.length -
              a.totalMatchedCharacters / a.term.length;
          }
        });
      return true;
    }
    return false;
  })
  
  return filteredResults;
}

const filterFunctions = {
  action: item => item.isAction,
  status: item => item.isStatus,
  toggle: item => item.isToggle,
  labelNotRequired: item => !item.labelRequired,
}

const applyBoolFilters = (results, filterNames) => {
  // If no filters to apply, return all results
  if(!filterNames || filterNames.length === 0){
    return results;
  }
  return results.filter((result) => {
    let showResult = true;
    for(let i = 0; i < filterNames.length; i++){
      const filterFunction = filterFunctions[filterNames[i]];
      if(filterFunction && !filterFunction(result)){
        showResult = false;
      }
    }
    // Filter result if it doesn't match any of the filters
    return showResult;
  })
}

const getFilteredResults = (searchString, activeBoolFilters) => {
  const searchedResults = resultsFromSearchString([...testData], searchString);
  const filteredResults = applyBoolFilters(searchedResults, activeBoolFilters);
  return filteredResults.sort((a, b) => b.matchingWords.length - a.matchingWords.length);
}

const IconCollectionSearchTool = withDisclosureManager(({ disclosureManager }) => {
  const [activeBoolFilters, setActiveBoolFilters] = useState([]);
  const [searchString, setSearchString] = useState('');

  // Rework filtered results if either param has changed
  const filteredResults = useMemo(
    () => getFilteredResults(searchString, activeBoolFilters),
    [searchString, activeBoolFilters],
  )

  const handleFilterChange = (filterName, isActive) => {
    // check if the filter name being passed is even available
    if(!Object.keys(filterFunctions).includes(filterName)){
      console.warn(`Filter name "${filterName}" passed to handleFilterChange() is not an available filter.`);
      return;
    }
    if(isActive){
      // turn the filter on if it's not on
      if(!activeBoolFilters.includes(filterName)){
        setActiveBoolFilters((prev) => [...prev, filterName]);
      }
    } else {
      // turn the filter off it's not off
      if(activeBoolFilters.includes(filterName)){
        setActiveBoolFilters(
          (prevFilters) => prevFilters.filter(
            (activeFilter) => activeFilter !== filterName
          )
        )
      }
    }
  }

  return (
    <div>
      <SearchField
        isBlock
        onChange={(e, searchString) => setSearchString(searchString)}/>
      <Spacer marginTop="large">
        <Heading level={5}>Functions</Heading>
        {/* Note, first param of handleFilterChange must correspond to a key in filterFunctions */}
        <Checkbox onChange={(e) => handleFilterChange('action', e.target.checked)} isInline labelText="Action"/>
        <Checkbox onChange={(e) => handleFilterChange('status', e.target.checked)} isInline labelText="Status"/>
        <Checkbox onChange={(e) => handleFilterChange('toggle', e.target.checked)} isInline labelText="Toggle"/>
        <Checkbox onChange={(e) => handleFilterChange('labelNotRequired', e.target.checked)} isInline labelText="Label Not Required"/>
      </Spacer>
      <Text>{`${filteredResults.length} Matching Results`}</Text>
      <ModalManager
          disclosureAccessory={<div>Icon Details</div>}
        >
      <Card className={cx('resultsContainer')}>
          {
            filteredResults.map((result) => (
                <IconCard
                  icon={result.svg}
                  label={result.meaning}
                  darkBackground={result.needsDarkBackground}
                  matchingSearchTerms={result.matchingWords}
                  onClick={
                    () => disclosureManager.disclose({
                      preferredType: 'modal',
                      dimensions: {
                        width: '560',
                        height: '600',
                      },
                      content: {
                        key: `${result.meaning}`,
                        component: <IconInformationModal data={result}/>
                      }
                    })
                } />
            ))
          }
        </Card>
      </ModalManager>
    </div>
  );
})

export default IconCollectionSearchTool;
