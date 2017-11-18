import React from 'react'
import {shallow, mount, render} from 'enzyme'

import Comment from './Comment'


describe('<Comment />', () => {
    const comment = {
        comment: 'test comment',
        user: {
            name: "Name test",
            uid: "xxxxx"
        }
    }

    it('renders without crashing', () => {
        const wrapper = shallow(<Comment comment={comment} />)
        expect(wrapper.length).toBe(1)
    })
    it('should have .well class', () => {
        const wrapper = shallow(<Comment comment={comment} />)
        expect(wrapper.is('.well')).toBe(true)
    })
    it('comment must be the same value returned by Comment component', () => {
        const wrapper = shallow(<Comment comment={comment} />)
        expect(wrapper.text()).toBe(comment.user.name + ':' + comment.comment)
    })
})
