export const openLink = link => {
  window.open(getSanitizedUrl(link), '_blank');
};

const getSanitizedUrl = link =>
  `https://${link.replace('https://', '').replace('http://', '')}`;
