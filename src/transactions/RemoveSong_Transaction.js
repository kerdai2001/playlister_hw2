import jsTPS_Transaction from "../common/jsTPS.js"

export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, index, title, artist, youTubeId) {
        super();
        this.app = initApp;
        this.index = index;
        this.title = title;
        this.artist = artist;
        this.youTubeId = youTubeId;
    }

    doTransaction() {
        this.app.removeSong(this.index);
    }
    
    undoTransaction() {
        this.app.addSong(this.index, this.title, this.artist, this.youTubeId);
    }
}