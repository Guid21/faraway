export const formattedMass = (mass: string) => {
  if (mass === 'unknown') {
    return mass;
  }

  return `${mass} kg`;
};
