// альтернатива литералу
enum requestType {
  GET = 'get',
  POST = 'post'
}


function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
  return 1;
}

// если let = ошибка, const - задает тип 'post' (let method: 'post' = 'post');
const method = 'post';

// as 'post' = приведение (cast) типов
fetchWithAuth('url', method as 'post');