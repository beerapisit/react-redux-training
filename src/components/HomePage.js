import React, { Component } from 'react'
import AddPost from './AddPost'
import PostList from './PostList'

class HomePage extends Component {
    render() {
        return (
            <div>
                <AddPost />
                <PostList />
            </div>
        )
    }
}

export default HomePage
