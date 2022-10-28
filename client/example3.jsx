const { useState, useEffect } = React;

const SongContainer = (props) => {
    const [songs, setSongs] = useState(props.songs);

    useEffect(async () => {
        const response = await fetch('/getSongs');
        const songs = await response.json();
        setSongs(songs);
    }, []);

    if(songs.length === 0) {
        return (
            <div>
                <h3>No Songs Yet!</h3>
            </div>
        );
    }

    // Yes songs
    const songList = songs.map((song, i) => {
        return (
            <div key={i}>
                <h2>{song.artist} - <i>{song.title}</i></h2>
            </div>
        );
    });

    return (
        <div>
            <h1>My Favorite Songs!</h1>
            {songList}
        </div>
    )
};

const init = () => {
    ReactDOM.render(
        <SongContainer songs={[]}/>,
        document.getElementById('app')
    );

    loadSongsFromServer();
}

window.onload = init;