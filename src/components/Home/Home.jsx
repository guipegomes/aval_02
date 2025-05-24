import { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context/MovieContext";
import './Home.scss';

function Home() {
  const { movies } = useContext(MovieContext);

  return (
    <div className="home-wrapper">
      {/* Grid de Notícias */}
      <div className="news-grid">
        <div className="news-item span-5">
          <h2>Carlão do IFSP Declara Guerra ao CSS!</h2>
          <h4>Cansado de divs se comportando mal, o Professor Carlos de Almeida afirma: “CSS não é uma folha de estilo, é um gerador de estresse!”</h4>
          <p>Em uma aula intensa no IFSP, o Professor Carlos de Almeida — mais conhecido como Carlão — declarou oficialmente guerra ao CSS. "Eu já escrevi sistemas inteiros de backend com menos bugs do que uma única grid em CSS!", gritou Carlão. Testemunhas relatam que, em um momento particularmente tenso, ele tentou aplicar <span className="italic">justify-content: sanity;</span>... mas não funcionou.</p>
        </div>

        <div className="news-item span-5">
          <h2>IFSP Anuncia Nova Piscina Olímpica no Lugar do Hangar!</h2>
          <h4>Reitor afirma: “Se não conseguimos voar, ao menos podemos nadar.”</h4>
          <p>Em uma coletiva de imprensa que deixou alunos e professores boquiabertos (e molhados), o IFSP anunciou a construção de uma piscina olímpica no lugar hangar. A decisão foi tomada após anos de tentativas frustradas de transformar aquele espaço em um laboratório de drones, oficinas de mecânica e até um campo de paintball indoor. A nova piscina contará com uma plataforma de saltos feita com sobras de andaimes da obra do bloco novo, correnteza artificial para simular o trânsito da linha 64, e uma área exclusiva para esportes subaquáticos como programação molhada e natação sincronizada com drones. O cronograma prevê que a piscina estará pronta no verão... de algum ano ainda a definir.</p>
        </div>

        <div className="news-item span-5">
          <h2>Ônibus da Linha 64 Atrasado Após Invasão de Animais Curiosos!</h2>

          <h4>Segundo testemunhas, galinhas, um bode e até uma capivara decidiram fazer um tour educacional até o IFSP.</h4>
          <p>Passageiros da linha 64 Rodoviária-IFSP viveram momentos inusitados na manhã desta quarta-feira. O motivo do atraso? Uma verdadeira expedição da fauna local invadiu a pista! Tudo começou quando duas galinhas atravessaram lentamente na faixa de pedestres (sim, na faixa). Logo em seguida, um bode, que parecia ser o líder do grupo, subiu na catraca, recusando-se a pagar passagem. O ápice da confusão foi quando uma capivara, claramente interessada em cursos técnicos, sentou-se pacificamente no banco da frente e se recusou a descer. A SOU Transportes informou que está avaliando incluir uma tarifa especial para passageiros de quatro patas.</p>
        </div>
      </div>

      {/* Grid de Filmes */}
      <div className="movies-grid">
        <div className="section-title">
          <h2>Movies Section</h2>
        </div>
        <div className="movies-content">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/read/${movie.id}`}
              className="movie-card"
            >
              <h5 className="italic">
                Id: <span className="weight-400">{movie.id}</span>
              </h5>
              <h4>{movie.name}</h4>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home;