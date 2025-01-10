import Image from "next/image";

const ImageGrid = () => {
  const images = [
    "/images/img1.jpg", // Replace with your image paths
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          width={500}
          height={500}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      ))}
    </div>
  );
};

export default ImageGrid;
