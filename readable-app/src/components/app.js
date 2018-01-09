import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './home'
import PostDetailPage from './post-detail'
import CreateEditPostPage from './create-edit-post'


class ReadableApp extends Component {
    render() {
        return (
            <div className="ReadableApp">
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/new' component={CreateEditPostPage} />
                    <Route exact path='/:category' component={HomePage} />
                    <Route exact path='/:category/:postId' component={PostDetailPage} />
                    <Route exact path='/:category/:postId/edit' component={CreateEditPostPage} />
                </Switch>
            </div>
        );
    }
}

export default ReadableApp;
