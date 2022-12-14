import React from "react";

export default class EditToolbar extends React.Component {
    render() {
        const { canAddSong, canUndo, canRedo, canClose, 
                undoCallback, redoCallback, closeCallback, addSongCallback, modalOpen} = this.props;
        let addSongClass = "toolbar-button";
        let undoClass = "toolbar-button";
        let redoClass = "toolbar-button";
        let closeClass = "toolbar-button";
        
        /*
        if(modalOpen)
        {
            addSongClass += " playlister-button-disabled";
            undoClass += " playlister-button-disabled";
            redoClass += " playlister-button-disabled";
            closeClass += " playlister-button-disabled";
        }
        else
        {
            if (!canAddSong) addSongClass += " playlister-button-disabled";
            if (!canUndo) undoClass += " playlister-button-disabled";
            if (!canRedo) redoClass += " playlister-button-disabled";
            if (!canClose) closeClass += " playlister-button-disabled";
        }
        */

        return (
            <div id="edit-toolbar">
            <input 
                type="button" 
                id='add-song-button' 
                value="+" 
                className={addSongClass}
                disabled={modalOpen || !canAddSong}
                onClick={addSongCallback}
            />
            <input 
                type="button" 
                id='undo-button' 
                value="⟲" 
                className={undoClass}
                disabled={modalOpen || !canUndo}
                onClick={undoCallback}
            />
            <input 
                type="button" 
                id='redo-button' 
                value="⟳" 
                className={redoClass}
                disabled={modalOpen || !canRedo}
                onClick={redoCallback}
            />
            <input 
                type="button" 
                id='close-button' 
                value="&#x2715;" 
                className={closeClass} 
                disabled={modalOpen || !canClose}
                onClick={closeCallback}
            />
        </div>
        )
    }
}