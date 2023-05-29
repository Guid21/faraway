export const getIdFromUrl = (url: string) => url.match(/https:\/\/swapi\.dev\/api\/people\/(\d+)\/?$/)?.[1]
