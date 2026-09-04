/**
 * Type for vite-imagetools imports that end in `&as=picture`, e.g.
 * `import hero from "./photo.jpg?w=640;1440&format=avif;webp;jpg&as=picture"`.
 */
declare module "*&as=picture" {
  export interface PictureSource {
    /** Key is the image format (avif, webp, jpg, ...). Value is a srcset string. */
    sources: Record<string, string>;
    /** Fallback image, generated from the last format in the query. */
    img: { src: string; w: number; h: number };
  }
  const picture: PictureSource;
  export default picture;
}
