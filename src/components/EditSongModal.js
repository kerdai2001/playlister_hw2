import React, { Component } from 'react';

export default class EditSongModal extends Component {

    render() {
        const { song, editSongCallback, hideEditSongModalCallback } = this.props;
        let title = "";
        let artist = "";
        let youTubeId = "";
        if (song) {
            title = song.title;
            artist = song.artist;
            youTubeId = song.youTubeId;
        }
        return (
            <div 
                class="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-edit-song-root'>
                        <div class="modal-north">
                            Edit Song
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                <b>
                                <div style={{fontSize:"24pt"}}>Title:<input style={{float: "right", fontSize:"16pt", width: "60%"}} type="text" id="song-title" defaultValue={title}/></div>
                                <div style={{fontSize:"24pt"}}>Artist:<input style={{float: "right", fontSize:"16pt", width:"60%"}} type="text" id="song-artist" defaultValue={artist}/></div>
                                <div style={{fontSize:"24pt"}}>You Tube Id:<input style={{float: "right", fontSize:"16pt", width:"60%"}} type="text" id="song-id" defaultValue={youTubeId}/></div>
                                </b>
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                class="modal-button" 
                                onClick={() => editSongCallback(song, {
                                    title: document.getElementById("song-title").value,
                                    artist: document.getElementById("song-artist").value,
                                    youTubeId: document.getElementById("song-id").value})}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                class="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}