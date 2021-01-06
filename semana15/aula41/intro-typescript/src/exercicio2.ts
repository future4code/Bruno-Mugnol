// a) e b)
type stats = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): stats {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// c)
type sample = {
    numeros: number[],
    obterEstatisticas: (numeros:number[]) => stats
}

const teste: sample = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: obterEstatisticas
}

console.log(teste.obterEstatisticas(teste.numeros))