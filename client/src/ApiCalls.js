export const fetchUsers = ({query= '', page= 1, per_page= 20}) => {
    console.log();
    return fetch(`/api/search-github-users/?username=${query}&page=${page}&per_page=${per_page}`)
}