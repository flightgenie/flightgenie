type LatLngType = [number, number];

export const centroid = (latLngArr: LatLngType[]): LatLngType | string => {
  if (latLngArr.length === 0) {
    return 'error ! no centroid found :/';
  }
  const sum = latLngArr.reduce(
    (acc: LatLngType, cur: LatLngType) => {
      return [acc[0] + cur[0], acc[1] + cur[1]];
    },
    [0, 0]
  );

  return [sum[0] / latLngArr.length, sum[1] / latLngArr.length];
};

export default centroid;

// console.log('expect 1,2', centroid([[1, 2], [1, 0], [1, 4]]));
// console.log('expect 42,25', centroid([[15, 15], [47, 40], [65, 20]]));
