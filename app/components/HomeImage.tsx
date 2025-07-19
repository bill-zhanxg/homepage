import Image, { StaticImageData } from 'next/image';

export default function HomeImage({ src, alt }: { src: StaticImageData; alt?: string }) {
	return (
		<Image
			src={src}
			alt={alt || 'Image'}
			width={256}
			height={256}
			sizes="(min-width: 1280px) 256px, (min-width: 1040px) calc(10.91vw + 73px), (min-width: 780px) calc(11.25vw + 141px), (min-width: 640px) calc(13.33vw + 94px), 256px"
			className="w-64 object-contain rounded-lg"
		/>
	);
}
