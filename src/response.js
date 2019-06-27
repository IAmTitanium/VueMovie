const baseUrl = 'https://api.douban.com/v2/movie/';

function message(res) {
  return res.body.subjects;
}

export function a(d) {
  d.cast_names = d.casts.map(dd => dd.name).toString();
  return d;
}

export {baseUrl, message}
