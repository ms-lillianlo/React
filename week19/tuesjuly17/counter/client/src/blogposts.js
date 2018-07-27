import React, {Component} from 'react';
import axios from 'axios';
import ArticlePreview from './articlepreview.js'

class BlogPosts extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
posts: []
        }
    }
    componentDidMount() {
        axios.get(`http://public-api.wordpress.com/rest/v1/sites/theoffseasoner.wordpress.com/posts`)
          .then(res => {
            this.setState({ posts: res.data.posts });
          })
          .catch(error=>console.log(error))
    }
   
    render() {
        var blogPosts= this.state.posts.map(post => {
        return <ArticlePreview key={post.id} post= {post}/>
    });
        
        return (
           <div>
                {blogPosts.slice(0,3)}
             </div>   
        );
    }
}

export default BlogPosts;