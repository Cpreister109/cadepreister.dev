type Star = {
  left: number;
  top: number;
  delay: number;
};

export default function generateStars(count: number, width: number, height: number): Star[] {
  const stars: Star[] = [];

  for (let i = 0; i < count; i++) {
    stars.push({
      left: Math.random() * width,
      top: Math.random() * height,
      delay: Math.random() * 5, // delay between 0-5s
    });
  }

  return stars;
}