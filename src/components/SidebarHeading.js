import React from "react";

export default class SidebarHeading extends React.Component {
    handleClick = (event) => {
        const { createNewListCallback, playlistOpen} = this.props;
        
        if(!playlistOpen) createNewListCallback();
    };
    render() {
        const { modalOpen, playlistOpen} = this.props;
        let addPlaylistClass = "toolbar-button";

        //if(modalOpen || playlistOpen) addPlaylistClass += " playlister-button-disabled";

        return (
            <div id="sidebar-heading">
                <input 
                    type="button" 
                    id="add-list-button" 
                    className={addPlaylistClass}
                    onClick={this.handleClick}
                    disabled={modalOpen || playlistOpen}
                    value="+" />
                Your Playlists
            </div>
        );
    }
}