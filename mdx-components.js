export function useMDXComponents(components) {
  return {
    p: ({ children }) => <p className="pb-8 text-slate-400 text-justify">{children}</p>,
    h1: ({ children }) => <h1 className="font-bold text-4xl pb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="font-bold pb-4" style={{ fontSize: "1.5rem" }}>{children}</h2>,
    h3: ({ children }) => <h3 className="font-bold pb-4" style={{ fontSize: "1.25rem" }}>{children}</h3>,
    h4: ({ children }) => <h4 className="font-bold py-4">{children}</h4>,
    ul: ({ children }) => <ul className="pb-4" style={{ listStyleType: `decimal`, listStylePosition: `inside` }}>{children}</ul>,
    li: ({children}) => <li className="text-slate-400">{children}</li>,
    ...components,
  }
}