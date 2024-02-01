export function getImgURL(name) {
  return new URL(`../../public/assets/movie-covers/${name}`, import.meta.url)
    .href;
}
