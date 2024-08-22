const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTI1OThiN2RmMzZiNTU4NmJjZjllN2NjYzFlOTNkZCIsIm5iZiI6MTcyNDAyOTk3OS4xNDk0OTQsInN1YiI6IjY2YzA5MTcwOTk5ZmYwYTFjNTE2YThhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3ZMit5FHs-21N-BLDl4DOyk5r2SJmqGIplFyOFINIB8",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}

