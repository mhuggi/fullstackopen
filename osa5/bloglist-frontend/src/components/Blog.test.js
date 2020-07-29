import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'



test('renders content', () => {
    const blog = {
        title: 'Component testing is done with react-testing-library',
        author: 'Testman',
        url: 'test.com'
    }

    const component = render(
        <Blog blog={blog} />
    )
    const li = component.container.querySelector('li')

    console.log(prettyDOM(li))

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