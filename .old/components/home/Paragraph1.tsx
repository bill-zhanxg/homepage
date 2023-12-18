export default function Paragraph1({ children }: { children: React.ReactNode }) {
	return <div className="flex flex-col m-10 gap-2 w-[80%] md:w-[60%] lg:w-[80%] xl:w-[40%]">{children}</div>;
}
