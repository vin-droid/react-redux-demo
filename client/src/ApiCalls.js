export const fetchUsers = ({query= '', page= 1, per_page= 20}) => {
    return fetch(`/api/search-github-users/?username=${query}&page=${page}&per_page=${per_page}`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      })
}