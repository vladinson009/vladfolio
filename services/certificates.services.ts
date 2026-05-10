export type Certificate = {
  id: string;
  title: string;
  imgUrl: string;
  credentialsUrl: string;
};
const certificates: Certificate[] = [
  {
    title: 'DevOps',
    id: '1',
    imgUrl: '/certificates/devops.webp',
    credentialsUrl: 'https://softuni.bg/certificates/details/253006/7e88bff3',
  },
  {
    title: 'Containers and Cloud',
    id: '2',
    imgUrl: '/certificates/containers-and-cloud.webp',
    credentialsUrl: 'https://softuni.bg/certificates/details/255459/588b29eb',
  },
  {
    title: 'Front-End Diploma',
    id: '3',
    imgUrl: '/certificates/Diploma.webp',
    credentialsUrl: 'https://softuni.bg/certificates/details/253006/7e88bff3',
  },
];

export function fetchMostRecentCertificates() {
  const result = certificates.slice(-3).reverse();
  return result;
}
export function fetchAllCertificates() {
  return certificates.reverse();
}
