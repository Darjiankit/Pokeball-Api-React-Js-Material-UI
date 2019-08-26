import React, { Component } from "react"
//import axios from "axios"
import { Link } from "react-router-dom"
import Pokeball from "../Pokeball.PNG"
import { connect } from "react-redux"

class Home extends Component {
    // state = {
    //     posts: []
    // }
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             console.log(res)
    //             this.setState({
    //                 posts: res.data.slice(0, 10)
    //             })
    //         })
    // }
    render() {
        console.log(this.props)
        const { posts } = this.props;
        //const { posts } = this.state
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="This is another" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div >
                    </div >
                )
            })
        )
            : (
                <div >
                    <p className="center">There are no posts available in state</p>
                </div >
            )
        return (

            < div className="container home" >
                {postList}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        posts: state.post
    }
}

export default connect(mapStateToProps)(Home)
