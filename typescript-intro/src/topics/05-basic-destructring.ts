interface AudioPlayer {
  audioVolumne: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolumne: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const {
  song: anotherSong,
  songDuration: duration,
  details: { author },
} = audioPlayer;

// TODO: CLASE 17
// console.log("Song:", anotherSong);
// console.log("SongDuration:", duration);

// console.log("Author:", author);

// TODO: CLase 18
const [, , trunks = "Not found"]: string[] = ["Goku", "Vegeta"];
console.log("Personaje 3", trunks);

export {};
