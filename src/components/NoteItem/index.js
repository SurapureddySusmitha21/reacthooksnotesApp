// Write your code here
import {NoteListItem, NoteTitle, NoteTitleName} from './styledComponents'

const NoteItem = props => {
  const {noteItemList} = props
  const {title, titleName} = noteItemList

  return (
    <NoteListItem>
      <NoteTitle>{title}</NoteTitle>
      <NoteTitleName>{titleName}</NoteTitleName>
    </NoteListItem>
  )
}

export default NoteItem
