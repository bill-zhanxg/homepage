import Image, { StaticImageData } from 'next/image';

export default function HomeImage({ src }: { src: StaticImageData }) {
	return (
		<Image
			src={src}
			alt="Australian Flag"
			width={0}
			height={0}
			sizes="100vw"
			className="w-64 object-contain rounded-lg"
		/>
	);
}
