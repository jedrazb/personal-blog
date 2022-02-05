export const selectHighestResolutionFromSrcSet = srcSet => {
  const srcSetArray = srcSet.split(',');
  const srcArraySorted = srcSetArray.map(srcWithResolution => {
    const [src, resolution] = srcWithResolution.split(' ');
    return src;
  });

  return srcArraySorted[srcArraySorted.length - 1];
};
