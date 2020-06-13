import React from 'react'
import Search from '../Search'
import preload from '../../data.json'
import { shallow } from 'enzyme'
import ShowCard from '../showcard'

// understand instabul for testing about coverage
test('Search renders correctly', () => {
  const component = shallow(<Search shows={preload.shows} />)
  expect(component).toMatchSnapshot()
})

// the line in strings shows the message so you can identify the test that failed
test('Search should render correct amount of shows', () => {
  const component = shallow(<Search shows={preload.shows} />)
  expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})

test('Search should render amount of showws based on search term', () => {
  const searchWord = 'black'
  const component = shallow(<Search shows={preload.shows} />)
  component.find('input').simulate('change', { target: { value: searchWord } })
  const showCount = preload.shows.filter(
    (show) =>
      `${show.title} ${show.description}`
        .toUpperCase()
        .indexOf(searchWord.toUpperCase()) >= 0
  ).length
  expect(component.find(ShowCard).length).toEqual(showCount)
})
