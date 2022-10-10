import { Button } from "@mui/material";
import {Teacher} from "../../@types/teacher";
import {ListStyled, ItemList, Photo, Information, Name, Value, Describe, ListEmpty} from "./List.style";

interface ListProps{
  teachers: Teacher[],
}

const List = (props: ListProps) => {
      return ( 
 	      <div>
            {props.teachers.length > 0 ? (
                <ListStyled>
                    {props.teachers.map(teacher  => (
                        <ItemList  key={teacher.id}>
                            <Photo src={teacher.photo}></Photo>
                            <Information >
                                <Name>{teacher.name}</Name>
                                <Value>{teacher.value_hour.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} por hora</Value>
                                <Describe>{teacher.describe}</Describe>
                                <Button sx={{ width: '70%' }}>Marcar Aula com {teacher.name}</Button>
                            </Information> 
                        </ItemList >
                    ))}
                </ListStyled>
            ) : (
                    <ListEmpty>Nenhum item encontrado</ListEmpty>
            )}
        </div>
                
      )

};

export default List;
