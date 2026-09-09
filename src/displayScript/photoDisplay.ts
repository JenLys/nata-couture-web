/***
 * Make sure to compress a photo before adding it to the gallery folder
 * display iterates through each photo 
 */


export interface Photo{
    src: string; //path to image
    alt: string; //IN THE FUTURE: add a different alt tag for each photo, rn it's generic

}

/**
 * import.meta.glob checks for every file. 
 * eager: true imports every match
 * import: "default" grabs the default export for each matched file
 * creates an object shaped like: {""../assets/gallery/photo1.jpg" ...other photos etc etc}
 */


const modules = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png}", {
    eager:true,
    import: "default",
}) as Record<string, string>;

//photo array that gets iterated-- sort and map it
export const photos: Photo[] = Object.keys(modules).sort().map((path)=> ({
    src:modules[path],
    alt: "Portfolio photo showing alterations",
}));
