import jsTPS_Transaction from "../common/jsTPS.js"

export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, index, song) {
        super();
        this.app = initApp;
        this.index = index;
        this.song = song;
    }

    doTransaction() {
        this.app.removeSong(this.index);
    }
    
    undoTransaction() {
        this.app.addSong(this.index, this.song);
    }
}