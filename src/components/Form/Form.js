import { BsSearch } from 'react-icons/bs';

export default function Form({ onSubmit }) {
  const handlerSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const formValue = form.elements.movieName.value;
    if (formValue.trim() === '') {
      alert('please enter movie name');
      return;
    }

    onSubmit(formValue);
  };
  return (
    <form onSubmit={handlerSubmit}>
      <input name="movieName" placeholder="enter movie name" />
      <button type="submit">
        <BsSearch />
      </button>
    </form>
  );
}
