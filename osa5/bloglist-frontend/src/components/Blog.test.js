import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'



test('Only show Title and Author', () => {
    const blog = {
        title: 'Component testing is done with react-testing-library',
        author: 'Testman',
        url: 'test.com'
    }
    const component = render(
        <Blog blog={blog} />
    )
    expect(component.container).toHaveTextContent(
        'Component testing is done with react-testing-library'
    )
    expect(component.container).toHaveTextContent(
        'Testman'
    )
    const url = component.queryByText(
        'test.com'
    )
    expect(url).toBeNull()
    const likes = component.queryByText(
        'likes'
    )
    expect(likes).toBeNull()
})

test('Show likes and url after pressing view', () => {
    const blog = {
        title: 'Component testing is done with react-testing-library',
        author: 'Testman',
        url: 'test.com'
    }
    beforeEach(() => {
    component = render(
        <Blog blog={blog} />
    )
    
    const button = component.getByText('view')
    fireEvent.click(button)
    
    expect(component.container).toHaveTextContent('test.com')
    expect(component.container).toHaveTextContent('likes')


})

})
