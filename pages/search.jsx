import Head from 'next/head';
import React, { useEffect, useState } from 'react';

// import Tmdb from '../src/components/database/Tmdb';
// import MovieRow from '../src/components/movie-row/MovieRow';


export default function Home({list}) {
  
  
    const [searchText, setSearchText] = useState('');

    const [movieList, setMovieList] = useState([]);

    const handleSearch = async () => {
        
        if(searchText !== '') {
                //requisição de busca na api:
                const result = await fetch(`${apiBase}/search?q=${searchText}?api_key=${apiKey}`);
                //transformar em json:
                const json = await result.json();
                //fornecer o resultado:
                setMovieList(json.list);

            }

    }
  
  
  
  
  return (
    <>
      <Head>
        <title>NextFlix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
      <main>

            <h1>Buscaaaa</h1>

            <div>
                <input type="text" 
                value={searchText} 
                onChange={e => setSearchText(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>          
            </div>

            <ul className="movieList">
               
                {movieList.map (item => (

                    <li key={"keyMl"}>
                        <a key={"keyLink"} href={`/movie/${item.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" /><br/>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>

      </main>
      
  


      <footer>
      </footer>
    </>
  );
}
