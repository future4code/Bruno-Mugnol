import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`
const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`
const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [{
      id: Date.now(),
      texto: "beber água",
      completa: true
    },
    {
      id: `${Date.now() - 1}`,
      texto: "tomar café",
      completa: false
    },
    {
      id: `${Date.now() - 2}`,
      texto: "lanchar",
      completa: false
    },
    {
      id: `${Date.now() - 3}`,
      texto: "comer bolo",
      completa: false
    }
    ],
    inputValue: '',
    filtro: ''
  }

  componentDidUpdate() {
    localStorage.setItem("arrayTarefas", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const buscaTarefas = JSON.parse(localStorage.getItem("arrayTarefas"))
    if (buscaTarefas) {      
    this.setState({ tarefas: buscaTarefas })
    }
  };

  onChangeInput = (event) => {
    const novoInputValue = event.target.value
    this.setState({ inputValue: novoInputValue })
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novoArrayTarefas = [...this.state.tarefas, novaTarefa]
    this.setState({ tarefas: novoArrayTarefas })
  }

  selectTarefa = (id) => {
    const arrayTarefasMapeado = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: arrayTarefasMapeado })
  }

  onChangeFilter = (event) => {
    const novoFilterValue = event.target.value
    this.setState({ filtro: novoFilterValue })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
