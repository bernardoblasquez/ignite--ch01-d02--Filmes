
interface ContentHeaderProps {
   className: string;
   genreTitle: string
}

export function ContentHeader (props:ContentHeaderProps) {
   return(
      <header>
         <span className={props.className}>Categoria:<span> {props.genreTitle}</span></span>
      </header>
   )
}
