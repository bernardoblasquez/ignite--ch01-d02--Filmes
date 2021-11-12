import { useState, useEffect } from 'react'
import { api } from '../services/api';
import { Button } from '../components/Button';

import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genreId: number;
  clickHandle: (id:number) => void;
}

export function SideBar(props:SideBarProps) {

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  const ButtonList = () => {
    return(
      genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => props.clickHandle(genre.id)}
          selected ={props.genreId === genre.id}
        />
      ))
    )
  }

  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          { ButtonList() }
        </div>
      </nav>

  )
}