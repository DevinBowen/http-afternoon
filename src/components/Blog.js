import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Formated from './subcomponents/Formated';

import axios from 'axios';

class Blog extends Component {
    constructor() {
        super();
        this.state = {
            blog: {}
        }
    }

    // insert componentWillMount method
    componentWillMount() {
        let id = this.props.match.params.id
        let promise = axios.get('/api/blog/' + id).then(res => {
            this.setState({
                blog: res.data
            })
        }).catch(console.log)
    }


    render() {
        const blog = this.state.blog;
        return (

            <div className='content blog-content' >
                <div className="blog-img" style={{ backgroundImage: `url(${blog.image})`, backgroundSize: 'cover' }}>
                    <h1>{blog.title}</h1>
                </div>
                <div className="blog-container">
                    <h2>{blog.subTitle}</h2>
                    <br />
                    {
                        blog.name
                            ?
                            <h3>{blog.name}</h3>
                            :
                            null
                    }
                    <hr /><br />
                    {<Formated text={blog.text} />}
                </div>
                <Link to={`/edit/${blog.id}`} >
                    <button>Edit</button>
                </Link>
                <br />
            </div>
        )
    }
}

export default Blog;