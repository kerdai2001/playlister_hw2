import React from "react";

export default class SidebarHeading extends React.Component {
    handleClick = (event) => {
        const { createNewListCallback} = this.props;
        createNewListCallback();
    };
    render() {
        const { modalOpen} = this.props;
        let addPlaylistClass = "toolbar-button";

        if(modalOpen) addPlaylistClass += " playlister-button-disabled";

        return (
            <div id="sidebar-heading">
                <input 
                    type="button" 
                    id="add-list-button" 
                    className={addPlaylistClass}
                    onClick={this.handleClick}
                    value="+" />
                Your Playlists
            </div>
        );
    }
}