
// FUNCION PARA FILTRAR POR ROL
export const filterChampions = (roles, arrayChampions) => {
  const result = arrayChampions.filter((element) => element.tags.includes(roles));
  return result;
};

// FUNCION PARA ORDENAR POR ROL
export const sortChampions = (arrayChampions, sortBy) => {
  let result = [];
  if (sortBy === 'az') {
    result = arrayChampions.sort((a, b) => a.id.localeCompare(b.id));
  } else if (sortBy === 'za') {
    result = arrayChampions.sort((a, b) => b.id.localeCompare(a.id));
  } else {
    result = arrayChampions;
  }
  return result;
};

// FUNCION PARA BUSCAR POR ROL
export const searchChampions = (arrayChampions, e) => {
  // eslint-disable-next-line array-callback-return
  const result = arrayChampions.filter((element) => {
    const a = element.name.toUpperCase();
    return a.includes(e.target.value.toUpperCase());
  });
  return result;
};
