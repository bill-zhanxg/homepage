export default function Paragraph2({ children }: { children: React.ReactNode }) {
	return <div className="flex flex-col 2xl:flex-row gap-6 items-center justify-center pt-2 p-4 sm:p-2">{children}</div>;
}
