import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { Button, Select } from 'semantic-ui-react'

import { sortPosts } from '../actions/posts'


class NavControls extends Component {

    render() {
        const sortOptions = [
            { value: '-timestamp', text: 'Sort by Newest' },
            { value: 'timestamp', text: 'Sort by Oldest' },
            { value: '-voteScore', text: 'Sort by Score' }
        ];
        const isPostListing = this.props.match.path === '/' || this.props.match.path === '/:category';
        return (
            <div>
                {isPostListing &&
                    <Select
                        placeholder='Sort'
                        value={this.props.postSortOrder}
                        onChange={(event, data) => this.props.sortPosts(data.value)}
                        options={sortOptions}
                        className='sort-posts-menu'
                    >
                    </Select>
                }
                <Button primary as={Link} to='/new'>Add new post</Button>
            </div>
        )
    }
}

const mapStateToProps = ({ postSortOrder }) => ({ postSortOrder })
const mapDispatchToProps = { sortPosts }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavControls));


