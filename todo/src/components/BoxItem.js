import React, { Component } from 'react';
import FormItem from '../containers/FormItem';
import ListItem from '../containers/ListItem';

export default class BoxItem extends Component {
    render() {
        return (
            <div>
                <FormItem />
                <ListItem />
            </div>
        )
    }
}