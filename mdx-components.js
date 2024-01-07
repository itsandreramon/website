export function useMDXComponents(components) {
  return {
    p: ({ children }) => <p className="pb-4 text-slate-400">{children}</p>,
    h1: ({ children }) => <h1 className="font-bold text-4xl pb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="font-bold text-3xl pb-2">{children}</h2>,
    h3: ({ children }) => <h3 className="font-bold text-2xl pb-4">{children}</h3>,
    h4: ({ children }) => <h4 className="font-bold text-2xl pb-4">{children}</h4>,
    ...components,
  }
}