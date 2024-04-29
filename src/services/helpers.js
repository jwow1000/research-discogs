export function checkPathGif(path) {
  const len = path.length;
  let bool = false
  // create last three to see if it's a gif
  let testString = path[len - 3] + path[len - 2] + path[len - 1];
  // is it gif? no? print the image, yes? skip
  if (testString === 'gif') {
    bool = true;
  } else {
    bool = false
  }
  return bool
}