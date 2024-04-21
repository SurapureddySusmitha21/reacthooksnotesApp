// Write your code here
import {useState} from 'react'
import {v4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  BackgroundContainer,
  NotesHeading,
  FormContainer,
  ReactFirstText,
  ReactSecondText,
  AddBtn,
  ListItemsContainer,
  ErrorImage,
  ErrorHeading,
  ErrorParagraph,
  Ulcontainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [titleName, setTitleName] = useState('')
  const [listItem, setListItem] = useState([])

  const getAddBtn = event => {
    event.preventDefault()

    const newList = {
      id: v4(),
      title,
      titleName,
    }
    setListItem(prevsState => [...prevsState, newList]),
      setTitle(' '),
      setTitleName(' ')
  }

  const getTheTitle = event => setTitle(event.target.value)

  const getTheTitleName = event => setTitleName(event.target.value)

  const renderEmptyNotesView = () => (
    <ListItemsContainer>
      <ErrorImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <ErrorHeading>No Notes Yet</ErrorHeading>
      <ErrorParagraph>Notes you add will appear here</ErrorParagraph>
    </ListItemsContainer>
  )

  const renderNotes = () => (
    <Ulcontainer>
      {listItem.map(each => (
        <NoteItem key={each.id} noteItemList={each} />
      ))}
    </Ulcontainer>
  )

  return (
    <BackgroundContainer>
      <NotesHeading>Notes</NotesHeading>
      <FormContainer onSubmit={getAddBtn}>
        <ReactFirstText
          type="text"
          placeholder="Title"
          onChange={getTheTitle}
          value={title}
        />
        <ReactSecondText
          type="text"
          placeholder="Take a Note..."
          onChange={getTheTitleName}
          value={titleName}
        />
        <AddBtn type="submit">Add</AddBtn>
      </FormContainer>
      {listItem.length === 0 ? renderEmptyNotesView() : renderNotes()}
    </BackgroundContainer>
  )
}
export default Notes
