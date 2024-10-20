import wedding from '../images/wedding.png';
export default function Wedding() {
  return (
    <img
      style={{
        maxWidth: '90vw',
        maxHeight: '90vh',
        objectFit: 'contain',
      }}
      src={wedding}
    />
  );
}
