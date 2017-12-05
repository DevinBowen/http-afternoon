import React, { Component } from 'react';
import Hero from './subcomponents/Hero';
import BlogThumb from './subcomponents/BlogThumb';

import axios from 'axios';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            featured: '',
            index: 0,
            posts: [{title: "Loading...",image: 'https://unsplash.it/900/400/?random'}]
        }
    }
    componentWillMount(){
        let promise = axios.get('/api/featured')
            promise.then(res => {
                this.setState({
                    featured: res.data,
                    posts: res.data,
                    index: (~~(Math.random() * res.data.length) + 0)
                })
            })
            .catch(console.log)
    }
    // insert componentWillMount:
    

    render(){  
        // map over your recommended blogs here, replace null.
        let posts = this.state.posts.map((e,i) => {
            return <BlogThumb key={i} blog={e}/>
        })

        return(
            <div className="content" >
                <Hero blog={this.state.posts[this.state.index]} />
                <hr/>
                <div className="blog-grid">
                    {/* put your mapped blogs here */}
                    {posts}
                </div>
            </div>
        )
    }
}

export default Home;