const getImg = (imgLink) => {
  const imgKey = imgLink.asset._ref
    .replace(/image-/, '')
    .replace(/-jpg/, '.jpg')
    .replace(/-png/, '.png')
    .replace(/-svg/, '.svg');
  const imgSrc = `https://cdn.sanity.io/images/jqz6a7h3/production/${imgKey}`;
  return imgSrc;
}

export default getImg;