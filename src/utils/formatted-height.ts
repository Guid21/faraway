export const formattedHeight = (height: string) => {
  if (height === 'unknown') {
    return height;
  }

  return `${height} cm`;
};
