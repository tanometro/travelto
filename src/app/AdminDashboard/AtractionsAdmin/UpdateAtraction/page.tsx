export default function UpdateAtraction(){
  return (
    <div>
      <form action="submint">
        <label htmlFor="name">Name</label>
        <input type="text" />
        <label htmlFor="city">City</label>
        <input type="text" />
        <label htmlFor="coord">Coordinates</label>
        <input type="text" />
        <label htmlFor="duration">Duration</label>
        <input type="text" />
      </form>
      <button>Update Atraction</button>
    </div>
  );
}