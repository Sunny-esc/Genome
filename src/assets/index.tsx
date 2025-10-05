// images.ts
const images = import.meta.glob("./BingWallpaper/*.{png,jpg,jpeg,svg}", { eager: true });

console.log("Loaded images:", images);

export default images;
