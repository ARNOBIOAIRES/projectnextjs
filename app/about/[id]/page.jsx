import Link from 'next/link'

export default function DynamicPage({params}) {
    return ( 
      <div>
        <h1 className="text-4xl">This is the about page with ID: {params.id}</h1>
        
        <Link href="/">Home Page</Link>
    </div>
    )
}

/* 
A o diretório da rota dinâmica está dentro de about,
nesse sentido todo valor que vier depois da barra do about
se transformará em uma rota dinâmica.

about/[valor que receber]
Renderizará a página dinâmica, acrescentando o conteúdo 
que foi recebido nos parâmetros.



*/