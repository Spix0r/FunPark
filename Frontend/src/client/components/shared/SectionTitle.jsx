function SectionTitle({ children }) {
    return (
        <div className="py-6 max-xs:px-4">
            <div className="flex items-end gap-2 text-zinc-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffb939" className="size-8 max-xs:size-7">
                    <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                </svg>
                <h2 className="font-bold text-xl max-xs:text-base leading-1">{children}</h2>
            </div>
            <span className="block mt-3 w-full h-2 max-xs:h-1.5 bg-gradient-to-l from-yellow-400 to-transparent"></span>
        </div>
    );
};

export default SectionTitle;
